// Надо исправить: Когда поле ввода для поиска в фокусе, то нажатие на кнопку энтер/кнопку поиска некорректно перезагрузит страницу
class Search extends Component {
  constructor() {
    super();
    this._onChange = null;
  }

  get template() {
    // Надо исправить: Component.js добавит только первый элемент из этого шаблона (return createNewTag.firstChild)
    return `<input type="text" name="search" placeholder="Search">
      <button type="submit" class="visually-hidden">Search</button>`.trim();
  }

  removeEventListener() {
    this._element
        .removeEventListener(`keydown`, this._onSearchChange);
  }

  _onSearchChange(event) {
    // Надо исправить: this в здесь будет равным элементу <input>, его нужно привязать к this с помощью bind, как было сделано в Form.
    if (typeof this._onChange === `function`) {
      this._onChange(event.target.value);
    }
  }
  set onChange(fn) {
    this._onChange = fn;
  }

  setEventListener() {
    this._element
        .addEventListener(`keyup`, this._onSearchChange);
  }

}
