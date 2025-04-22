import { getTbody } from "../../ui/elements.js";

import { handleDeleteThing } from "./handlers/handleDeleteThing.js";

export function createTbody(things) {
  const tbody = getTbody();
  tbody.innerHTML = "";

  things.forEach((thing) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${thing.name}</td>
    <td>${thing.shelf}</td>
    <td>${thing.weight}</td>
    <td>${thing.time}</td>
    <td><button class="btn-reset tbody-btn btn-delete">Удалить</button></td>
    `;
    tbody.append(row);
    row
      .querySelector(".btn-delete")
      .addEventListener("click", () => handleDeleteThing(thing.name));
  });

  return tbody;
}
