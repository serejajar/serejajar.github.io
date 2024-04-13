Все работает по условиям задачи. Отлично! Вам большой плюс что вы использовали Promise.all для запросов и .sort() для сортировки имен в работе. ДЗ принято.

Что можно исправить:
- Если какой-то запрос выполнился успешно, но никого не найдено (вернул ноль записей), программа должна вывести предупреждение “No results found for ‘<поисковый аргумент>’”.
- Цикла в вашем коде можно избежать если использовать Promise.all.
https://learn.javascript.ru/promise-api#promise-all
- Вложенный forEach можно также убрать заменив его array.concat
- Имена во второй строчке должны идти в алфавитном порядке.
- При запуске скрипта с одним неверным аргументом:
node index.js xyz
Выдает следующую ошибку:

Рекомендации
- Этот код можно сделать значительно проще используя array.sort() и взять первый и последний элементы полученного массива.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

- Сортировка с помощью lodash
https://lodash.com/docs/4.17.15#sortBy


Рекомендации к следующему ДЗ
- Сразу выполняйте часть с аутентификацией, она все равно нужна будет в следующих модулях.

- index.js - в этом файле Вы создаете объект приложения express, подключаете все нужные middlewares и routes и запускаете его.

- Для активных таймеров нужно вычислять поле progress, за время проверки работ я видел много странных реализаций этого функционала, но как правило было неправильно, хотя правильный способ вроде как самый простой: вычисляйте поле progress для каждого полученного таймера в момент запроса просто как разницу:

Date.now() - timer.start

- Во всех обработчиках таймеров нужно учитывать id текущего пользователя, т.е. пользователь должен получать только таймеры, которые он создал и останавливать только свои

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.



# Пример сортировки:

Promise.all(names.map((name) => getData(name)))
  .then((arr) => arr.flat())
  .then((heightSortArr) => {
    const arrL = heightSortArr.length;

    if (arrL < 1) return;

    heightSortArr.sort((a, b) => a.height - b.height);

    const nameSortArr = [...heightSortArr];

    const sortNames = nameSortArr
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((el) => el.name)
      .join(", ");

    console.log(`Total results: ${arrL}.
  All: ${sortNames}.
  Min height: ${heightSortArr[0].name}, ${heightSortArr[0].height}cm.
  Max height: ${heightSortArr[arrL - 1].name}, ${heightSortArr[arrL - 1].height}cm.`);
  })
  .catch((err) => console.error(err));


----
###
Прочее

Вам нужно объединить массивы с результатами в один общий массив. Затем получить все имена из этого массива. И последнее вам нужно найти минимальный и максимальный рост. Напишите если нужна более подробная информация как это реализовать в коде.

# как сделать так, чтобы программа принимала запросы из командной строки.
С помощью свойства process.argv. Например, следующий код проверяет есть ли аргументы при вызове команды node index.js и выдает ошибку если их нет.

if (process.argv.length <= 2) {
  console.error("Must have 1 or more arguments");
  process.exit(0);
}
https://nodejs.org/docs/latest/api/process.html#processargv


#решение 1
const axios = require("axios");

if (process.argv.length <= 2) {
  console.error("Must have 1 or more arguments");
  process.exit(0);
}

const data = [];

const characters = process.argv.slice(2);

const requests = characters.map((el) => axios(`https://swapi.dev/api/people/?search=${el}`));

(async () => {
  await Promise.allSettled(requests).then((results) => {
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        if (!result.value.data.results.length) console.log(`No results found for ${characters[num]}`);
        result.value.data.results.forEach((character) => data.push(character));
      }

      if (result.status == "rejected") {
        console.log(`${characters[num]}: ${result.reason}`);
      }
    });
  });

  data.sort((x, y) => x.height - y.height);

  const allNames = data.map((el) => el.name).sort();

  console.log("Total result: ", data.length);
  console.log("All: ", ...allNames);
  console.log(`Min height: ${data[0].name}, ${data[0].height} cm.`);
  console.log(`Max height: ${data.at(-1).name}, ${data.at(-1).height} cm.`);
})();

# решение 2
import fetch from 'node-fetch';

const url = 'https://swapi.dev/api/people/?search=';
const responseArray = process.argv.splice(2);

const showResult = async () => {
  if (responseArray.length < 1) {
    throw new Error('There are no response.');
  }
  const responsedPeople = async () => await Promise.all(responseArray.map(name => getPerson(name)));
  const normalizedPeopleArray = (await responsedPeople()).flat(Infinity);
  const {total, maxName, minName, min, max, names} = prepareResult(normalizedPeopleArray);

  console.log(`
    Total results: ${total}
    All: ${names}
    Min height: ${minName}, ${min} cm.
    Max height: ${maxName}, ${max} cm.
  `);
};


try {
  showResult();
} catch (err) {
  console.error(err);
}

const getPerson = (name) => {
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        const body = await fetch(`${url}${name}`);
        const data = await body.json();
        resolve(data.results);
      })();
    } catch (err) {
      return reject(err);
    }
  });
};

const prepareResult = (arr) => {
  if (arr.length === 0) {
    throw new Error('No such person.')
  }
  const heightSorted = arr.sort((a, b) => Number(a.height) - Number(b.height));

  return {
    total: arr.length,
    names: arr
      .map(el => el.name)
      .sort()
      .join(', '),
    min: heightSorted[0].height,
    max: heightSorted[heightSorted.length - 1].height,
    minName: heightSorted[0].name,
    maxName: heightSorted[heightSorted.length - 1].name,
  }
};
