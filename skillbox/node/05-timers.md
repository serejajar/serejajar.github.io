По самому приложению все выглядит отлично и вам плюсик что разобрались с duration и progress!

Регистрация и авторизация пользователя, добавление и удаление счетчиков проходит успешно. Все счетчики одного пользователя не видны другому. Отлично! ДЗ принято

Авторизация, регистрация, работа со счетчиками проходит по условия ДЗ. В целом вы все верно сделали, но есть одно маленькое, но очень важное исправление. Все таймеры одного пользователя не должны быть видны другому.


Что можно исправить:
- Не захеширован пароль.
- Регистрация проходит при пустом пароле
- Нет router-а. Хотя сейчас я не требую это, но в реальных проектах router используется очень активно.
http://expressjs.com/en/5x/api.html#router

- У вас рут GET /api/timers должен возвращать активные или удаленные таймеры в зависимости от запроса:

/api/timers?isActive=false
/api/timers?isActive=true

- Вам нужно высчитать время старта, вот так:

progress = текущее время в милесекундах - время старта;

- Таймеры равны NaN:NaN
По самому приложению, все выглядит неплохо, но сейчас таймеры  на странице равны NaN:NaN.

Так происходит когда не высчитано свойство progress для таймера. Вот пример кода для понимания как высчитывать progress:

app.get("/api/timers", (req, res) => {
  if (req.query.isActive === "true") {
    DB.forEach((timer) => {
      if (!timer.isActive) return;
      timer.progress = Date.now() - timer.start;
    });

    res.json(DB.filter((timer) => timer.isActive));
    return;
  }

  res.json(DB.filter((timer) => !timer.isActive));
});


По следующему модулю:

То же самое задание, только теперь данные храним в базе данных postgresql. Просто копируйте текущий код и нужно будет дописать новый функционал, об этом ниже.

- Параметры подключения к бд нужно передавать при запуске через переменные окружения, используя например dotenv https://www.npmjs.com/package/dotenv

Т.е. вы заводите файл .env-sample где указываете все нужные переменные для запуска сервера, и создаете свой локальный файл .env в котором уже указываете нужные значения. Не забудьте создать файл .env-sample, и предоставьте, пожалуйста, доступы к вашей базе данных, я так смогу быстрее проверить задание.

- Сервис elephantsql.com прекращает работу и там нельзя зарегистрироваться, вы можете использовать сервис neon.tech
https://neon.tech/

- Для названия колонок в бд используйте camelCase, чтобы не надо было маппить user_id -> userId. Для обращения к колонкам в camelCase в postgres их нужно заключать в скобки:

select "userId" from timer
- Часто нужно получить одну строку из бд, но knex по умолчанию всегда возвращает массив и студенты делают так:

const oneRow = knex().select().limit(1).then(results => results[0])
limit(1).then(...) можно заменить на метод .first()
https://knexjs.org/guide/query-builder.html#first

Рекомендации:
- Хочу порекомендовать также изучить документацию к express.  У него есть неплохая русская документация.
https://expressjs.com/ru/

- Можете так же глянуть в сторону nest.js, этот фреймворк начинают активно использовать:
https://ru.hexlet.io/blog/posts/gid-po-nest-js


PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# ограничение на одновременные подключения к бд
- Если будете создавать свою бд в таких сервисах как, например elephantsql.com обратите внимание, что у вас будет ограничение на одновременные подключения к бд (не больше 3), поэтому тут нужно использовать пул соединений: https://knexjs.org/guide/#pool

#  Как сделать хеш пароля
Тут вам нужно использовать crypto, как в видео у спикера. Вот пример функции для создания хеша пароля:

import crypto from 'crypto';

const hashPass = (password) => {
  const hash = crypto.createHash('sha256');

  hash.update(password);
  return hash.digest('hex');
};


----
Здесь нужно реализовать функции для обработки запросов со стороны клиента.

Первая обработчик для запроса GET /api/timers - он должен возвращать список активных/неактивных таймеров, в зависимости от переданного в query-параметрах параметра isActive

Второй запрос должен из req.body получать данные для создания нового таймера, создавать его и добавлять в массив TIMERS. Эта функция должна вернуть id созданного таймера.

----
Основная часть:

В целом все верно, код хорошо написан, есть разделение кода и используется router. Вам плюсик за использование кодов сообщений от сервера. Но есть маленькая ошибка которую нужно исправить:


-------------------
Проверить отправляет ли /api/timers/ активные/неактивные таймеры

Дублирующего кода не должно быть. Например, в /api/timers/ можно создать переменную isActive с самим условием и фильтровать таймеры по этому условию.

router.get("/", (req, res) => {
  if (req.query.isActive === "true") {
    DB.forEach((timer) => {
      if (!timer.isActive) return;
      timer.progress = Date.now() - timer.start;
    });

    res.json(DB.filter((timer) => timer.isActive));
    return;
  }

  res.json(DB.filter((timer) => !timer.isActive));
});

      router.get("/", (req, res) => {
        const isActive = req.query.isActive === "true";

        if (isActive) {
          /* здесь ваш код */
        }

        /* отправка ответа только один раз */
        res.json(DB.filter((timer) => timer.isActive === isActive));

      });

      Примерно так. Но я написал этот код и подумал что уже к мелочам придираюсь)))

------------------
В router.post("/:id/stop") не совсем понятно зачем добавлен этот код в блок catch :

router.post("/:id/stop", (req, res) => {
    DB.forEach((timer) => {
      if (timer.id !== req.params.id) return;

      timer.end = Date.now();
      timer.isActive = false;
      timer.duration = timer.end - timer.start;
      delete timer.progress;
    });

    res.status(204).json(DB);
});
---
Т.е. при создании таймера вы сохраняете само время создания и при запросе активных таймеров высчитываете разницу между временем старта и текущим. Разница между между ними это и есть progress

При удалении таймера, нужно сохранить время удаления и высчитать разницу временем между старта и конца. Это и есть duration.
