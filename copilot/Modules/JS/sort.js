import {
    renderTable
} from "./renderTable.js";

export function sort(option) {
    const things = JSON.parse(localStorage.getItem('things')) || [];
    things.sort(function (a, b) {
        if (option == 'title' || option == 'shelf' || option == 'date') {
            if (a[option].toLowerCase() < b[option].toLowerCase()) {
                return -1;
            }
            if (a[option].toLowerCase() > b[option].toLowerCase()) {
                return 1;

            } else return 0
        } else if (option == 'weight') {
            return (a[option] - b[option]);
        }
    })

    localStorage.setItem('things', JSON.stringify(things));
    renderTable();
}