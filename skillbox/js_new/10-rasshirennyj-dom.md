Проверил вашу работу. Все выполнено по условиям ДЗ и вам плюсик за правильную работу с элементами DOM!
ДЗ принято.

Рекомендации:
Вы правильно работаете с DOM, но я все же дополнительно рекомендую вам статью про DOM к изучению:
https://learn.javascript.ru/dom-nodes
И вот эту статью про создание элементов
https://learn.javascript.ru/modifying-document
Практика никогда не бывает лишней   

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# 1-я задача, А как чтобы они переключались между собой?
У вас правильный подход, но тут можно избежать повторения кода и использовать forEach для добавления обработчика клика по картинке:

const imagesList = document.querySelectorAll('.image');
const imageBigEl = document.querySelector('.image-big');

imagesList.forEach(image => {
    image.addEventListener('click', function (event) {
        imageBigEl.setAttribute('src', image.getAttribute('src'))
        imageBigEl.classList.remove('hidden')
    });
})


Для того чтобы все работало, вам нужно добавить следующую разметку в body:

<body>
  <div class="images">
    <img class="image" src="/01/1.jpg" width="300" height="200">
    <img class="image" src="/01/2.jpg" width="300" height="200">
    <img class="image" src="/01/3.jpg" width="300" height="200">
  </div>
  <img class="image-big hidden" src="" width="1488" height="1000">
</body>

# 2я задача
const listEl = document.querySelector('.list');
const addEl = document.querySelector('.btn-add');
const deleteEl = document.querySelector('.btn-delete');

addEl.addEventListener('click', function (e) {
    const itemEl = document.createElement('li')
    itemEl.textContent = "Новый элемент списка";
    listEl.appendChild(itemEl);
});

deleteEl.addEventListener('click', function (e) {
    listEl.lastElementChild.remove();
});

# 3-я задача

const prices = [100, 500, 250, 750, 300];

function displayPrices() {
  let ul = document.getElementById('prices');
  ul.innerHTML = ''

  prices.forEach(price => {
    let li = document.createElement('li');
    li.textContent = price;
    ul.appendChild(li);
  });
}

function sortAscending() {
  prices.sort((a, b) => a - b)
  displayPrices()
}

function sortDescending() {
  prices.sort((a, b) => b - a)
  displayPrices()
}

displayPrices(prices)

document.getElementById('sortAscending').addEventListener('click', sortAscending);
document.getElementById('sortDescending').addEventListener('click', sortDescending);
