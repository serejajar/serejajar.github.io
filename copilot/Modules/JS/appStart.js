import {getLoaderEl} from "./components.js"

export async function appStart(option) {
    const appEl = document.querySelector('.app');
    appEl.innerHTML = ''

    const loaderEl = getLoaderEl()
    appEl.append(loaderEl)

    switch (option) {
        case "addEntry":
            const addEntry = await import("./addEntry.js")
            addEntry.addEntry(appEl)
            loaderEl.remove()
            break
        default:
            const createWarehouse = await import("./createWarehouse.js");
            createWarehouse.default(appEl)
            loaderEl.remove()
    }

}