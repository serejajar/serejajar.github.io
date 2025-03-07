Все выполнено в соответствии с заданием. Вам плюсик за разбивку кода на небольшие части, использование express router и классы.

Все выполнено в соответствии с заданием. Не хватает использования express router, но это не критично для данного задания.

Задание проверил, отличная работа.
Все выполнено в соответствии с заданием. Не хватает разбивки кода на небольшие части, использования express router, но это не критично для данного задания.

Что можно исправить:
- При запуске есть ошибка связанная с не установленной библиотекой.
- Поле progress хранить в базе не нужно, его можно вычислять для каждого полученного активного таймера.

Рекомендации:
Хочу вам порекомендовать для дополнительного изучения, вот этот учебник по SQL. В этом учебнике есть много примеров SQL запросов и вы их можете запускать прямо на странице.
https://www.w3schools.com/sql/default.asp

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.


###
Вопросы
# neon.tech тоже не получается зарегистрироваться.
Тогда нужно будет установить локально. Вот инструкция как это сделать:
https://www.w3schools.com/postgresql/postgresql_install.php
Еще вы можете попросить доступы в чате nodejs у других студентов.

# проверить предоставлены ли доступы к базе.
Не забудьте создать файл .env-sample, и предоставьте, пожалуйста, доступы к вашей базе данных, я так смогу быстрее проверить задание.

Предоставьте, пожалуйста, доступы к вашей базе данных из файла .env, я так смогу быстрее проверить задание.

# knex.raw("progress + 1000")
Код выше сразу дает несколько проблем.

1. Прогресс для таймера добавиться только если будет этот запрос за таймерами. Т.е. если пользователь ушел со страницы, его таймеры не будут обновляться.

2. Прогресс сохраняется напрямую в базу. В реальных проектах хотелось бы такого избежать по причине минимизации запросов к базе.  Тут можно поменять логику получения прогресса для таймеров чтобы прогресс высчитывался исходя из текущей даты и времени старта.

# В чем разница между типами bigInteger и bigint?
Практически никакой. bigInteger в MySQL или PostgreSQL добавляет столбец bigint, в противном случае добавляется обычное целое число. Обратите внимание, что данные bigint возвращаются в виде строки в запросах.

https://knexjs.org/guide/schema-builder.html#biginteger

# тип данных свойств становится string
Если коротко, то данные bigint возвращаются в виде строки в запросах, чтобы исключить потерю данных при обработке очень больших чисел в JS.

https://knexjs.org/guide/schema-builder.html#biginteger

Можете почитать еще этот материал

https://learn.javascript.ru/number#netochnye-vychisleniya

# В чем практическая польза FOREIGN KEY в таблицах MySQL?
https://ru.stackoverflow.com/questions/901899/%D0%92-%D1%87%D0%B5%D0%BC-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%B0-foreign-key-%D0%B2-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%D1%85-mysql

# Как остановить таймер 
Вы можете в одном запросе сделать обновление тамера, например вот как это сделал другой студент:

const [timer] = await knex("timers")
    .where({ id: timerId })
    .update({
      is_active: knex.raw("NOT is_active"),
      end: Date.now(),
    })
    .returning("*");


###
Прочее

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await findUserByUsername(username);

  if (!user || hash(password) !== user?.password) {
    const params = new URLSearchParams("");
    params.append("authError", "true");
    return res.status(400).redirect(`/?${params.toString()}`);
  }

  const sessionId = await createSession(user.id);

  res.cookie("sessionId", sessionId, { httpOnly: true }).status(200).redirect("/");
});

router.get("/logout", async (req, res) => {
  await deleteSession(req.cookies["sessionId"]);
  res.status(204).clearCookie("sessionId").redirect("/");
});




Отлично! Вы добавили код для аутентификации!

Следующим шагом будет добавление хеша и разделение кода на части.
Помните задание из 03_hash? Логика та же)) Выведите часть кода отвечающая за создание хеша в функцию, которая будет храниться в отдельном файле. То же самое сделайте с рутами для аутентификации и таймерами используя router.

    Логика простая: пользователь вводит пароль в форме на сайте и crypto его преобразует в набор случайных символов, которые трудно запомнить и трудно взломать, и сравнивает с точно таким же хешем пароля из базы.

    Здесь пароль введенный пользователем сравнивается с паролем из базы. Тут вам нужно заменить переменную с паролем на переменную содержащую хеш пароля.

    Отлично! Теперь используйте хеш пароля при сравнении паролей в руте /login.

------------------
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const user = await findUserByUsername(username);

  if (user) {
    const params = new URLSearchParams("");
    params.append("authError", encodeURI(`Username ${username} is exsist, please login`));
    return res.status(400).redirect(`/?${params.toString()}`);
  }

  const [id] = await db("users")
    .insert({ username, password: hash(password) })
    .returning("id");

  const sessionId = await createSession(id);

  res.cookie("sessionId", sessionId, { httpOnly: true }).status(201).redirect("/");
});


Все верно! Следующим шагом нужно сделать логику регистрации /signup, но теперь из введенного пароля нужно создать хеш, который будет и записан в базу вместо самого пароля.

    Код верный, только не забудьте что вы в руте /signup сохраняете в базу сам пароль, а не хеш. Создайте его на основе пароля и сохраните хеш в базе и мы перейдем к следующему шагу.

        Knex.insert() сохраняет нового пользователя. В параметры этой функции и нужно передать хешированный пароль.

    Теперь нужно добавить в /signup проверку существует ли пользователь с таким логином перед добавлением нового. Проверка такая же как и в /login.

    На следующем шаге, нужно получить id созданого пользователя и создать для него сессию.

        Вы можете вернуть id нового пользователя и создать ему сессию в /signup с редиректом на главную страницу. Код такой же как и в /login.

            Верните id с помощью returning и сохраните его в переменной, которую можно использовать в создании сессии. https://knexjs.org/#Builder-returning


            Отлично! Теперь у вас есть аутентификация. Осталась мелочь, добавить коды ответа при успешной (или нет) работе рута. Выглядит это так:
            res.cookie("sessionId", sessionId, { httpOnly: true }).status(201).redirect("/");
            Для ошибки аутентификации соответственно нужно возвращать код 400. Так же добавьте коды http ответов для рута /login

    А теперь выведите повторяющийся код для создания хеша в отдельную функцию. Поместите эту функцию в отдельный файл и экспортируйте его в index.js

--------------
У вас есть массив TIMERS с данными таймеров. Вам нужно создать таблицу для таймеров, где вы будете хранить те же самые значения, что и в этом объекте.

--------------

Нужно создать таблицу для таймеров, а потом добавить возможность связать таймер(ы) с определенным пользователем.

--------------

#Не работает база данных

А что находится в базе данных в данной таблице?

-------

Проверьте, пожалуйста, подключение к базе данных. Для этого вам нужно добавить следующий код ниже конфигурации knex.

const { Client } = require("pg");

(async () => {
   await client.connect();
   try {
     const res = await client.query("SELECT * FROM users");
     console.log(res.rows);
   } catch (err) {
     console.error(err);
   }
   client.end();
})();

--------

При регистрации нового пользователя, вы можете произвести поиск по его логину в базе. Если пользователь найден, то выдать ошибку регистрации.


-------
