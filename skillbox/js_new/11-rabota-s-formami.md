Проверил выполненные задания. Все они выполнены по условиям ДЗ и вам плюсик за правильную работу с формами. Отлично!
ДЗ принято.

Рекомендации
В качестве дополнительной тренировки можете прочитать эти статьи и выполнить задачи к ним.
https://learn.javascript.ru/forms-controls
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# как найти значение для radio кнопок
Ошибка появляется из-за того что вы не указали name для radio кнопок, а пытаетесь найти ее именно по name. Вот так верно:

<p>Пол:</p>

<input type="radio" name="gender" value="male">
<label for="male">Мужской</label>

<input type="radio" name="gender" value="female">
<label for="female">Женский</label>
Так же вы неверно ищете по id с getElementById указывая css селектор, тут вам нужно использовать querySelector:

document.querySelector('input[name="gender"]:checked').value

# Как найти значение для чекбоксов
Так как выбранных чекбоксов может быть несколько, то вам нужно получить все элементы c помощью querySelectorAll. Далее вам нужно получить все значения этих чекбоксов и соедениь их в одну строку.  Вот как вы их можете получить.

let interestArr = []
interest.forEach(el => {
        console.log(el.value);
        if (el.checked) {
            interestArr.push(el.value)
        }
});

Далее вам нужно interestArr превратить в строку и добавить его в качестве textContent.

# 1-я задача
<body>
  <h1>Форма опроса</h1>
  <form class="form" action="#" method="post">
    <div class="inner">
      <label for="name">Имя пользователя:</label>
      <input class="name" type="text" id="name" required>
    </div>
    <div class="inner">
      <label for="email">Email:</label>
      <input class="email" type="email" id="email" required>
    </div>
    <div class="inner">
      <p>Пол:</p>
      <input class="gender" type="radio" id="male" name="gender" value="male">
      <label for="male">Мужской</label>
      <input class="gender" type="radio" id="female" name="gender" value="female">
      <label for="female">Женский</label>
    </div>
    <div class="inner">
      <label for="rate">Оценка сервиса:</label>
      <input class="rate" type="range" id="rate" min="1" max="10" step="1">
    </div>
    <p>Интересы пользователя:</p>
    <label>
      <input type="checkbox" class="interest">
      Спорт
    </label>
    <label>
      <input type="checkbox" class="interest">
      Музыка
    </label>
    <label>
      <input type="checkbox" class="interest">
      Путешествия
    </label>
    <label>
      <input type="checkbox" class="interest">
      Кино
    </label>
    <label for="extra">Дополнительная информация:</label>
    <textarea class="extra" name="extra" id="extra"></textarea>
    <button class="button" type="submit">Отправить</button>
  </form>
  <div class="info hidden">

  </div>

</body>


function renderList(form) {
    const infoEl = document.querySelector('.info');
    infoEl.classList.remove('hidden');
    infoEl.innerHTML = "";
    const strings = [];
    const interests = [];
    Array.from(form.elements).forEach(el => {
        if (['text', 'email', 'range', 'textarea'].includes(el.type)) {
            strings.push(`${el.labels[0].textContent} ${el.value}`);
        } else if (el.type === 'radio' && el.checked) {
            strings.push(`Пол: ${el.labels[0].textContent}`);
        } else if (el.type === 'checkbox' && el.checked && el.classList.contains("interest")) {
            interests.push(`${el.labels[0].textContent.toLowerCase().replace(/\s+/g, '')}`);
        }
    });

    strings.push(`Интересы пользователя: ${interests.join(', ')}`)

    strings.forEach(item => {
        const itemEl = document.createElement('p')
        itemEl.textContent = item;
        infoEl.appendChild(itemEl);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('.form');
    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        renderList(formEl);
    });
});



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
