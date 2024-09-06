Задача выполнена на отлично и вам плюсик за то что вы верно работаете с DOM элементами.
ДЗ принято.

Рекомендации:
Вы правильно работаете с DOM, но я все же дополнительно рекомендую вам эту статью к изучению:
https://learn.javascript.ru/dom-nodes
Практика никогда не бывает лишней   
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# почему у меня класс изменяется только у первого элемента, даже если я кликаю на другой элемент
document.querySelector выбирает первый элемент, который подпадает под селектор. Т.е. в вашем коде в menuItemEl будет всегда первый элемент.

let menuItemEl = document.querySelector('.menu-item');
Тут вам нужно использовать querySelectorAll

const menuItems = document.querySelectorAll('.menu-item')
И далее в фунции activateMenuItem скрыть все кроме элемента на который кликнули.

function activateMenuItem(newActiveItem) {
    menuItems.forEach(menuItem => menuItem.classList.remove('active'))
    newActiveItem.classList.add('active')
}
