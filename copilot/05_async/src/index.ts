import { peopleResponseType } from './responseType';

class People {
  searchPeople: string[];
  totalResult: number = 0;
  allPeople: string[] = [];
  minHeight?: { name: string, height: number };
  maxHeight?: { name: string, height: number };

  constructor(searchPeople?: string[]) {
    if (searchPeople && searchPeople.length > 0) {
      this.searchPeople = searchPeople;
    } else {
      console.log('Отсутствуют аргументы для поиска');
      process.exit();
    }
  }

  // Получить список людей
  private getPeople(): Promise<(peopleResponseType | null)[]> {
    return Promise.all(this.searchPeople.map(people => {
      return fetch(`https://www.swapi.tech/api/people/?name=${people}`)
        .then(response => response.json())
        .then(res => {
          if (res.result.length === 0) {
            console.log(`No results found for ${people}`)
            return null
          } else {
            let result: peopleResponseType = res.result;
            return result;
          }
        })
        .catch(err => {
          console.error(err);
          return null;
        })
    }))
  }

  // Обработать промис с результатом
  async calcResultPeople(): Promise<boolean> {
    let arrPeople = await this.getPeople()
    arrPeople.forEach(people => {
      if (Array.isArray(people)) {
        let response: peopleResponseType = people[0];
        let properties = response.properties;
        this.totalResult++;
        this.allPeople.push(properties.name);
        if (!this.minHeight) {
          this.minHeight = {
            name: properties.name,
            height: properties.height
          };
        } else {
          if (Number(this.minHeight.height) > Number(properties.height)) {
            this.minHeight = {
              name: properties.name,
              height: properties.height
            };
          }
        }
        if (!this.maxHeight) {
          this.maxHeight = {
            name: properties.name,
            height: properties.height
          };
        } else {
          if (Number(this.maxHeight.height) < Number(properties.height)) {
            this.maxHeight = {
              name: properties.name,
              height: properties.height
            };
          }
        }
      }
    })
    if (this.totalResult > 0) {
      this.renderResult()
      return true;
    } else {
      console.log('Не найдено ни одного результата');
      return false
    }
  }

  // Вывести результат
  private renderResult() {
    console.log(`Total results: ${this.totalResult}.`);
    console.log(`All: ${this.allPeople.sort().join(', ')}.`);
    if (this.minHeight && this.maxHeight) {
      console.log(`Min height: ${this.minHeight.name}, ${this.minHeight.height} cm.`);
      console.log(`Max height: ${this.maxHeight.name}, ${this.maxHeight.height} cm.`);
    }
  }
}

let people = new People(process.argv.slice(2));
people.calcResultPeople();










