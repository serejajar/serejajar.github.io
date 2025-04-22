import { getForm, getInput, getButton } from "../../ui/elements.js";
import { handleFormSubmit } from "./handlers/handleFormSubmit.js";

export function renderForm() {
  const form = getForm();
  const inputName = getInput("text", "name", "Введите название", true);
  const inputShelf = getInput("text", "shelf", "Полка", true);
  const inputWeight = getInput("number", "weight", "Вес", true);
  const inputTime = getInput("date", "time", false, true);
  const btn = getButton("Добавить запись", "submit");

  form.append(inputName, inputShelf, inputWeight, inputTime, btn);
  handleFormSubmit(form);

  return form;
}
