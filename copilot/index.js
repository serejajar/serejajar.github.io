const email = "pooh.developer@gmail.com";
const url = "https://sb-film.skillbox.cc/films";

function createTable(films) {
  const filmTableBody = document.querySelector("#film-tbody");
  filmTableBody.innerHTML = "";
  films.forEach((film) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${film.title}</td>
    <td>${film.genre}</td>
    <td>${film.releaseYear}</td>
    <td>${film.isWatched ? "Да" : "Нет"}</td>
    <td><button class='btn-delete' data-id=${
      film.id
    }>Удалить из списка</button></td>
    `;

    filmTableBody.appendChild(row);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = document.querySelector("#film-form");
  const title = document.querySelector("#title").value.trim();
  const genre = document.querySelector("#genre").value.trim();
  const releaseYear = document.querySelector("#releaseYear").value.trim();
  const isWatched = document.querySelector("#isWatched").checked;

  if (!title) {
    alert("Пожалуйста, введите название фильма");
    return;
  }

  if (!genre) {
    alert("Пожалуйста, введите жанр фильма");
    return;
  }

  if (!releaseYear) {
    alert("Пожалуйста, введите год выпуска");
    return;
  }

  const film = {
    title,
    genre,
    releaseYear,
    isWatched,
  };

  addFilm(film).then(() => form.reset());
}

async function addFilm(film) {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email,
    },
    body: JSON.stringify(film),
  });

  await renderTable(url);
}

async function renderTable(url) {
  const response = await fetch(url, {
    headers: {
      email,
    },
  });

  const films = await response.json();
  createTable(films);
}

document
  .querySelector("#film-form")
  .addEventListener("submit", handleFormSubmit);

const filterTitle = document.querySelector("#filter-title");
const filterGenre = document.querySelector("#filter-genre");
const filterReleaseYear = document.querySelector("#filter-releaseYear");
const sorting = document.querySelector("#sorting");

function createFilterUrl() {
  let urlWithParams = url;
  const params = [];

  if (filterTitle.value) {
    params.push(`title=${filterTitle.value}`);
  }
  if (filterGenre.value) {
    params.push(`genre=${filterGenre.value}`);
  }
  if (filterReleaseYear.value) {
    params.push(`releaseYear=${filterReleaseYear.value}`);
  }

  if (params.length > 0) {
    urlWithParams += `?${params.join("&")}`;
  }

  return urlWithParams;
}

async function sortFilms() {
  const url = createFilterUrl();
  const response = await fetch(url, {
    headers: {
      email,
    },
  });

  const films = await response.json();
  let sortedFilms = [...films];
  if (sorting.value === "Название") {
    sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sorting.value === "Жанр") {
    sortedFilms.sort((a, b) => a.genre.localeCompare(b.genre));
  } else if (sorting.value === "Год") {
    sortedFilms.sort((a, b) => b.releaseYear - a.releaseYear);
  } else if (sorting.value === "Буду смотреть") {
    sortedFilms = sortedFilms.filter((film) => !film.isWatched);
  }

  createTable(sortedFilms);
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

filterTitle.addEventListener("input", debounce(sortFilms, 300));
filterGenre.addEventListener("input", debounce(sortFilms, 300));
filterReleaseYear.addEventListener("input", debounce(sortFilms, 300));
sorting.addEventListener("change", debounce(sortFilms, 300));

async function deleteById(id) {
  let urlWithId = url;
  urlWithId = `${urlWithId}/${id}`;
  await fetch(urlWithId, {
    method: "DELETE",
    headers: {
      email,
    },
  });

  await renderTable(url);
}

document.querySelector("#film-tbody").addEventListener("click", async (e) => {
  if (e.target.classList.contains("btn-delete")) {
    const id = e.target.getAttribute("data-id");
    await deleteById(id);
  }
});

async function clearAll() {
  await fetch(url, {
    method: "DELETE",
    headers: {
      email,
    },
  });

  await renderTable(url);
}

document.getElementById("delete-all-btn").addEventListener("click", clearAll);

renderTable(url);
