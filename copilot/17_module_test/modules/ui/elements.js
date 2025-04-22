//получение элемента страница
function getPage(className) {
  const pageEl = document.createElement("div");
  pageEl.classList.add(className);
  return pageEl;
}

//получение заголовка
function getTitle(text) {
  const titleEl = document.createElement("h1");
  titleEl.classList.add("main-title");
  titleEl.textContent = text;
  return titleEl;
}

//получение кнопки
function getButton(text, type) {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn", "btn-reset");
  btnEl.type = type;
  btnEl.textContent = text;
  return btnEl;
}

//получение ссылки
function getLink(text, href, className) {
  const aEl = document.createElement("a");
  aEl.classList.add(className);
  aEl.textContent = text;
  aEl.href = href;
  return aEl;
}

//получение таблицы
function getTable() {
  const tableEl = document.createElement("table");
  tableEl.id = "storage-table";
  return tableEl;
}

//получение шапки таблицы
function getThead() {
  const tHeadEl = document.createElement("thead");
  tHeadEl.classList.add("t-head");
  return tHeadEl;
}

//получение тела таблицы
function getTbody() {
  const tBodyEl = document.createElement("tbody");
  tBodyEl.classList.add("t-body");
  return tBodyEl;
}

//полчение формы
function getForm() {
  const formEl = document.createElement("form");
  formEl.id = "storage-form";
  return formEl;
}

//получение инпутов
function getInput(type, name, placeholder, required) {
  const inputEl = document.createElement("input");
  inputEl.classList.add("storage-form__input");
  inputEl.type = type;
  inputEl.name = name;
  inputEl.placeholder = placeholder;
  inputEl.required = required;
  return inputEl;
}

export {
  getPage,
  getTitle,
  getButton,
  getLink,
  getTable,
  getThead,
  getTbody,
  getForm,
  getInput,
};

//лоадер
export function getLoader() {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  return loader;
}
