import { EditDelivery } from './delivery.js';

const deliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
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

function calculateTotalDistance() {
    const total = deliveryArr
        .filter(delivery => delivery.status !== 'canceled')
        .reduce((sum, delivery) => sum + delivery.distance, 0);

    document.getElementById('total-distance').textContent = `Общее расстояние: ${ total } км`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderDeliveries();

    document.getElementById('add-delivery-btn').addEventListener('click', () => {
        const name = prompt('Имя покупателя:');
        const address = prompt('Адрес:');
        const distance = parseInt(prompt('Расстояние (км):'));

        if (name && address && !isNaN(distance)) {
            deliveryArr.push(new EditDelivery(name, address, distance, "delivery"));
            renderDeliveries();
        }
    });

    document.getElementById('calculate-distance').addEventListener('click', calculateTotalDistance);
});