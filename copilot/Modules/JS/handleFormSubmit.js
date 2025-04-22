import { addThingToLocalStorage } from "./localStorage.js";


//Получение данных из формы 
export function handleFormSubmit() {
    const title = document.querySelector('#title').value.trim();
    const shelf = document.querySelector('#shelf').value.trim();
    const weight = document.querySelector('#weight').value;
    const date = document.querySelector('#date').value;

    const thing = {
        title,
        shelf,
        weight,
        date,
    }
    addThingToLocalStorage(thing)
}

