// Все комментарии оставлены в самих файлах, здесь подведен итог КР в виде ответов на вопросы из word-документа:

// Fetch: Нет возможности обработать ошибку в случае недоступности ресурса.

// Уязвимости: Поиск в DOM выполняется по всему документу с довольно распространенными name атрибутами (document.querySelector(`input[name=name]`)), что может привести к некоректныым данным формы. В Form.js есть функция вызывающая сама себя - это может привести к некорректной работе страницы.

// Функционал: Выполнен в соответствии с поставленной задачей, но нужно исправить некорректную работу форм рейтинга пользователя (см. script.js) и поиска (см. Search.js).

// Классы: Оператор "get" (get template) используется некорректно. Он объявлен во многих файлах, но нет кода который бы считывал данные (ClassName.template). Подробнее: https://learn.javascript.ru/property-accessors . Так же есть не нужное наследованием класса (см. Person.js)

// Переменные: Рекомендую подобрать другое имя для переменной PageEnum, а также упростить структуру хранения данных, что бы не было длинных названий вида PageEnum.SiteWrapper.SEARCH (см. ./utils/enums.js). Так же используется защищенные свойства вне класса (Man._valueElement).

window.onload = () => {
	const FORM_WRAPPER = document.querySelector(`.column_type_input`);
	const ratingArray = [];
	let countedRating = 20;


	const renderSearch = (allItemsData) => {
		// Можно лучше: обратные кавычки используются для многосточного текста. Для обычных строк подойдут и одинарные/двойные
		PageEnum.SiteWrapper.SEARCH.innerHTML = ``;

		const searchComponent = new Search();

		PageEnum.SiteWrapper.SEARCH.appendChild(searchComponent.render());

		searchComponent.onChange = (value) => {
			// Надо исправить: Добавить регистронезависимую проверку при фильтрации
			const filteredItems = allItemsData.filter((currentItem) => currentItem._names.includes(value));
			PageEnum.SiteWrapper.rating.innerHTML = ``;
			value === `` ? ratingRender(countedRating, allItemsData) : ratingUpdate(filteredItems);
		};
	};

	const ratingRender = (ratingAmount, ratingArray) => {
		for (let i = 0; i < ratingAmount; i++) {
			ratingArray[i] = new PersonRating(returnRandomData());
		}
		ratingUpdate(ratingArray);
	};

	const ratingUpdate = (ratingArray) => {
		ratingArray.forEach((item) => {
			PageEnum.SiteWrapper.rating.appendChild(item.render());
		});
		if (ratingArray.length === 0) {
			PageEnum.SiteWrapper.rating.innerHTML = `Rating list is empty`
		}
	};

	const renderForm = () => {
		const formComponent = new Form();
		FORM_WRAPPER.appendChild(formComponent.render());

		formComponent.onSubmit = (evt) => {
			evt.preventDefault();

			// Надо исправить: Код ниже всегда будет возвращать 'yes', так как querySelector возвращает первый найденный элемент (Для ответов 'yes' и 'no' используется input c одним и тем же name атрибутом.). Также, можно использовать более удобный и простой способ получить данные с помощью document.forms[formName]. Подробнее: https://learn.javascript.ru/form-elements
			const name = document.querySelector(`input[name=name]`).value;
			const cat = document.querySelector(`input[name=cat]`).value;
			const rest = document.querySelector(`input[name=rest]`).value;
			const money = document.querySelector(`input[name=money]`).value;
			const Man = new Person(name);
			if (cat === 'yes') {
				Man.hasCat();
			}
			if (rest === 'yes') {
				Man.hasRest();
			}
			if (money === 'yes') {
				Man.hasMoney();
			}
			Man.isSunny()
				.then((happiness) => {
					// _valueElement: см. комментарий в коде класса Person
					Man._valueElement.innerHTML = name;
					if (happiness === 4) {
						Man._iconElement.innerHTML = '😆';
					} else if (happiness === 3 || happiness === 2) {
						Man._iconElement.innerHTML = '😐';
					} else {
						Man._iconElement.innerHTML = '☹️';
					}
				});
		}
	};

	renderForm();
	renderSearch(ratingArray);
	ratingRender(countedRating, ratingArray);
};
