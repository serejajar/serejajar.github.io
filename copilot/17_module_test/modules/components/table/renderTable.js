import { getTable } from "../../ui/elements.js";
import { createTbody } from "./createTbody.js";
import { createThead } from "./createThead.js";

export function renderTable(container, things) {
  const table = getTable();
  container.querySelector("#storage-table")?.remove();
  table.append(createThead(), createTbody(things));
  container.append(table);
}
