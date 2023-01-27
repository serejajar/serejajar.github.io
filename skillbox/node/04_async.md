
- недоступен сам сайт апи из-за сертификата
const agent = new https.Agent({  rejectUnauthorized: false,});

await axios.get(urlRequest + name, {
  httpsAgent: agent
});
###
Отклонить:
- node index.js
При запуске без аргументов нет никакого сообщения об завершении работы. Если программа не получила ни одного аргумента, она должна напечатать предупреждение и завершить работу.

- node index.js r2 skywalker xyz "Padmé Amidala"
Проверил вашу работу, в целом подход верный, но при выполнении команды из условия ДЗ ваш скрипт падает с ошибкой:
---
При выполнении команды из условия ДЗ ваш скрипт падает с ошибкой:

- неправильные данные
Проверил исправления, но вывод все равно содержит неправильные данные (undefined, [object Object])


###
Вопросы

# ReferenceError: fetch is not defined
fetch api появилось в nodejs 18 версии.

###
Принять
Проверил задание, все работает по условиям ДЗ, но есть одно небольшое исправление:
---
Проверил задание, все работает по условиям ДЗ. Придраться мне не к чему))
---
Отлично! Вам большой плюс что вы использовали это в работе. Все работает по условиям задачи. ДЗ принято.

###
Похвалить
Вам плюсик за использование Promise.all.
---
В целом все верно, вам плюcик за использование sort() для поиска максимального/минимального роста.
---
Все выполнено по условиям задачи. Вам плюсик за выделение кода для сортировки в отдельную функцию sortByProperty, которая сортирует по заданному ей ключу!
---
Отдельный плюсик за обработку случаев с отсутствием аргументов!
---
Вам плюсик за аккуратный код.
---
В целом подход верный, и вам плюсик за то что самостоятельно разобрались с задачей, но есть исправления:

###
Рекомендации
Этот код можно сделать значительно проще используя array.sort() и взять первый и последний элементы полученного массива.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
---
Сортировка с помощью
https://lodash.com/docs/4.17.15#sortBy
---
Цикла в вашем коде можно избежать если использовать Promise.all.

https://learn.javascript.ru/promise-api#promise-all
---
В качестве доп. задания можете попробовать получить все данные со всех страниц используя свойство next из запроса.
---

###
Прочее
5. Асинхронный код

Все выполнено по условиям задачи. Вам плюсик за хорошо написаный код, и есть разделение кода.




- node index.js
    Если какой-то запрос выполнился успешно, но никого не найдено (вернул ноль записей), программа должна вывести предупреждение “No results found for ‘<поисковый аргумент>’”.

- node index.js xyz
    В целом все верно, но при запуске скрипта с одним неверным аргументом:

    node index.js xyz
    Выдает следующую ошибку:

- Имена во второй строчке должны идти в алфавитном порядке.


- Не используют promise.All
    Также вы можете посмотреть Promise.all, он может упростить логику кода.
    https://learn.javascript.ru/promise-api#promise-all

- Используют цикл вместо sort()
    Этот код можно сделать значительно проще используя array.sort() и взять первый и последний элементы полученного массива.

- Вложенный forEach
    Вложенный forEach можно также убрать заменив его array.concat или его аналогом из lodash:

Вам нужно сделать запросы для каждого персонажа переданного в аргументах.







Вам нужно объединить массивы с результатами в один общий массив. Затем получить все имена из этого массива. И последнее вам нужно найти минимальный и максимальный рост. Напишите если нужна более подробная информация как это реализовать в коде.


----
const axios = require("axios");

if (process.argv.length <= 2) {
  console.error("Must have 1 or more arguments");
  process.exit(0);
}

const data = [];

const characters = process.argv.slice(2);

const requests = characters.map((el) => axios(`https://swapi.dev/api/people/?search=${el}`));

(async () => {
  await Promise.allSettled(requests).then((results) => {
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        if (!result.value.data.results.length) console.log(`No results found for ${characters[num]}`);
        result.value.data.results.forEach((character) => data.push(character));
      }

      if (result.status == "rejected") {
        console.log(`${characters[num]}: ${result.reason}`);
      }
    });
  });

  data.sort((x, y) => x.height - y.height);

  const allNames = data.map((el) => el.name).sort();

  console.log("Total result: ", data.length);
  console.log("All: ", ...allNames);
  console.log(`Min height: ${data[0].name}, ${data[0].height} cm.`);
  console.log(`Max height: ${data.at(-1).name}, ${data.at(-1).height} cm.`);
})();
