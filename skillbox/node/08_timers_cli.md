
###
Отклонить:

###
Принять
Приложение работает, ошибок нет, все выполнено в соответствии с заданием. ДЗ принято.


###
Похвалить
Вам большой плюсик за использование библиотеки minimist
---
Теперь все работает как нужно. Вам большой плюс за детальные исправления.
---
В целом все отлично! Код хорошо написан, есть разделение кода и используется router, за что вам плюсик.

###
Рекомендации:
minimist?

###
Рекомендации к следующему модулю.

В нем основная часть теория

Из важного: я бы посоветовал изучить как работает EventLoop в NodeJS, это один из столпов. Часто любят на собеседованиях спрашивать про него: да и в целом полезно знать как там устроено все. Вот цикл статей, самый подробный обзор из того что сам видел:

https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810

Сразу предупреждаю что будет трудно, к тому же на английском все, но очень полезно это изучить.

Вот хороший тренажер, чтобы проводить эксперименты и смотреть как работает eventloop

https://www.jsv9000.app/?code=ZnVuY3Rpb24gbG9nQSgpIHsKICBjb25zb2xlLmxvZygnQScpOwp9CmZ1bmN0aW9uIGxvZ0IoKSB7CiAgY29uc29sZS5sb2coJ0InKTsKfQpmdW5jdGlvbiBsb2dDKCkgewogIGNvbnNvbGUubG9nKCdDJyk7Cn0KZnVuY3Rpb24gbG9nRCgpIHsKICBjb25zb2xlLmxvZygnRCcpOwp9CmZ1bmN0aW9uIGxvZ0UoKSB7CiAgY29uc29sZS5sb2coJ0UnKTsKfQpmdW5jdGlvbiBsb2dGKCkgewogIGNvbnNvbGUubG9nKCdGJyk7Cn0KZnVuY3Rpb24gbG9nRygpIHsKICBjb25zb2xlLmxvZygnRycpOwp9CmZ1bmN0aW9uIGxvZ0goKSB7CiAgY29uc29sZS5sb2coJ0gnKTsKfQpmdW5jdGlvbiBsb2dJKCkgewogIGNvbnNvbGUubG9nKCdJJyk7Cn0KZnVuY3Rpb24gbG9nSigpIHsKICBjb25zb2xlLmxvZygnSicpOwp9Cgpsb2dBKCk7CnNldFRpbWVvdXQobG9nRywgMCk7ClByb21pc2UucmVzb2x2ZSgpCiAgLnRoZW4obG9nQykKICAudGhlbihzZXRUaW1lb3V0KGxvZ0gpKQogIC50aGVuKGxvZ0QpCiAgLnRoZW4obG9nRSkKICAudGhlbihsb2dGKTsKc2V0VGltZW91dChsb2dJKTsKc2V0VGltZW91dChsb2dKKTsKbG9nQigpOw%3D%3D

Так же можете изучить Streams в nodejs.

Вот хорошая книга по NodeJS. В ней рассмотрены глубокие темы. Тоже на английском.
https://www.amazon.com/Mastering-Node-js-server-side-applications-efficiently/dp/178588896X

Этот объем информации на дальнейшее изучение, сейчас от Вас небольшой конспект по любой теме, или можете переписать задание из 4 модуля про хеш функции с использованием Streams

###
Старое
9. CLI программы

---------


# Как сделать одну команду
Вот пример реализации от другого студента. Тут исходя из аргумента вызываются различные функции:

switch (process.argv[2]) {
  case "signup":
    sendCredentials("signup")
      .then((res) => console.log(chalk.bold.green(`\n   ✅  ${res}\n`)))
      .catch((err) => console.log(chalk.bold.red(`\n   ⛔️  ${err.message}\n`)));
    break;
А тут сама реализация функции которая вызывает ввод от inquirer, и отправляет полученные данные на сервер.

const questions = {
  username: {
    message: "Username: ",
  },
  password: {
    type: "password",
    message: "Password: ",
    mask: "*",
  },
};

async function sendCredentials(endpoint) {
  const promptRes = await inquirer.prompt(questions);

  const apiRes = await fetch(`${server}/${endpoint}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(promptRes),
  });

  return apiRes.json();
}


Ранее app.get("/") возвращал верстку html страницы, но теперь он не нужен, так как страниц в CLI-приложении нет. Перенесите серверную часть из прошлого задания и проверьте ее с помощью программы Постман. После перейдем к созданию авторизации.

    Сделайте запрос к app.get("/api/timers"). В этом руте вам нужно будет на время установить id существующего пользователя или вернуть таймеры всех пользователей.



---------------------
С параметром GET запроса вы уже работали передавая состояние таймера.

С помощью Постман добавьте значение для заголовка. Про header-ы вы можете прочитать здесь: https://developer.mozilla.org/ru/docs/Web/HTTP/Headers

      Откройте Postman и там где вы отправляете запросы есть вкладка Headers. Откройте ее и там вы увидите поле ввода. Введите туда тестовое значение и отправьте запрос. В руте выего можете получить с помощью req.get()

      http://expressjs.com/en/api.html#req.get


Теперь создайте клиентскую часть, которая будет обрабатывать переданные аргументы (логин/пароль и пр. из примеров).

      Теперь вам нужно отправить GET/POST запрос на соответсвующий рут (например: /login) с теми данными которые вы получили.
