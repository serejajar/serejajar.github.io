# Что можно исправить
- Обратите внимание на блок if без фигурных скобок:
if (Object.done == true) item.classList.add('list-group-item-success');

Будьте особенно внимательны если используете if без фигурных скобок, так как частая ошибка студентов это перенос кода на следующую строку:
if (условие)
  этот код сработает даже если условие будет false
https://learn.javascript.ru/coding-style#figurnye-skobki

- Обратите внимание на return в блоке if:

if (localData !== null && localData !== '')
    return JSON.parse(localData);

Тут return будет возвращаться всегда так как интерпретатор воспринимает этот код вот так:
if (условие) {}
return переменная

Тут лучше  добавить фигурные скобки в блоке if или перенести  return на ту же строку что и if. Подробнее:
https://learn.javascript.ru/coding-style#figurnye-skobki

- if (localData !== null && localData !== '')
Вот этот код поможет немного улучшить эта статья:
https://learn.javascript.ru/ifelse#preobrazovanie-k-logicheskomu-tipu

- С помощью оператора "!" (не) вы можете не сравнивать прямо с ""===", например:
if(!firstCard) {
https://learn.javascript.ru/logical-operators#ne

- Вижу вы используете написание названий переменных с заглавной буквы,  поэтому хочу вам порекомендовать вот эти статьи к прочтению:
https://learn.javascript.ru/variables#variable-naming

https://learn.javascript.ru/function-basics#function-naming

- Возможно, в дальнейшем, вам будет чуть удобнее использовать шаблонные строки при создании элементов html. Вот пример использования:

container.innerHTML = `<h1>${name}</h1`;

- event.key.match(expectedString) ? null : event.preventDefault();

Тернарный оператор ? можно заменить на &&:

event.key.match(expectedString) && event.preventDefault();


# почему в моем файле 'exercise-2' name и substr перечеркиваются
Так ваш редактор кода подсвечивает не рекомендуемые к использованию методы.

# страница обновляется после того как я нажал на кнопку submit
Тут вам нужно использовать event.preventDefault() которое отменяет стандартное действие формы т.е. чтобы не страница не перезагружалась после того как нажали кнопку submit.

Рекомендую изучить эту статью:

https://learn.javascript.ru/default-browser-action
