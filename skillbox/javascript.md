# Что можно исправить

- Обратите внимание на return в блоке if:

if (localData !== null && localData !== '')
        return JSON.parse(localData);

Тут return будет возвращаться всегда так как интерпретатор воспринимает этот код вот так:
if (условие) {}
return переменная

Тут лучше  добавить фигурные скобки в блоке if или перенести  return на ту же строку что и if. Подробнее:
https://learn.javascript.ru/coding-style#figurnye-skobki

- А вот эта статья поможет немного улучшить вот такой код:
if (localData !== null && localData !== '')

https://learn.javascript.ru/ifelse#preobrazovanie-k-logicheskomu-tipu
