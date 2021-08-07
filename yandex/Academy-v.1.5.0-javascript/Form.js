class Form extends Component {
    constructor() {
        super();
        // Можно лучше: this._element больше относиться к функционалу класса Component, это свойство можно перенести туда
        this._element = null;
        this._onSubmit = this._onSubmit.bind(this);
    }

    setEventListener() {
        // Можно лучше: определить свойство this._submit в конструкторе и добавить проверку что там не пусто при вызове. это поможет избежать ошибок, если querySelector не найдет элемент.
        this._submit = this._element.querySelector(`.columns__submit`);
        this._submit.addEventListener(`click`, this._onSubmit);
    }

    get template() {
        return `<form>
                    <h1 class="column__title">
                        Введите данные
                    </h1>
                    <h2 class="column__heading">
                        Имя?
                    </h2>
                    <input type="text" name="name">
                    <h2 class="column__heading">
                        Есть кот?
                    </h2>
                    <label class="column__label">
                        <input type="radio" value="yes" name="cat">
                        <span>Да</span>
                    </label>
                    <label class="column__label">
                        <input type="radio" value="no" name="cat">
                        <span>Нет</span>
                    </label>
                    <h2 class="column__heading">Отдыхал недавно?</h2>
                    <label class="column__label">
                        <input type="radio" value="yes" name="rest">
                        <span>Да</span>
                    </label>
                    <label class="column__label">
                        <input type="radio" value="no" name="rest">
                        <span>Нет</span>
                    </label>
                    <h2 class="column__heading">Денег ок?</h2>
                    <label  class="column__label">
                        <input type="radio" value="yes" name="money">
                        <span>Да</span>
                    </label>
                    <label class="column__label">
                        <input type="radio" value="no" name="money">
                        <span>Нет</span>
                    </label>
                    <button class="columns__submit">
                        HAPPINESS RATE
                    </button>
		    	</form>`.trim();
          // Можно лучше: trim() не удалит пробелы в начале и конце строки, так как их здесь нет. Подробнее: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    }

    set onSubmit(fn) {
        this._onSubmit = fn;
    }
    // Надо исправить: Если в script.js не будет присвоен onSubmit сработает этот метод вызывающий сам себя. Так же return здесь не нужен, т.к. возвращенные данные после клика не обрабатываются.
    _onSubmit(evt) {
        evt.preventDefault();
        return typeof this._onSubmit === `function` && this._onSubmit(evt);
    }
    removeEventListener() {
        this._submit.removeEventListener(`click`, this._onSubmit);
    }
}
