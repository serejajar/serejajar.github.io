Проверил выполненные задания. Все они выполнены по условиям ДЗ и вам плюсик за правильную работу с формами. Отлично!
ДЗ принято.

Рекомендации
В качестве дополнительной тренировки можете проочитать эти статьи и выполнить задачи к ним.
https://learn.javascript.ru/forms-controls
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.


# 2-я задача (калькулятор доставки). Новые значения калькулятора должны отображаться друг под другом, у меня они обновляются.
Тут вам нужно не заменять значение элементов, а создать новый. Этот код можно вывести в отдельную функцию. Вот как это сделал другой студент:

function addRow(tbodyEl, values) {
    const rowEl = document.createElement('tr');

    tbodyEl.appendChild(rowEl);
    values.forEach(item => {
        const itemEl = document.createElement('td');

        itemEl.textContent = item;
        rowEl.appendChild(itemEl);
    })
}


document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('.form');
    const nameEl = document.querySelector('.name');
    const weightEl = document.querySelector('.weight');
    const distanceEl = document.querySelector('.distance');
    const errorEl = document.querySelector('.error');
    const tbodyEl = document.querySelector('.product-table').tBodies[0];

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        let values = [];
        let result = (weightEl.value * distanceEl.value) / 10;

        if (result <= 0) {
            errorEl.classList.remove('hidden');
            return
        }
        errorEl.classList.add('hidden');

        values.push(nameEl.value, weightEl.value, distanceEl.value, `${result.toFixed(2)} руб`);
        addRow(tbodyEl, values);
    });

});
