Все выполнено по условиям ДЗ. Вам плюсик что не забыли сделать подсветку красным при ошибочном значении, а так же за лаконичный код! ДЗ принято.

Что можно исправить:
- Не подсвечено поле ввода красным если введено ошибочное значение.
- Нет вывода свойств HTMLInputElement. Нужно также вывести свойства прототипа:

Далее с помощью вложенного ol-списка нужно вывести все перечислимые (enumerable) свойства прототипа и их тип (typeof).

Например, для HTMLInputElement должно быть выведено:

HTMLInputElement
    ELEMENT_NODE: string
    ATTRIBUTE_NODE: string
    TEXT_NODE: string
    ...
HTMLElement
    ELEMENT_NODE: string
    ATTRIBUTE_NODE: string
    TEXT_NODE: string
    ...


Рекомендации:
- Рекомендую прочитать статью с более детальным описанием прототипного наследования. Для закрепления материала можете еще решить задачи расположенные в конце статьи.
https://learn.javascript.ru/prototype-inheritance

- Рекомендую также прочитать статью про типы в js:
https://learn.javascript.ru/types

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать чате в следующем модуле.


---

# Как из значения инпута определять его прототипное наследование
Что-то вроде этого:

let proto = window[String(input.value).trim()].prototype;

# Не понимаю что нужно сделать
Вы можете получить его вот так:

window[input.value].prototype;

Т.е. вам нужно:

1. Проверить является ли свойство функцией-конструктором:

typeof window[input.value] === 'function'


btn.addEventListener("click", function () {
  if (typeof window[input.value] === 'function') {
    enumerationPrototype(window[input.value]);
  }
  else {
    input.style.color = 'red';
  }
});


2. Далее вам нужно вывести на страницу с помощью функции addToList все если obj.prototype существует

function enumerationPrototype(obj) {
  while (obj.prototype !== undefined) {
    addToList(obj);
    obj = Object.getPrototypeOf(obj);
  }
}

3. И в самой функции добавления списка вы используете свойство obj.prototype.constructor.name

function addToList(obj) {
  propertyName = obj.prototype.constructor.name;
  let $li = document.createElement('li');
  $li.innerHTML = propertyName;
  document.body.appendChild($li);
  let $_ol = document.createElement('ol');

  for (let property in obj) {
    let $_li = document.createElement('li');
    $_li.innerHTML = property + " " + typeof property;
    $_ol.appendChild($_li);
    document.body.appendChild($_ol);
  }
}

###
Другое

1-е задание:
- нет свойств класса



2-е задание:
- дополнительное задание
    Будете делать дополнительное задание?


---
const input = document.getElementById('input');
const button = document.getElementById('button');
let list = document.getElementById('listPrototype');
let propertyName = '';

button.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value.toLowerCase().includes('.js', -3)) {
    importFilePrototype(input.value);
  }
  else {
    valid(input.value);
  }

  function valid(obj) {
    if (typeof window[obj] === 'function') {
      enumerationPrototype(window[input.value]);
    }
    else {
      input.style.color = 'red';
    }
  }

  async function importFilePrototype(path) {
    // если успешно
    try {
      const module = await import(path);
      valid(module.default);
    } catch (e) {
      if (e instanceof TypeError)
        input.style.color = 'red';
    }
  }
})

function enumerationPrototype(obj) {
  while (obj.prototype !== undefined) {
    listAdd(obj);
    obj = Object.getPrototypeOf(obj);
  }
}

function listAdd(obj) {
  propertyName = obj.prototype.constructor.name;
  let $li = document.createElement('li');
  $li.innerHTML = propertyName;
  list.appendChild($li);
  let $_ol = document.createElement('ol');
  for (let property in obj) {
    let $_li = document.createElement('li');
    $_li.innerHTML = property + " " + typeof property;
    $_ol.appendChild($_li);
    list.appendChild($_ol);
  }
}
