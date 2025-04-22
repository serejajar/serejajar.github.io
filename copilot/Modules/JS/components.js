import {sort} from "./sort.js"

//Создание обертки заголовка и кнопки
function getWrapper() {
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("wrapper");
    return wrapperEl
}
// Создание заголовка
function getTitleEL(text) {
    const titleEl = document.createElement("h2");
    titleEl.textContent = text
    titleEl.classList.add("title");
    return titleEl
}
// Создание кнопки добавления записи
function getAddEntryBtn(text) {
    const addEntryBtnEl = document.createElement("button");
    addEntryBtnEl.textContent = text;
    addEntryBtnEl.type = "button"
    addEntryBtnEl.classList.add("btn-add")
    return addEntryBtnEl

}
// Создание таблицы
function getTableEl() {
    const tableEl = document.createElement("table");
    tableEl.classList.add("table")
    const tableHeadEl = document.createElement("thead");
    const tableHeadRowEl = document.createElement('tr');

    const tableTitle = document.createElement("th");
    tableTitle.textContent = "Название";
    tableTitle.classList.add('table-title');

    const tableShelf = document.createElement("th");
    tableShelf.textContent = "Полка";
    tableShelf.classList.add('table-shelf');

    const tableWeight = document.createElement("th");
    tableWeight.textContent = "Вес";
    tableWeight.classList.add('table-weight');

    const tableDate = document.createElement("th");
    tableDate.textContent = "Дата";
    tableDate.classList.add('table-date');

    const tableAction = document.createElement("th");
    tableAction.textContent = "Действие";
    tableAction.classList.add('table-action');

    const tableBodyEl = document.createElement("tbody");
    tableBodyEl.classList.add("tbody")
    tableEl.append(tableHeadEl, tableBodyEl)

    tableHeadRowEl.append(tableTitle, tableShelf, tableWeight, tableDate, tableAction)
    tableHeadEl.append(tableHeadRowEl)
    tableEl.prepend(tableHeadEl)

    tableTitle.addEventListener('click', () => sort('title'))
    tableShelf.addEventListener('click', () => sort('shelf'))
    tableWeight.addEventListener('click', () => sort('weight'))
    tableDate.addEventListener('click', () => sort('date'))

    return tableEl
}
// Создание формы
function getAddEntryForm() {
    const form = document.createElement("form");
    form.classList.add("form");
    return form
}
//Создание инпута
function getInput(type, name, placeholder, id) {
    const input = document.createElement("input");
    input.classList.add("input");
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    input.id = id;
    return input
}

//Создание кнопки отмены 
function getCancelBtn(text) {
    const cancelBtnEl = document.createElement("button");
    cancelBtnEl.textContent = text;
    cancelBtnEl.type = "button"
    cancelBtnEl.classList.add("btn-cancel")
    return cancelBtnEl
}

//Создание loader 
function getLoaderEl() {
    const loaderEl = document.createElement('div');
    loaderEl.classList.add("loader")
    return loaderEl
}


export {
    getWrapper,
    getTitleEL,
    getAddEntryBtn,
    getTableEl,
    getAddEntryForm,
    getInput,
    getCancelBtn,
    getLoaderEl
}