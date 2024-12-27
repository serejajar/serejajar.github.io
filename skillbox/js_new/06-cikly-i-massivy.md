Проверил выполненные задания. Все они выполнены по условиям ДЗ и вам плюсик за правильное использование циклов в коде. Отлично!
ДЗ принято.

Что можно исправить
- Во второй задаче перепутаны min и max.

Рекомендации:
- В качестве самостоятельного изучения можете прочитать эту статью и решить задачи внизу этой статьи. Практика никогда не бывает лишней.
https://learn.javascript.ru/while-for
- Так же можете изучить Math.max() и Math.min().
https://learn.javascript.ru/number#drugie-matematicheskie-funktsii

Эти методы совокупности с деструктуризацией поможет выполнить 2-ю задачу проще:
buttonMin.addEventListener('click', () => {
  minNumber.textContent = Math.min(...arrEl);
})


PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# 2-я задача, я ничего не понимаю, мы этого не изучали!
Тут вам нужно сделать следующее:

1) Сделать функцию-обработчик клика для кнопки "Найти минимальное число". Добавление этих функций рассматривалось в видео "5.10 Основы событий в JavaScript".

2) В этой функции вам нужно с помощью цикла найти минимальное число из массива.

3) В той же функции вам нужно добавить найденное  значение в качестве textContent. Как добавлять значение в textContent рассматривалось в видео "5.5 Заполнение элементов".



То же самое вам нужно сделать и для кнопки "Найти максимальное число", только во втором пункте вам нужно найти максимальное значение.


# простой пример:
const arr = [12, 5, 8, 20, 3, 16];

const numberList = document.querySelector('.all-elements')
numberList.textContent = arr;

const buttonMin = document.querySelector('.min');
const buttonMax = document.querySelector('.max');
const minNumber = document.querySelector('.minNumber')
const maxNumber = document.querySelector('.maxNumber')

buttonMin.addEventListener('click', () => {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      };
  }
  minNumber.textContent = min;
  // minNumber.textContent = Math.min(...arrEl);
})

buttonMax.addEventListener('click', () => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else continue;
  }
  maxNumber.textContent = max;
})

# хорошее решение
const numArr = [12,4,8,19,10,11,42,13,64,15]

const element =document.querySelector('.all-elements');
element.textContent = numArr;

const minButton = document.querySelector('.min');
const maxButton = document.querySelector('.max');

minButton.addEventListener('click', function() {
    const minNumber = Math.min(...numArr);
    document.querySelector('.minNumber').textContent = minNumber;
});


maxButton.addEventListener('click', function() {
    const maxNumber = Math.max(...numArr);
    document.querySelector('.maxNumber').textContent = maxNumber;
});
