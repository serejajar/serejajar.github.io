Проверил вашу работу. Задание выполнено на отлично и вам плюсик за правильное использование модулей! ДЗ принято.

Что можно улучшить:
- JSON.parse без защиты. Если в localStorage окажется строка не JSON, то все упадёт. Лучше обработать это поведение:
function loadItems() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    console.warn("Ошибка чтения данных склада");
    return [];
  }
}
И это частый вопрос на собеседованиях!

- splice меняет сам массив, поэтому его лучше не использовать
deleteButtons.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        items.splice(index, 1);
Тут index берётся из текущего количества элементов (deleteButtons), а после сортировки порядок элементов меняется. В итоге может удаляться не тот элемент и это баг будет потом трудно отловить. Использование id решает эту проблему.

Рекомендации
Хотя вы правильно использовали модули, я все же рекомендую почитать эти статьи.
https://learn.javascript.ru/modules

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# Почему не работает <button onclick="removePredmet()">Удалить</button>
inline обработчиики (т.е. те что были добавлены в качестве аттрибутов) JS ищут функцию в глобальной области (window). Когда ваш JS-файл подключён как модуль, то ваша функция removePredmet не становится глобальной. Вот самый простой способ это исправить:

window.removePredmet = function (index) {
    console.log(index);
};

# как подключить JustValidate
Добавьте вот этот скрипт в index.html:

<script defer src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>

# не пониаю как сделать
Вы можете создать функцию navigate, где будет логика по загрузке страницы. Т.е. вы любом месте вашего скрипта сможете вызвать функцию, например для navigate('add');

import { getLoaderEl } from "./components.js";

//Навигация по приложению
export default async function navigate(page = 'main', request = {}) {
    const appEl = document.querySelector('#app');
    const loaderEl = getLoaderEl();
    appEl.replaceChildren(loaderEl);

    const pages = {
        main: './homePage.js', // файл скрипта с кодом для отображения всех эл-ов на странице home
        add: './formPage.js',
        edit: './formPage.js',
    };

    await import(pages[page])
        .then(module => module.default(appEl, request));

    loaderEl.remove();
}
