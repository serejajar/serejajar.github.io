import { getFromLocaleStorage } from "../../../services/localeStorage/storageServices.js";
import { renderTable } from "../renderTable.js";

export function sortUp(key) {
  let things = getFromLocaleStorage();

  const sorted = [...things].sort((a, b) => {
    let aVal = a[key];
    let bVal = b[key];

    if (key === "time") {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    }

    if (key === "name" || key === "shelf") {
      return aVal.localeCompare(bVal);
    }

    if (!isNaN(aVal) && !isNaN(bVal)) {
      aVal = Number(aVal);
      bVal = Number(bVal);
      return aVal - bVal;
    }

    return 0;
  });

  const page = document.querySelector(".home-page");
  renderTable(page, sorted);
}
