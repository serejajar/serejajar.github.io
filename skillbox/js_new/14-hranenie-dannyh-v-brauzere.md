Задание выполнено на отлично и вам плюсик что разобрались с локальным хранилищем. ДЗ принято.

Что можно улучшить:
- Лучше один раз вызывать querySelector и затем использовать переменную во всех функциях:
const titleInput = document.querySelector("#title");
Сейчас это не критично, просто помните на будущее, что меньше обращений к DOM это всегда лучше производительность вашего приложения.

- Многократное чтение localStorage:
JSON.parse(localStorage.getItem('films')) || []
Этот код лучше вынести в отдельные функкции:
function getFilms() {
    return JSON.parse(localStorage.getItem('films')) || [];
}

function saveFilms(films) {
    localStorage.setItem('films', JSON.stringify(films));
}
Так будет понятнее и проще, особенно когда в следующем задании нужно будет работать с сервером вместо локального хранилища.

- applySorting() сортирует массив и перезаписывает localStorage
Этого лучше избегать, так как данные не должны менять по каждому изменению. Здесь лучше хранить данные как есть и сортировать копию перед рендером передавая сортированный массив в displayFilms в качестве аргумента.

const films = getFilms();
const sortedFilms = [...films].sort(...)

displayFilms(sortedFilms);

- В renderTable много однотипного кода, его можно вынести в отдельную функцию:
function createTd(text) {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
}
И тогда код станет немного компактнее:
tr.append(
  createTd(film.title),
  createTd(film.genre),
  createTd(film.releaseYear),
  createTd(film.isWatched ? "Да" : "Нет"),
  actionTd
);
- Можно улучшить валидацию для года выпуска, так как сейчас можно отправить разные значения: 20255, -10, 1111. Тут лучше добавить проверку именно для дат:

const year = Number(releaseYear);

if (
  Number.isNaN(year) ||
  year < 1888 ||
  year > new Date().getFullYear()
) {
  errorBlock.textContent = "Введите корректный год выпуска";
  return;
}

Рекомендации
Рекомендую вам к прочтению статью про локальное и сессионное хранилища. Эта информация пригодится вам в дальнейшей работе.
https://learn.javascript.ru/localstorage
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# Не понимаю как удалить конкретный фильм из локал сторадж.
Вы можете удалить фильм из массива с помощью filter.

Для этого вам нужно:
1. Получить массив дел из localStorage
2. Отфильтровать массив фильмов с помощью метода filter чтобы остались все остальные фильмы.
3. Сохранить новое значение в localStorage.

Вот как это выглядит в коде:

function removeFilm(film) {
    let films = JSON.parse(localStorage.getItem('films')) || []
    films = films.filter(_film => _film.title !== film.title)
    localStorage.setItem('films', JSON.stringify(films))

    renderTable()
}

# Как редактировать
При клике на кнопку "редактировать" вам нужно:

1) Получить данные фильма.

2) Установить эти данные для полей ввода формы.

3) Заменить кнопку (полностью или частично) чтобы при сохранении сохранялись изменения редактируемого фильма, а не создавался новый.

# как сортировать
function sortFilm(prop) {
	const films = JSON.parse(localStorage.getItem('films'));

	console.log('prop', prop);
	console.log('до', films);

	films.sort((a, b) => a[prop] > b[prop] ? 1 : -1)

	console.log('после', films);

}
# как редактировать
У вас не совсем корректно редактируется данные фильма. Когда вы вызываете refresh, то в конце этой функции вызывается addFilmToLocalStorage который и добавляет новый фильм, а не редактирует данные существующего. Тут вам нужно использовать map, чтобы изменить массив::

function updateFilmInLocalStorage(updatedFilm) {
  const films = JSON.parse(localStorage.getItem("films")) || [];

  const updatedFilms = films.map(film =>
    film.id == updatedFilm.id ? updatedFilm : film
  );

  localStorage.setItem("films", JSON.stringify(updatedFilms));

  renderTable();
}


# пример как добавить обработчик клика (кнопка удалить) для стороки таблицы
function renderTable(films = []) {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film, id) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td>
      <button class="deleteBtn deleteBtn--Id" data-id="${film.id}">
        Удалить
      </button>
      </td>
    `;

    row.querySelector(".deleteBtn--Id").addEventListener("click", () => {
      const id = row.querySelector(".deleteBtn--Id").dataset.id;
      deleteFilm(id);
    });

    filmTableBody.appendChild(row);
  });
}

# # пример как добавить обработчик клика (кнопка удалить) для стороки таблицы 2
function renderTable() {
  const films = JSON.parse(localStorage.getItem("films")) || [];

  const filmTableBody = document.querySelector("#film-tbody");

  filmTableBody.innerHTML = "";

  films.forEach((film) => {
    const row = document.createElement("tr");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");

    btnEdit.textContent = "Редактировать";
    btnDel.textContent = "Удалить";
    btnEdit.addEventListener("click", addOnClick);
    btnDel.addEventListener("click", addDelClick);
    btnDel.setAttribute("data-id", film.id);
    btnEdit.setAttribute("data-id", film.id);

    row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "да" : "нет"}</td>
            `;

    row.append(btnEdit, btnDel);

    filmTableBody.appendChild(row);
  });
}
