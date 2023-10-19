Проверил вашу работу. Все задания выполнены на отлично и вам плюсик за выполнение необязательного задания!

Что можно исправить:
- В 1 задаче можно без использования Math.max:

function getOlderUser(userOne, userTwo) {
    if (userOne.age > userTwo.age) {
      return userOne.name
    } else {
      return userTwo.name;
    }
}
- В 3 задаче вам нужно вернуть массив с одним или более объектами, а не сам объект с первым совпадением. Ведь фамилия (surname) "Петров" может быть у нескольких людей и по заданию вам как раз нужно найти всех с этой фамилией в массиве.

Рекомендации
- Рекомендую вам, в качестве дополнительного материала к изучению, вот эту статью и задачи к ней:
https://learn.javascript.ru/object
https://learn.javascript.ru/object#tasks

- Так же рекомендую прочитать про возврат значения в функции (return). Особенно важно понять этот материал т.к. вы будете сталкиваться с ним постоянно.
https://learn.javascript.ru/function-basics#vozvrat-znacheniya

- Можете почитать также эту статью про доступ через квадратные скобки
https://learn.javascript.ru/object#kvadratnye-skobki

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать чате в следующем модуле.


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
