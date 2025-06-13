Задача выполнена на отлично и вам плюсик за то что вы верно работаете с DOM элементами.
ДЗ принято.

Рекомендации:
Вы правильно работаете с DOM, но я все же дополнительно рекомендую вам эту статью к изучению:
https://learn.javascript.ru/dom-nodes
Практика никогда не бывает лишней   
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# Понятия не имею что тут делать. Пробовал добавлять скрипты:
Вызов функции по клику у вас уже добавлено в разметке html:
<button onclick="addToCart('Товар 1')">Добавить в корзину</button>

Т.е. в рамках задания вам нужно создать функцию addToCart с аргументом в котором содержится  название товара (в примере ниже это product), где нужно добавить это название в корзину:

const ulElement = document.querySelector('#cart');

function addToCart(product) {   
    const list = document.createElement('li');                      
    ulElement.append(list);
    list.textContent = (product);  
}

# как создать элементы
Самый простой способ это использовать шаблонные строки. Вот пример использования:

elem.innerHTML = `<li>
  <span>${yourVar}</span>
</li>`;
Также можно создавать все элементы и с помощью метода append добавлять их друг в друга ,но это немного громоздко:

const li = document.createElement('li');       // Создаём <li>
const span = document.createElement('span');   // Создаём <span>
span.textContent = `ывыв`; // Текст внутри <span>

li.append(span);     // Вставляем <span> в <li>
ul.append(li);       // Вставляем <li> в <ul>

document.body.append(ul); // Добавляем <ul> в body документа

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

# пример
<body>
    <h1>Каталог товаров</h1>
    <ul id="product-list">
        <li>
            <span>Товар 1</span>
            <button onclick="addToCart('Товар 1')">Добавить в корзину</button>
        </li>
        <li>
            <span>Товар 2</span>
            <button onclick="addToCart('Товар 2')">Добавить в корзину</button>
        </li>
        <li>
            <span>Товар 3</span>
            <button onclick="addToCart('Товар 3')">Добавить в корзину</button>
        </li>
    </ul>
    <h1>Корзина</h1>
    <ul id="cart">
    </ul>

    <script>
        const ulElement = document.querySelector('#cart');


        function addToCart(product) {   
            const list = document.createElement('li');                      
            ulElement.append(list);
            list.textContent = (product);  
        }       
    </script>
</body>
