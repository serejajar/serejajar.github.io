import { getPage, getTitle, getLink } from "../../ui/elements.js";
import { getFromLocaleStorage } from "../../services/localeStorage/storageServices.js";
import { renderTable } from "../../components/table/renderTable.js";
import { handleAddEntryClick } from "./handlers/handleAddEntryClick.js";

export default function createHomePage(app) {
  const page = getPage("home-page");

  const title = getTitle("Склад");

  const link = getLink("Добавить запись", "#", "link-entry");
  link.addEventListener("click", handleAddEntryClick);

  const things = getFromLocaleStorage();

  page.append(title, link);

  renderTable(page, things);

  app.innerHTML = "";
  app.append(page);

  return page;
}
