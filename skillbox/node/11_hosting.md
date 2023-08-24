Отлично! Ваш проект развернут на хостинге и корректно работает. ДЗ принято!

Придраться мне не к чему, все работает как нужно. Вам большой плюс за быстрое прохождение этого курса!

Желаю удачи в дальнейшем обучении. Мне было приятно проверять ваши работы.


Рекомендации
Это последний модуль в курсе, поэтому хочу вам порекомендовать вот эти ресурсы для самостоятельного изучения:

https://nodejs.org/en/
 - Документация nodejs. Тут вы можете найти информацию как работать с файлами, стримами, создавать сервер.

https://nodejs.dev/
 - Тоже что и выше, но с примерами.

http://expressjs.com
 - Документация к expressjs.

Я бы также посоветовал изучить как работает EventLoop и Streams в NodeJS. EventLoop часто любят на собеседованиях спрашивать: да и в целом полезно знать как там устроено все. Вот цикл статей, самый подробный обзор из того что сам видел:
https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810

Сразу предупреждаю что будет трудно, к тому же на английском все, но очень полезно это изучить.

- Вот хороший тренажер, чтобы проводить эксперименты и смотреть как работает eventloop
https://www.jsv9000.app/?code=ZnVuY3Rpb24gbG9nQSgpIHsKICBjb25zb2xlLmxvZygnQScpOwp9CmZ1bmN0aW9uIGxvZ0IoKSB7CiAgY29uc29sZS5sb2coJ0InKTsKfQpmdW5jdGlvbiBsb2dDKCkgewogIGNvbnNvbGUubG9nKCdDJyk7Cn0KZnVuY3Rpb24gbG9nRCgpIHsKICBjb25zb2xlLmxvZygnRCcpOwp9CmZ1bmN0aW9uIGxvZ0UoKSB7CiAgY29uc29sZS5sb2coJ0UnKTsKfQpmdW5jdGlvbiBsb2dGKCkgewogIGNvbnNvbGUubG9nKCdGJyk7Cn0KZnVuY3Rpb24gbG9nRygpIHsKICBjb25zb2xlLmxvZygnRycpOwp9CmZ1bmN0aW9uIGxvZ0goKSB7CiAgY29uc29sZS5sb2coJ0gnKTsKfQpmdW5jdGlvbiBsb2dJKCkgewogIGNvbnNvbGUubG9nKCdJJyk7Cn0KZnVuY3Rpb24gbG9nSigpIHsKICBjb25zb2xlLmxvZygnSicpOwp9Cgpsb2dBKCk7CnNldFRpbWVvdXQobG9nRywgMCk7ClByb21pc2UucmVzb2x2ZSgpCiAgLnRoZW4obG9nQykKICAudGhlbihzZXRUaW1lb3V0KGxvZ0gpKQogIC50aGVuKGxvZ0QpCiAgLnRoZW4obG9nRSkKICAudGhlbihsb2dGKTsKc2V0VGltZW91dChsb2dJKTsKc2V0VGltZW91dChsb2dKKTsKbG9nQigpOw%3D%3D

- Вот еще хорошая книга по NodeJS. В ней рассмотрены глубокие темы. Тоже на английском.
https://www.amazon.com/Mastering-Node-js-server-side-applications-efficiently/dp/178588896X

Спасибо вам за неплохой код и удачи в дальнейшем обучении с nodejs!

PS: Также будем рады вашему отзыву о работе куратора и о содержании курса на hello@skillbox.ru или в бот обратной связи.

###
Вопросы

# Vercel: возвращает ошибку  - Internal Server Error.
Тут скорее всего ваше приложение падает из-за подключения к стороннему сервису. Попробуйте задеплоить приложение из модуля 6 (без БД) чтобы проверить это.


Рад что вы не пропали снова на несколько недель. Спасибо вам за неплохой код и приятное общение! Думаю у вас все будет хорошо в плане обучения и работы. Удачи в дальнейшем обучении.

# конфигурация Vercel
Да, вам понадобится создать конфиг для vercel в котором нужно будет указать путь к index.js, вот так:

{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
