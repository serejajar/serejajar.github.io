
###
Принять
Проверил ваш проект. Вы учли практически все нюансы и подробно описали инструкцию в README. За что вам огромный плюс.

--
Проверил ваш проект. Вы учли практически все нюансы и подробно описали инструкцию в README. За что вам огромный плюс. Честно говоря, я уже полчаса пытаюсь придраться к работе выискивая мелочи в стилях и логике, но давайте я не буду этого делать, так как у вас очень неплохая работа.

Доделывайте тесты и я приму работу.





###
Рекомендации
- держат файлы вперемешку
Судя по всему у вас это происходит из-за того что вы держите код сервера и клиента в одной папке. При добавлении/изменении данных в базу данных (в файл db.json, который эмулирует БД) у вас срабатывал watch режим webpack-a.  Можно конечно отключить watch режим и при изменениях перезагружать вашу страницу вручную, но я настоятельно вам рекомендую держать код сервера и клиента раздельно. Так будете меньше будете путаться в коде да и минимизируете возможные ошибки, например как эта.

- Я добавил карт, но они платные
Попробуете добавить не всю карту используя API, а виджет, думаю  этого будет достаточно для приложения. Вот пример для Яндекс::
https://yandex.ru/blog/mapsapi/vidzhet-yandeks-kart-dlya-vashikh-saytov-v-odin-klik

###
Вопросы
- логин с ошибкой
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

---
- как выполнить график с динамикой баланса
Тут вам нужно учитывать именно то что в месяце есть несколько транзакций. Вот как решил эту задачу другой студент.

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

---

###
Прочее
И вы правы, получило очень неплохо даже   у вас очень неплохая работа. Я нашел несколько мелких исправлений, но я знаю что вы ответственно подходите к работе и, думаю, чтобы исправить эти мелочи я вам не сильно нужен, поэтому я готов принять вашу работу. Напишите, если есть вопросы ко мне или я могу принять димпомную работу.


Что можно исправить

- Добавить инструкцию по запуску проекта в README

- Сейчас все файлы для фронтэнда находятся вместе с файлами сервера, их лучше вынести в отдельную папку чтобы было разделение кода.

- При запуске есть вот такое сообщение.

- Сохраниение значения карты в локальное хранилище
Можете сохранить значение в локальное хранилище, а затем отобразить его "по умолчанию" в поле ввода. При изменении этого значения на другое нужно переписать значение в локальном хранилище.
