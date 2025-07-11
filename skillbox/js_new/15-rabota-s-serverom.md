Проверил вашу работу. Вы правильно работаете с API и вам плюсик за лаконичный код! Задание выполнено на отлично!
ДЗ принято.

Что можно исправить:


Рекомендации
Рекомендую изучить эти статьи про сетевые запросы. Там есть много интересного про ход загрузки, API  самого fetch и другие полезные материалы.
https://learn.javascript.ru/network
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.


# Как удалить?
Для удаления фильма можно использовать DELETE-эндпоинт /films/:id.  Т.е. это точно такой же запрос только нужно поменять метод на DELETE, вот так:

async function deleteFilm(id) {
  const response = await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
}


# Что такое гет параметры?
Я так понимаю вы про это спрашиваете:

const filmsResponse = await fetch(`https://sb-film.skillbox.cc/films?title=${title}&genre=${genre}&releaseYear=${releaseYear}&isWatched=${isWatched}`, {
    headers: {
      email: 'championka17@gmail.com'
    },
});

Это так называемые GET-параметры в URL — способ передать данные на сервер при открытии веб-страницы.



Пример:

Вот такой адрес:

https://sb-film.skillbox.cc/films?title=rrrr&releaseYear=2024
Здесь:

? — начало GET-параметров.

title=rrrr — параметр title со значением "rrrr".

& — разделяет параметры.

releaseYear=2024 — параметр releaseYear со значением "2024".

Сервер по этим параметрам понимает, что вы хотите найти фильмы, где свойство "title" включает в себя строку "rrrr" и свойство releaseYear соответственно 2024.



При запросе fetch вы можете в URL подставить свои значения т.е. передать для  GET-параметра title значение из поля ввода.

fetch(`https://sb-film.skillbox.cc/films?title=${title}&genre=${genre}&releaseYear=${releaseYear}&isWatched=${isWatched}`
