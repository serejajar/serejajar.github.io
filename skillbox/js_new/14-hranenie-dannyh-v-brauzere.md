Задание выполнено на отлично и вам плюсик что разобрались с локальным хранилищем. ДЗ принято.

Рекомендации

- Рекомендую вам к прочтению статью про локальное и сессионное хранилища. Эта информация пригодится вам в дальнейшей работе.
https://learn.javascript.ru/localstorage

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# Не понимаю как удалить конкретный фильм из локал сторадж.

Вы можете удалить фильм из массива с помощью filter.

Для этого вам нужно:
1. Получить массив дел из localStorage
2. Отфильтровать массив фильмов с помощью метода filter чтобы остались все остальные фильмы.
3. Сохранить новое значение в localStorage.

Вот как это выглядит в коде:

function removeFilmOfLocalStorage(film) {
    let films = JSON.parse(localStorage.getItem('films')) || []
    films = films.filter(i => i.title !== film.title)
    localStorage.setItem('films', JSON.stringify(films))

    renderTable()
}