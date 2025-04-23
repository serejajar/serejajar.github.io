import { Delivery } from './delivery.js';

const deliveryArr = [
    new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
    new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
    new Delivery("Оля", "ул. Ткачей, д. 43", 11),
    new Delivery("Иван", "ул. Центральная, д. 1", 5),
    new Delivery("Анна", "ул. Садовая, д. 25", 7)
];

function renderDeliveries() {
    const container = document.getElementById('deliveries-container');
    container.innerHTML = '';

    const sortedDeliveries = [...deliveryArr].sort((a, b) => {
        if (a.priority && !b.priority) return -1;
        if (!a.priority && b.priority) return 1;
        return 0;
    });

    sortedDeliveries.forEach(delivery => {
        container.appendChild(delivery.createCard());
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderDeliveries();

    document.getElementById('add-delivery-btn').addEventListener('click', () => {
        const name = prompt('Имя покупателя:');
        const address = prompt('Адрес:');
        const distance = parseInt(prompt('Расстояние (км):'));

        if (name && address && !isNaN(distance)) {
            deliveryArr.push(new Delivery(name, address, distance));
            renderDeliveries();
        }
    });
});