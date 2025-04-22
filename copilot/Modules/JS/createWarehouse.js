import * as components from "./components.js"
import {
    appStart
} from "./appStart.js";
import {
    renderTable
} from "./renderTable.js";



export default function createWarehouse(containerEl) {
    const wrapper = components.getWrapper();
    const titleEl = components.getTitleEL("Склад")
    const addEntryBtnEl = components.getAddEntryBtn("Добавить запись")
    addEntryBtnEl.addEventListener('click', function (event) {
        event.preventDefault()
        appStart("addEntry")
    })
    const tableEl = components.getTableEl();

    wrapper.append(titleEl, addEntryBtnEl)

    containerEl.append(wrapper, tableEl)

    renderTable();


}