Добрый день!

Вам большой плюс за то что самостоятельно разобрались с кодом перемешивания карт и за использование классов в коде. Работа выполнена на отлично!
Вам большой плюс за оформление работы! Вы создали игру которую уже можно публиковать в интернете, так как в ней есть все необходимое: правила, стили, таймер и пр. Работа выполнена на отлично!
В целом подход верный и вам плюсик за лаконичный и понятный код!
Вам большой плюс за оформление работы и за использование шаблонных строк для создания html-элементов.


Что можно исправить:
- Вот этот код можно чуть проще сделать:


Рекомендации:
- Дополнительно можете изучить методы Array.from и Array(10).keys. Их комбинация поможет создать массив с числами на лету.
Array.from(Array(10).keys())
И это, возможно, будет полезно вам при создании массива карт.

- Для самостоятельного обучения рекомендую вам изучить статью про отладку в браузере. Это очень популярный инструмент разработчика.
https://learn.javascript.ru/debugging-chrome

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

------
# Вопросы:

# с чем мне работать чтобы программа поняла, что игра окончена?

После каждого успешного сравнения, т.е. две одинаковые карты открыты и проверены вам нужно получить количество открытых карт.  Сделать это можно двумя способами:

1. Каждый раз сохранять значение в переменную

2. Проверять количество элементов на странице с классом который вы добавляете для стилей открытой карты

И затем сравнивать полученное число с общим количеством карточек. Если совпадает, то игра закончена и выводится сообщение.

# Как сравнивать две карты
Логика сравнения карт примерно такая:
1. Добавьте обработчик кликов на каждую карту
2. В этом обработчике получите textContent элемента карты и сохраните его во внешнюю переменную.
3. Теперь вам нужно определить какой именно это клик, первый или второй (это я оставлю вам на реализацию) чтобы сохранить textContent второй в другую переменную.
4. Определяя что произошел второй клик вы сравниваете переменные где хранили textContent карточек и закрываете их если они не совпадают или оставляете открытыми в обратном случае.

# У меня не получилось сделать карточки закрытыми, только сразу с цифрами.
Это можно реализовать используя css классы и методы свойства el.classList. Т.е. вы можете изначально добавить стили, которые скроют саму цифру/перевернут карточку. Далее по клику вы добавляете css класс для элемента который будет уже показывать цифру. Когда вам нужно будет закрыть стили вы, убираете этот клас у карточки.

https://learn.javascript.ru/styles-and-classes#classname-i-classlist


# Пример кода
let pairedNumbers = [];
function createNumbersArray(count) {
  for (let i = 1; i <= count; i++) {
    pairedNumbers.push(i);
    pairedNumbers.push(i);
  }
}
createNumbersArray(8);


console.log(pairedNumbers);

function shuffle(inputArr) {
  let randomArr = inputArr.slice();
  for (let i = randomArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randomArr[i], randomArr[j]] = [randomArr[j], randomArr[i]];
  }
  return randomArr;
}
let randomArr = shuffle(pairedNumbers);
console.log(randomArr);


function startGame() {
  let content = document.getElementById("content");
  let secondCard = null;
  let firstCard = null;
  for (let i in randomArr) {
    let card = document.createElement("div");
    let cardText = document.createElement("p");

    card.classList.add("block");
    cardText.textContent = randomArr[i];
    card.append(cardText);
    content.append(card);

    function game() {

      if(firstCard === null ) {
        firstCard = cardText;
        console.log('firstCard === null');
        cardText.classList.add("block__paint--over");

      } else if (secondCard === null) {
        secondCard = cardText;
        console.log('secondCard === null');
        cardText.classList.add("block__paint--over");

        if (firstCard.textContent == cardText.textContent) {
          cardText.classList.add("finish");
          firstCard.classList.add('finish');
          firstCard = null;
          secondCard = null;

          console.log('firstCard.textContent == cardText.textContent');
        }
      }else {
          firstCard.classList.remove("block__paint--over");
          secondCard.classList.remove("block__paint--over");
          firstCard = null;
          secondCard = null;
          cardText.classList.add("block__paint--over");
          firstCard = cardText;
          console.log('else');
      }
    }
    card.addEventListener("click", game);
  }
}
