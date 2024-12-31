Задачи выполнены на отлично и вам плюсик за то что вы верно работаете с циклами и DOM элементами.
ДЗ принято.


Рекомендации:
- В качестве самостоятельного изучения можете прочитать эти статьи и решить задачи внизу к ним. Практика никогда не бывает лишней.
https://learn.javascript.ru/events
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.


# Как после нажатия кнопки добавить сразу же добавленный рост на страницу?

# 1-я задача


# 2-я задача
const heights = ['164', '157', '160', '143', '170'];

const addEl = document.querySelector('.add');
const filterEl = document.querySelector('.filter');

const heightsUl = document.createElement("ul");
heightsUl.classList.add('height-list');

heights.forEach((height, index) => {
  const heightsLi = document.createElement("li");
  heightsLi.textContent = `${index + 1}. ${height}`;
  heightsUl.append(heightsLi);
});

addEl.addEventListener('click', function() {
  let newHeight = prompt('Введите новый рост');
  if (newHeight.trim() === "") {
    alert('Вы ничего не ввели');
  } else {
    heights.push(newHeight);
    const heightsLi = document.createElement("li");
    heightsLi.textContent = `${heights.length}. ${newHeight}`;
    heightsUl.append(heightsLi);
  }
});

filterEl.addEventListener('click', function() {
  heights.sort((a, b) => a - b);
  heightsUl.innerHTML = '';
  heights.forEach((height, index) => {
    const heightsLi = document.createElement("li");
    heightsLi.textContent = `${index + 1}. ${height}`;
    heightsUl.append(heightsLi);
  });
});


document.body.append(heightsUl);
