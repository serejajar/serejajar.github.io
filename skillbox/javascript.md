# Обратите внимание на блок if без фигурных скобок:
- Обратите внимание на блок if без фигурных скобок:
if (Object.done == true) item.classList.add('list-group-item-success');

Будьте особенно внимательны если используете if без фигурных скобок, так как частая ошибка студентов это перенос кода на следующую строку:
if (false)
  console.log('этот код не сработает')
  console.log('а этот код сработает даже если условие будет false')
https://learn.javascript.ru/coding-style#figurnye-skobki

# Этот код можно чуть улучшить используя знания о преобразовании к логическому типу (true/false) в условии if()
if (localData !== null && localData !== '')
Рекомендую к изучению статью про преобразование к логическому типу в условии if/else:
https://learn.javascript.ru/ifelse#preobrazovanie-k-logicheskomu-tipu

#
Если переменная содержит true/false вы можете обойтись без сравнения "==="
if (obj.done) {
Рекомендую к изучению статью про преобразование к логическому типу в условии if/else:
https://learn.javascript.ru/ifelse#preobrazovanie-k-logicheskomu-tipu

# С помощью оператора "!" (не) вы можете не сравнивать прямо с ""===", например:
if(!firstCard) {
https://learn.javascript.ru/logical-operators#ne

# Подобный код можно чуть упростить используя оператор "||"" (или) или "??" (оператор нулевого слияния)

const pathname = path ? path : location.pathname;
https://learn.javascript.ru/logical-operators#ili

https://learn.javascript.ru/nullish-operators


# Код
!regExp.test(event.key) ? event.preventDefault() : false;

Несмотря на то, что вариант с "?" кажется более коротким, if более нагляден и, как правило, более читабелен.

# Используете написание названий переменных с заглавной буквы
- Вижу вы используете написание названий переменных с заглавной буквы, поэтому хочу вам порекомендовать вот эти статьи к прочтению:
https://learn.javascript.ru/variables#variable-naming

https://learn.javascript.ru/function-basics#function-naming

# Возможно, в дальнейшем, вам будет чуть удобнее использовать шаблонные строки при создании элементов html. Вот пример использования:

container.innerHTML = `<h1>${name}</h1`;

# не нужное null при использовании тернорного оператора (условие ? действие : null)
- event.key.match(expectedString) ? null : event.preventDefault();
Тернарный оператор ? можно заменить на &&:
event.key.match(expectedString) && event.preventDefault();

# Переменные не объявленны с const/let
- Вы не совсем правильно используете объявление функции. Да, это сейчас работает ввиду того что JS умеет создавать переменную без const/let, но это не будет работать при использовании 'use strict' т.н. скрипта запускаемого в строгом режиме (а таких скриптов будет много в вашей карьере), поэтому лучше использовать стандартный синтаксис.

Подробнее о строгом режиме ('use strict') вы можете прочитать в статье:

https://learn.javascript.ru/strict-mode

Также даю ссылку на статью про функции

https://learn.javascript.ru/function-basics

# var вместо const/let
Переменную лучше объявлять с помощью const/let, так как var устарел.

Подробнее о var вы можете прочитать в статье:
https://learn.javascript.ru/var
#
- Само условие уже возвращает true или false, поэтому в примере ниже условный оператор не нужен

return value <= 0 ? false : true;

Правильно вот так:

return value <= 0

#
Вы можете вместо  методов проверки и добавления  использовать метод toggle:

element.classList.toggle("mystyle");

Метод toggle добавит класс элементу, или уберет этот класс если он уже есть у элемента.

# Рекомендация для студентов,чтобы несколько раз не вызывать append"
Метод append может принимать несколько элементов через запятую, которые будут вставлены в той же последовательности, что их и передали.

# почему в моем файле 'exercise-2' name и substr перечеркиваются
Так ваш редактор кода подсвечивает не рекомендуемые к использованию методы.

# страница обновляется после того как я нажал на кнопку submit
Тут вам нужно использовать event.preventDefault() которое отменяет стандартное действие формы т.е. чтобы страница не перезагружалась после того как нажали кнопку submit.

Рекомендую изучить эту статью:
https://learn.javascript.ru/default-browser-action

# else if
else if не нужно использовать, если основное условие в if является противоположностью условию в else if:

if (form.inputName.value.trim() === "") {
      labelInName.classList.remove("none");
} else {
      labelInName.classList.add("none");
}

# serve выдает ошибку связанную с безопасностью PSSecurityException
Теперь ваша оболочка PowerShell не позволяет вам выполнять «возможно» вредоносные сценарии, поэтому вам необходимо изменить политику выполнения, просто введите следующее:
Set-ExecutionPolicy Unrestricted

Возможно, для этого вам потребуется запустить свой терминал от имени администратора.

# ошибка после клика на кнопку [Violation] 'click' handler took 833ms
Странно, но я подобной ошибки не наблюдаю и слышу про нее впервые. Насколько я вижу это не ошибка, а уведомление и оно происходит из-за большого количества ре-рендеринга (скорее всего вы используете live server) при котором происходит добавление c помощью addEventListener множества функций-обработчиков. Вместо этого можете попробовать использовать свойство onclick, чтобы избежать эту ошибку:

todoItem.deleteButton.onclick = () => handleDelete(todoItem)
Рекомендую эту статью к изучению, в частности раздел про addEventListener.

https://learn.javascript.ru/introduction-browser-events#addeventlistener

Я еще поизучаю это, и, если что-то найду, напишу вам.

# Как добавить класс элементу
Вы можете добавить css класс c помощью метода classList.add(). Например:

el.classList.add('ваш-класс')

https://learn.javascript.ru/styles-and-classes#classname-i-classlist

# Используют неверный формат для создания дат Date('08.03.1997')
Потому что Date не всегда понимает что за формат значения вы ей передаете. Тут по умолчанию используется американский формат "месяц.день.год" и Date выдаст невалидную дату так как нет 15 месяца.  Используйте формат "год-месяц-день" который Date корректно понимает.


# не используют ?? или ||
card.availability.moscow === undefined
                  ? 0
                  : card.availability.moscow
Можно отрефакторить этот код, используя оператор логического ИЛИ (||) или оператор нулевого слияния (??) (??), в зависимости от того, что вы хотите считать "отсутствующим" значением. Например, этот вариант вернёт 0, если card.availability.moscow — null или undefined.

card.availability.moscow ?? 0
https://learn.javascript.ru/nullish-operators#operator-nulevogo-sliyaniya


А этот вариант вернёт 0, если значение ложно (например, 0, null, undefined, false, ''):

card.availability.moscow || 0
Будьте осторожны — если 0 может быть валидным значением, используйте ??, а не ||.

https://learn.javascript.ru/logical-operators#ili

# FormData
Вы также может использовать FormData, часто это облегчает сбор данных из формы:
https://learn.javascript.ru/formdata

btnSaveClient.addEventListener('click', () => {
    const form = document.querySelector('.form');
    const formData = new FormData(form);

    const surname = formData.get('surname');

    console.log('surname', surname);
  });


# как будто я нажимаю кнопку несколько раз
Это происходит из-за того что при вызове addEventListener не перезаписывается функция-обработчик клика, а добавляется новый. Т.е. каждый раз кода вы вызываете createModalForm (т.е. кликнули по кнопке "добавить клиента") у вас происходит добавление еще одной функции-обработчика к этой кнопке.

https://learn.javascript.ru/introduction-browser-events#addeventlistener

Решается это использованием onclick:

$modalAddContactBtn.onclick = () => { /* */}
# Еще один прием это весь повторяющийся код перенести в функции. Например, код обработчиков события:

$sortAgeBtn.addEventListener('click', handler)
$sortFIOBtn.addEventListener('click', handler)

function handler(e) {
   /* тут получить аттрибут от элемента значение которого будет 'fio', 'age' и др. */
  const sortColumnFlag = e.target.getAttribute('data-prop')
}

Почитать про объект события e вы можете в этой статье:
https://learn.javascript.ru/introduction-browser-events#obekt-sobytiya

Про свойство e.target которое содержит ссылку на сам элемент:
https://developer.mozilla.org/ru/docs/Web/API/Event/target

Получение аттрибутов элемента описано здесь:
https://learn.javascript.ru/dom-attributes-and-properties

# Переопределил геттер/ сеттер - нужно переопределить сеттер/ геттер?
Да, это особенность ООП в JavaScript. Тут код скажет лучше:
class Parent {
  _value = 0;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }
}

class Child extends Parent {
  set value(val) {
    this._value = val * 2;  // например, модифицируем поведение сеттера
  }
}


const parend = new Parent();
parend.value = 5;
console.log('Значение:', parend.value);  // 5

const child = new Child();
child.value = 5;
console.log('Значение:', child.value);  // undefined


# я не понимаю что такое промис
Чтобы вам было проще понять что такое промис, представьте себе эту логику в быту. Т.е. вы попросили своего друга чтобы он дал вам интересную книгу:
1) Он обещает вам принести его на днях

