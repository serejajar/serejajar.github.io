import { deleteThing } from "./localStorage.js";


// Отрисовка таблицы
export function renderTable() {
    const things = JSON.parse(localStorage.getItem('things')) || [];
    const tableBody = document.querySelector(".tbody");

    tableBody.innerHTML = "";
    console.log(things);

    things.forEach((thing) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
        <td>${thing.title}</td>
        <td>${thing.shelf}</td>
        <td>${thing.weight}</td>
        <td>${thing.date}</td>
        <td>
        <button type="button" class="btn-delete">
        Удалить
        </button>
        </td>
        `
        tableBody.append(tableRow)

        const deleteBtn = tableRow.querySelector('.btn-delete');
        deleteBtn.addEventListener('click' , () => deleteThing(things, thing, tableRow))

    });


}