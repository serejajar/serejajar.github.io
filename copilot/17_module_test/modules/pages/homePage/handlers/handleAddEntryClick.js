import { navigate } from "../../../services/navigate/navigate.js";

export function handleAddEntryClick(e) {
  e.preventDefault();
  navigate("form");
}
