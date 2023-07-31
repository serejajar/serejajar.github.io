Проверил вашу работу. Все задания выполнены на отлично!


Что можно исправить:
- В 3-й задаче нужно ваш код добавить в функцию filter()

Рекомендации
- Рекомендую вам, в качестве дополнительного материала к изучению, вот эту статью и задачи к ней:
https://learn.javascript.ru/object
https://learn.javascript.ru/object#tasks

- Так же рекомендую прочитать про возврат значения в функции (return). Особенно важно понять этот материал т.к. вы будете сталкиваться с ним постоянно.
https://learn.javascript.ru/function-basics#vozvrat-znacheniya

- Можете почитать также эту статью про доступ через квадратные скобки
https://learn.javascript.ru/object#kvadratnye-skobki



###
Рекомендации:
Рекомендую вам так же изучить метод массива filter, с ним можно немного проще выполнить эту задачу.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function filter(arr, option, value) {
  return arr.filter((obj) => {
    return obj[option] == value;
  });
}

export default filter;
