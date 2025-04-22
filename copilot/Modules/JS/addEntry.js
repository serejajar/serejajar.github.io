import * as components from "./components.js"

import {
    appStart
} from "./appStart.js"

import {
    handleFormSubmit
} from "./handleFormSubmit.js";


export async function addEntry(containerEl) {
    const form = components.getAddEntryForm();

    const titleEl = components.getTitleEL('Добавить запись')

    const titleInput = components.getInput('text', 'title', 'Название', 'title')
    const shelfInput = components.getInput('text', 'shelf', 'Полка', 'shelf')
    const weightInput = components.getInput('number', 'weight', 'Вес', 'weight')
    const dateInput = components.getInput('date', 'date', 'Дата', 'date')

    const addEntryBtnEl = components.getAddEntryBtn('Добавить запись');
    addEntryBtnEl.type = "submit";

    const cancelBtnEl = components.getCancelBtn('Отмена');
    cancelBtnEl.addEventListener('click', function (event) {
        event.preventDefault()
        appStart()
    })

    form.append(titleInput, shelfInput, weightInput, dateInput, addEntryBtnEl)
    containerEl.append(titleEl, form, cancelBtnEl)



    const validate = new JustValidate(form);
    validate.addField('#title', [{
        rule: 'required',
        errorMessage: 'Введите название',
    }]);

    validate.addField('#shelf', [{
        rule: 'required',
        errorMessage: 'Введите номер полки',

    }]);

    validate.addField('#weight', [{
            rule: 'required',
            errorMessage: 'Введите вес',
        },
        {
            rule: 'minLength',
            value: 1,
            errorMessage: 'Введите корректный вес (кг)',
        },
        {
            rule: 'maxLength',
            value: 4,
            errorMessage: 'Введите корректный вес (кг)',

        }
    ]);
    validate.addField('#date', [{
        rule: 'required',
        errorMessage: 'Введите дату',
    }, ]);



    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validate.validate();
    });

    validate.onSuccess(function () {
        handleFormSubmit();
    });

}