Это равнозначно запуску проимиса

let promise = new Promise(function(resolve, reject) {
 ...
});


2) Он приходит к вам в гости и тут есть два варианта:
- "Держи книгу" = это вызов функции resolve, т.е. данные вами получены

- "Извини, я забыл книгу, так как замотался на работе"  = это вызов функции reject, т.е. получить данные не получилось из-за озвученной причины (errror).

3) По итогу в then/catch вы можете обработать полученные данные или ошибку.

https://learn.javascript.ru/promise-basics#potrebiteli-then-catch

Вместо then вы можете использовать подход async/await, это более простой подход для работы с промисами, который позволяет писать код без then/catch

async getData = () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  ...

};
https://learn.javascript.ru/async-await

fetch

Так как вы часто одалживаете друг другу вещи, то для экономии времени вы договорились с друзьями, что после просьбы о книге вам ее оставят в почтовом ящике когда будут мимо проходить. Т.е. лично вы друга не увидите (resolve/reject), а получите книгу или записку об причине отсутствия книги (результат промиса).

Promise.all

Возьмем пример выше и используем его для визуализации Promise.all. Вы с друзьями идете в поход и вы как организатор похода обзвонили всех друзей и сказали им взять определенную вещь в поход. На остановке вы ждете всех их и только встретившись все вместе вы отправляетесь в путь. Каждый участник похода передает вам вещь или говорит причину почему не смог принести ее.

Это и и есть логика Promise.all.
