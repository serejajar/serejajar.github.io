// Нужно исправить: Класс Component создает html-шаблон, а так как класс Person не использует этот функционал, то наследование от Component-а здесь не нужно.
class Person extends Component {
    constructor(name) {
        super();
        this.name = name; // нигде не используется
        this._happiness = 0;
        // Нужно исправить: префикс _ в названии свойства по соглашению информирует что свойство "защищенное"", т.е. не должно использоваться извне класса, несмотря на то что оно доступно для чтения и записи. Подробнее: https://learn.javascript.ru/private-protected-properties-methods#zaschischyonnoe-svoystvo-wateramount Тут логичнее добавить геттер и сеттер.
        this._valueElement = document.querySelector(`.column__value-name`);
        this._iconElement = document.querySelector(`.column__value-icon`);
    }
    // Можно лучше: return можно удалить т.к. возвращенные значения следующих 3-х функций нигде не используются.
    hasCat() {
        return this._happiness++;
    }

    hasRest() {
        return this._happiness++;
    }

    hasMoney() {
        return this._happiness++;
    }

    isSunny() {
        const APIKey = '28c7d687accc7c75aabbc7fb71173feb';
        const city = 'Москва';
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

        // Надо исправить: Добавить обработчик ошибок, в случае недоступности API или невалидного ответа. Подробнее: https://learn.javascript.ru/promise-error-handling
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
              console.log(this._happiness);
                if (res.main.temp - 273 > 15) {
                    // Нужно исправить: Вернет старое значение, а потом уже прибавит +1 к свойству this._happiness. Подробнее об пре и постфиксном операторе "++"": https://learn.javascript.ru/operators#inkrement-dekrement
                    return this._happiness++;
                }
            });
      }
}
