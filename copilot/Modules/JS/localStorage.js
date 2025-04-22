import { appStart } from "./appStart.js";

// Добавить элемент в LS 
export function addThingToLocalStorage(thing) {
    const things = JSON.parse(localStorage.getItem('things')) || [];
    things.push(thing)

    localStorage.setItem('things', JSON.stringify(things))

    appStart()
}


export function deleteThing(things, thing, row) {
    let index = things.indexOf(thing);
    if (index > -1) {
        things.splice(index, 1);
        localStorage.setItem('things', JSON.stringify(things));
        row.remove();
    }
}

