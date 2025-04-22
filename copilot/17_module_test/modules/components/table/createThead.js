import { getThead } from "../../ui/elements.js";
import { sortUp } from "./handlers/handleTableSort.js";

export function createThead() {
  const thead = getThead();

  thead.innerHTML = `
  <tr>
  <th><button class="btn-reset thead-btn" id="btn-name">Название</button></th>  
  <th><button class="btn-reset thead-btn" id="btn-shelf">Полка</button></th>  
  <th><button class="btn-reset thead-btn" id="btn-weight">Вес</button></th>  
  <th><button class="btn-reset thead-btn" id="btn-time">Время хранения</button></th>  
  <th></th>  
  </tr>
  `;

  thead
    .querySelector("#btn-name")
    .addEventListener("click", () => sortUp("name"));
  thead
    .querySelector("#btn-shelf")
    .addEventListener("click", () => sortUp("shelf"));
  thead
    .querySelector("#btn-weight")
    .addEventListener("click", () => sortUp("weight"));
  thead
    .querySelector("#btn-time")
    .addEventListener("click", () => sortUp("time"));

  return thead;
}
