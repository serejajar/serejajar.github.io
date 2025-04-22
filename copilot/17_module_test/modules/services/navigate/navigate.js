import { getLoader } from "../../ui/elements.js";

export async function navigate(page) {
  const app = document.getElementById("app");

  app.innerHTML = "";

  const loader = getLoader();
  app.append(loader);

  switch (page) {
    case "home":
      const homePage = await import("../../pages/homePage/HomePage.js");
      homePage.default(app);
      loader.remove();
      break;
    case "form":
      const formPage = await import("../../pages/formPage/FormPage.js");
      formPage.default(app);
      loader.remove();
      break;
    default:
      const defaultPage = await import("../../pages/homePage/HomePage.js");
      defaultPage.default(app);
      loader.remove();
      break;
  }
}
