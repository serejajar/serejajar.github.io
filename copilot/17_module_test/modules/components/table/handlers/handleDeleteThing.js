import {
  getFromLocaleStorage,
  setToLocaleStorage,
} from "../../../services/localeStorage/storageServices.js";
import { createTbody } from "../createTbody.js";

export function handleDeleteThing(name) {
  let things = getFromLocaleStorage();

  things = things.filter((thing) => thing.name !== name);

  setToLocaleStorage(things);

  const table = document.querySelector("table");
  const oldTbody = table.querySelector("tbody");
  const newTbody = createTbody();

  table.replaceChild(newTbody, oldTbody);
}
