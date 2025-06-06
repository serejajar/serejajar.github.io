Все выполнено по условиям ДЗ и вы правильно работаете с классами. Работа выполнена на отлично!
ДЗ принято.

Что можно исправить


Рекомендации:
В качестве доп. материала, можете изучить статьи про классы. В этом учебнике очень подробно описаны классы, наследование и пр.
https://learn.javascript.ru/classes
Удачи в дальнейшем обучении. Вы неплохо пишите код и, я думаю, у вас получится стать хорошим программистом!
PS: Также будем рады вашему отзыву о работе куратора и о содержании курса на hello@skillbox.ru или в бот обратной связи.

# не понимаю как сделать общее расстояние обновлялось в зависимости от карточек, а не от тех данных что из массива поступают в самом начале.

У вас есть массив карточек deliveryArr с объектами экземплярами класса. По клику по кнопке "Общее расстояние" вам нужно вызвать метод самого класса

distanceBtnEl.addEventListener('click', e => {
EditDelivery.getTotalDistance(deliveryArr);
});


Вот примерная реализация этого метода

static getTotalDistance(deliveryArr) {
    let distance = 0;
    deliveryArr.forEach(delivery => {
        if (delivery.status !== 'canceled') {
            distance += delivery.distance;
        }
    });
    const distanceTextEl = document.querySelector('.distance__text');
    distanceTextEl.classList.remove('hidden');
    const distanceСountEl = document.querySelector('.distance__count');
    distanceСountEl.textContent = distance;
}
