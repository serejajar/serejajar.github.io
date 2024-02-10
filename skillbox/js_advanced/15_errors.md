Все выглядит отлично! Вы детально проработали все ошибки за что вам большой плюс. Я принимаю ДЗ так как все условия выполнены.

Что можно исправить:
- В fetchAvatarImage не нужно было менять код. Эта функция должна вернуть ошибку. Вам для этой задачи нужно правильно обработать ее с помощью try/catch в getAvatarUrl.

- ?status=200?json_invalid
Обработайте ситуацию, когда сервер вернул невалидный JSON. Отобразите информационный блок с текстом «Произошла ошибка, попробуйте обновить страницу позже».

Рекомендации:
- Хотя вы правильно использовали try/catch, я все же рекомендую почитать вот эту статью. Практика никогда не бывает лишней.
https://learn.javascript.ru/try-catch

- Дополнительно можете изучать вот эту статью. Этот материал вам может помочь в следующем ДЗ.
https://learn.javascript.ru/custom-errors

- Можете почитать и вот эту статью, тут более подробно описывается работа с промисами
https://learn.javascript.ru/promise-basics#potrebiteli-then-catch-finally

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать чате в следующем модуле.


# как показать изображение до того как оно загрузилось
С помощью события load. Вот пример реализации:

https://ru.stackoverflow.com/questions/879672/%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D1%83-%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%BF%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8

# а как offline ?
Очень просто, вот так.

window.addEventListener('offline', (event) => {
    showAlert("The network connection has been lost.");
});

# CORS
Вы открываете сам файл, а нужно ссылку, полученную после запуска сервера.

1) Вам нужно запустить сервер c помощью команды:

npm start
2) Открыть страницу http://localhost:3000  в браузере. Это пустая страница с которой идут запросы на сервер за массивом с данными. Помимо массива с данными этот запрос выдает ошибки в случайном порядке. Эти ошибки вам и нужно обработать для второго задания.

# Как сформулировать в коде невалидной json я не совсем понимаю

Добавьте параметр json_invalid в ссылку, так запрос будет всегда возвращать "битый" json.

http://localhost:3000/api/products?status=200&json_invalid=true

Только не забудьте его удалить перед отправкой на проверку.

# Как можно сделать несколько повторных запросов, если код ошибки 500?
При получении ответа в первый раз, нужно проверить какой именно статус ошибки и выполнить повторный запрос. Например:

let counter = 0;

async function getData() {
  const response = getData()


  if (response.status === 404) {
    throw new Error ('Список товаров пуст')
  }

  if (response.status === 500) {
    counter++
    if (counter < 3) {
      return getData();
    } else {
        throw new Error ('Произошла ошибка, попробуйте обновить страницу позже')
    }
  }

  try {
    const data = await response.json();
    return data
  } catch (error) {
    throw new Error ('Произошла ошибка, попробуйте обновить страницу позже')
  }
}

# как отловить ошибку с невалидным JSON
В случае с ошибкой json response.status не будет содержать код ошибки, так как ответ от сервера будет успешным. Это звучит не логично, но сами сервера пишут точно такие же люди, и подобные коды устанавливают они же. И как вы понимаете никто не застрахован от ошибок   . Тут вам нужно обернуть res.json() в try/catch и если выдаст ошибку обработать ее.

Вот пример (промисы):
return fetch(src)
  .then((res) => {
    if (res.status === 404) return null;
    if (res.status === 500) return "Need retry";
    return res.json();
  })
  .then((res) => {
    if (res.error) throw new Error(res.error);
    return res;
  })
  .catch((e) => {
    if (e instanceof SyntaxError) {
      return "Invalid JSON";
    } else if (e instanceof Error) console.log(e.message);
    return null;
  })
  .then((data) => data);


Вот пример:
try {
  let response = null;

    for (let i = 0; i < 3; i++) {
        response = await getServerData('/api/products');

        if (response.status !== 500) break

        if (response.status === 500 && i === 2) {
            throw new Error('Server error');
        }
    }

    if (response.status === 404 || response.data.products.length == 0) {
        throw new TypeError('No data');
    }

    const productsList = createProductsList(response.data.products);
    appContainer.append(productsList);
} catch(e) {
    const notificationContainer = document.getElementById('notifications');

    if (e.message === 'Unexpected end of JSON input') {
        createNotification(notificationContainer);
    }

    if (e.message === 'No data') {
        createNotification(notificationContainer, 'Список товаров пуст');
    }

    if (e.message === 'Server error') {
        createNotification(notificationContainer);
    }

    throw e;
}

# а как сделать getAvatarUrl?
Тут все гораздо проще, вам нужно просто перехватить ошибку и в этом случае вернуть путь к картинке по умолчанию:

export async function getAvatarUrl(userId) {
  try {
    const image = await fetchAvatarImage(userId);
    return image.url;
  } catch (error) {
    return '/images/default.jpg';
  }
}
