import { getButton, getPage, getTitle } from "../../ui/elements.js";
import { renderForm } from "../../components/form/renderForm.js";
import { navigate } from "../../services/navigate/navigate.js";

export default function createFormPage(app) {
  const page = getPage("form-page");

  const title = getTitle("Добавить запись");

  const btn = getButton("Вернуться на главную страницу", "button");
  btn.addEventListener("click", async function () {
    await navigate("home");
  });

  page.append(title, renderForm(), btn);

  app.innerHTML = "";
  app.append(page);

  return page;
}
