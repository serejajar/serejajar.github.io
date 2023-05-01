
###
Принять
Проверил ваш проект. Вы учли практически все нюансы и подробно описали инструкцию в README. За что вам огромный плюс.

Вам плюсик за добавление команд для тестирования в package.json.

Честно говоря, я уже полчаса пытаюсь придраться к работе выискивая мелочи в стилях и логике, но давайте я не буду этого делать, так как у вас очень неплохая работа.

По UI:

Что можно исправить:
- При запуске есть вот такое сообщение.
- Сохранение значения карты в локальное хранилище
Можете сохранить значение в локальное хранилище, а затем отобразить его "по умолчанию" в поле ввода. При изменении этого значения на другое нужно переписать значение в локальном хранилище.
- Список валют на странице /currencies выглядит странно.
Вам нужно добавлять их все, а только по одной паре с валютами вниз списка. Если список будет занимать весь блок, то при добавлении новой пары нужно убирать верхнюю пару. Этот функционал напоминает табло прилетов в аэропорту.
- Учитывайте также что ваше приложение будут открывать с разных браузеров и не всегда стили будут одинаковыми. Вот так выглядит страница валют в  браузере Firefox.

По коду:
Вам плюсик за разделение кода на файлы, использование библиотеки redom.


Что можно исправить:
- Добавьте в package.json скрипты для запуска тестов.
- Добавить инструкцию по запуску проекта в README
- Нет разбивки кода по файлам, но это не критично.
- Сейчас все файлы для фронтэнда находятся вместе с файлами сервера, их лучше вынести в отдельную папку чтобы было разделение кода. Это не критично сейчас, просто помните что клиент и бэкенд могут находится на разных серверах.
- Тест cypress падает на этом этапе
- Тесты cypress в браузере Chrome проходят идеально, но в Firefox падает на этом этапе. Это также не критично для этой работы и больше совет для будущей разработки так как это поведение может быть следствием того что в браузере Firefox не работает какой-то функционал вашего приложения.


Несмотря на несколько мелких исправлений я готов принять вашу работу. Напишите, если у вас есть вопросы ко мне или я могу принять вашу практическую работу.


###
Вопросы
# не понимают как делать валютный блок
Их не нужно сортировать. Вам нужно добавлять их в блок с валютами вниз списка. Если список будет занимать весь блок, то при добавлении новой пары нужно убирать верхнюю пару.

# Есть ли какие-то рекомендации
Обычно даю рекомендации исходя из вопросов, но могу дать вам рекомендации основанные на частых ошибках:
- Файлы сервера для этой работе есть и в вашем репозитории.
https://gitlab.skillbox.ru/ivan_kolontaevskii/Js-advanced-diploma/tree/master/js-advanced-diploma
- Добавить инструкцию по запуску проекта в README
- Все файлы для фронтэнда лучше вынести в отдельную папку чтобы было разделение кода.
- Не забывайте про Content-Type при запросах. Например, для login:

fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify({
    login: 'developer',
    password: 'skillbox'
  })
})
- Так же логиниться нужно только методом POST, а не GET как указанно в инструкции. Я писал создателю курса об этой ошибке в readme, судя по всему нужно написать еще раз...  

# логин с ошибкой
Только методом POST. Я писал создателю курса об этой ошибке в readme, судя по всему нужно написать еще раз...  

Попробуйте вот так работать с login:

fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify({
    login: 'developer',
    password: 'skillbox'
  })

})


# как выполнить график с динамикой баланса
Это не средний баланс, а именно баланс, т.е. сумма на счету после всех транзакций в конце месяца. Тут вам нужно учитывать именно то что в месяце есть несколько транзакций. Вот как решил эту задачу другой студент.

export function getLastMonthTransactions(data, month) {

  const { account, transactions, balance } = data;

  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'нояб',
    'дек',
  ];

  const agoDate = new Date();
  const transactionsMap = [];
  let counter = transactions.length - 1;
  let balanceCounter = balance;

  transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

  agoDate.setMonth(agoDate.getMonth() + 1);

  for (let i = 0; i < month; i++) {
    let amountTransactions = 0;
    let inTransactions = 0;
    let outTransactions = 0;
    agoDate.setMonth(agoDate.getMonth() - 1);

    for (counter; counter >= 0; counter--) {
      const transactionDate = new Date(transactions[counter].date);
      if (transactionDate.getMonth() === agoDate.getMonth()) {
        const transactionTo = transactions[counter].to;
        const transactionAmount = transactions[counter].amount;
        if (transactionTo === account) {
          amountTransactions += transactionAmount;
          inTransactions += transactionAmount;
        } else {
          amountTransactions -= transactionAmount;
          outTransactions -= -transactionAmount;
        }
      } else {
        break;
      }
    }
    balanceCounter = balanceCounter - amountTransactions;
    const trans = {
      month: months[agoDate.getMonth()],
      amount: +balanceCounter.toFixed(2),
      in: +inTransactions.toFixed(2),
      out: +outTransactions.toFixed(2),
    };
    transactionsMap.push(trans);
  }

  transactionsMap[0].amount = +balance.toFixed(2);
  return transactionsMap.reverse();
}

Но если у вас не получается, то можете вставить случайные данные и после того как закончите основную работу, можете вернуться к этой проблеме.

# Я добавил карты, но они платные
Попробуйте добавить не всю карту используя API, а виджет, думаю  этого будет достаточно для приложения. Вот пример для Яндекс::
https://yandex.ru/blog/mapsapi/vidzhet-yandeks-kart-dlya-vashikh-saytov-v-odin-klik

# почему постоянно обновляется страница / держат файлы вперемешку
Судя по всему у вас это происходит из-за того что вы держите код сервера и клиента в одной папке. При добавлении/изменении данных в базу данных (в файл db.json, который эмулирует БД) у вас срабатывал watch режим webpack-a.  Можно конечно отключить watch режим и при изменениях перезагружать вашу страницу вручную, но я настоятельно вам рекомендую держать код сервера и клиента раздельно. Так меньше будете путаться в коде да и минимизируете возможные ошибки, например как эта.

# все запросы к апи

#
Это известная проблема, про которую пишут и на npm:

https://www.npmjs.com/package/ymaps#known-issues

Тут вам проще всего использовать cdn библиотеку от Яндекса которую нужно добавить в шапку страницы, как и показано у них в документации.

https://yandex.ru/dev/maps/jsapi/doc/3.0/dg/concepts/load.html

# Как создать карту
export async function renderMap(mapData) {
  const maps = await ymaps.load(
    'https://api-maps.yandex.ru/2.1/?apikey=04a1662a-2115-4736-a95d-a9f299ca73cb&lang=ru_RU'
  );
  let myMap = new maps.Map('map', {
    center: [55.76, 37.64],
    zoom: 11,
  });
  myMap.behaviors.disable('scrollZoom');
  for (let i of mapData) {
    let myGeoObject = new maps.GeoObject({
      geometry: {
        coordinates: [i[0], i[1]],
        type: 'Point',
      },
    });
    myMap.geoObjects.add(myGeoObject);
  }
}
