Проверил вашу работу. Задание выполнено на отлично и вам плюсик за правильное использование модулей! ДЗ принято.

Что можно исправить:

Рекомендации
Хотя вы правильно использовали модули, я все же рекомендую почитать эти статьи.
https://learn.javascript.ru/modules

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

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
