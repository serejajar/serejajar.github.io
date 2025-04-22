import { addToLocaleStorage } from "../../../services/localeStorage/storageServices.js";
import { navigate } from "../../../services/navigate/navigate.js";

export function handleFormSubmit(form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    addToLocaleStorage(data);
    form.reset();
    navigate("home");
  });
}
