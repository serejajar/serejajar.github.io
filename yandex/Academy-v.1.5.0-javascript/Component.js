class Component {
	constructor() {
		if (new.target === Component) {
			throw new Error(`Can't instantiate Component, only concrete one.`);
		}
	}

	get template() {
		throw new Error(`You have to define template.`);
	}

	static createElement(template) {
		const createNewTag = document.createElement(`div`);
		createNewTag.innerHTML = template;
		return createNewTag.firstChild;
	}

	render() {
		this._element = Component.createElement(this.template);
		this.setEventListener();
		return this._element;
	}
	// Можно лучше: removeItem нигде не используется, думаю его можно удалить
	removeItem() {
		this.removeEventListener();
		this._element.remove();
		this._element = null;
	}

	// Отлично!: Избежать ошибки при вызове отсутствующего метода - это хорошая идея.
	setEventListener() {}
	removeEventListener() {}

}
