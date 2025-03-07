Вы выбрали отличный спиннер!))

Вы правильно используете Promise.all и отдельное спасибо за аккуратный код и разбивку его по файлам, так код легче прочитать. Вы правильно используете Promise.all и вам отдельный плюсик за использование спинера во время загрузки данных. Работа выполнена на отлично! ДЗ принято.

Что можно исправить:
- Во время ожидания ответа лучше показывать что идет загрузка (спиннер, скелетон или просто текст) иначе пользователь вашего сайта будет видеть белый экран и у него будет ощущение неисправности.

Рекомендации:
Хочу вам посоветовать для прочтения еще вот эту информацию. Что-то из этого вы уже знаете, но есть еще другие методы промисов, которые будут вам интересны.   
https://learn.javascript.ru/promise-api

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать чате в следующем модуле.

# не могу понять где мне еще функцию renderPage вызвать для планет и фильмов
При переходе на страницу с фильмом, вам нужно сделать запрос за данными фильма и только после получения данных делать запросы за планетами. Вот пример кода:

export async function renderFilm(episodeId, renderHomePage) {
    const response = await fetch(`https://swapi.dev/api/films/${episodeId}`);
    const film = await response.json();

    /* остальной ваш код по получению данных для фильма */    

    await renderPlanets(film.planets);
    await renderSpecies(film.species);
}


Вот как вылядит пример запроса за планетами

async function renderPlanets(planets) {
    const h2 = document.createElement('h2');
    h2.textContent = 'Planets';

    app.appendChild(h2);

    const planetPromises = planets.map(url => fetch(url).then(res => res.json()));
    const planetData = await Promise.all(planetPromises);

    const planetList = document.createElement('ul');

    planetData.forEach(planet => {
        const listItem = document.createElement('li');
        listItem.textContent = planet.name;
        planetList.appendChild(listItem);
    });
    app.appendChild(planetList);
}



# но данные у 1 и 2 эпизода отображаются не правильно. Не могу понять почему
В условии есть информация про это:

"Подробности одного эпизода можно получить запросом GET https://swapi.dev/api/films/{номер эпизода}, где номер эпизода - это порядковый номер фильма в порядке его выпуска (обратите внимание, это НЕ свойство episode_id, а именно порядковый номер!). IV, V, VI эпизоды имеют номер 1, 2, 3; I, II, III - 4, 5, 6."

Т.е. вы получили ответ и вам нужно взять порядковый номер. Для фильма со скрина ниже порядковый номер 4 так как фильм идет 4-м в списке. Также вы это можете проверить это по свойству url для запроса, тут оно содержит именно цифру 4: https://swapi.dev/api/films/4/

# 404 ошибка
Liveserver при первоначальной загрузке ищет именно этот файл в папке, т.е. если вы откроете эпизод, то поменяете значение в адресной строке на "/1", но при перезагрузке liveserver попробует открыть именно этот путь и выдаст 404 ошибку потому что этого файла нет.

Самый простой вариант использовать параметры в url, т.е. ссылка будет вот такая: http://localhost:5000/?episode=1

В случае если не будет параметра episode, то показывайте список фильмов.

Будет полезно:
https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

# Как использовать popstate:

Тут все проще чем кажется:

window.addEventListener('popstate', () => {
    // вызывать функцию, которая отобразит данные на странице
});

# и как работает loadResource

Эта функция запрашивает скрипт js, данные и файлы стилей, для того чтобы отобразить их. Это базовая реализация SPA (Одностраничное приложение).

loadResource загружает и обрабатывает файл в зависимости от расширения (js/css). Например, для css он вставит тег <link> и добавит в href этого тега ссылку к файлу.

function loadResource(src) {
    if (typeof src !== 'string') {
        return;
    }

    // js
    if(src.endsWith('.js')) {
        return import(src);
    }

    // css
    if(src.endsWith('.css')) {
        if(!cssPromises[src]) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = src;

            cssPromises[src] = new Promise(resolve => {
                link.addEventListener('load', () => resolve());
                document.head.append(link);
            });
        }

        return cssPromises[src];
    }

    // data
    return fetch(src).then(res => res.json());
}

# не прогружаеться картинка
Чуть поменялась структура ответа API и теперь вместо name свойство title, а image стало массивом images и там теперь хранится json. Вот так вы сможете получить изображение.

image.src = product.images[0];
