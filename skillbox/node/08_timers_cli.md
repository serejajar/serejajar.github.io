Работа выполнена на отлично и вам плюсик за использование библиотеки inquirer. ДЗ принято.


Рекомендации к следующему ДЗ
- Если будете использовать mongodb для следующего ДЗ, то помните что Map() может не корректно работать с ObjectId. Поэтому лучше использовать метод toString() при сохранении пользователя в req:

function getUserByCredentials(db, username, password) {
  return db
    .collection("users")
    .findOne({ name: username, password: hash(password.trim()) }, { name: 1, password: 0 })
    .then((user) => {
      user._id = user._id.toString();
      return user;
    });
}

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# а как получить данные если убрать bodyParser.urlencoded
Вы можете получить их из req.body, точно также как в прошлых работах.

const { username, password } = req.body;
Но если удалить bodyParser.urlencoded из предыдущих работ, то тогда вы уже не сможете получить эти переменные из req.body. Если упрощенно, то отправка данных из браузера (форма на странице)  должно быть безопасной и эти данные шифруются. Поэтому при получении данных из браузера необходимо использовать bodyParser.urlencoded.

https://www.npmjs.com/package/body-parser#extended

#  как реализовать передачу сессии
Насколько я вижу вы не реализовали проверку сессии, т.е. вы не проверяете что пользователь авторизован. Что тут вам нужно сделать:

1. Получить sessionId из файла, который вы создаете в команде login:

const sessionFileName = path.join(
  process.cwd(),
  "sessions",
  `${os.type().match(/windows/i) ? "_" : "."}sb-timers-session`
);
2.  Отправить его в запросе. Тут я покажу вариант передачи сессии в headers в fetch, но вариант передачи сессии в виде параметра в url тоже возможен.

const response = await fetch(`${SERVER_API}/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'sessionid': sessionId,
      }
});
Далее вам нужно уже сравнить сессии с тем что у вас хранится в БД и вернуть данные счетчиков.


# Как использовать хидеры
У вас все верно, странно что не срабатывает. Есть еще один вариант прямо передать headers в fetch:

const response = await fetch(`${SERVER_API}/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'sessionid': sessionId,
      }
});

# А как получить sessionId при логине
При логине вам нужно

1) создать новый sessionId и записать в БД

2) послать sessionId на клиентскую часть и сохранить его в файл который будет читаться каждый раз при запросе к серверу со стороны клиента.

3  при запросе с клиентской части вы считываете данные из этого файла и отсылаете sessionId, чтобы бекенд смог понять авторизован ли пользователь.



Эта реализация практически не отличается от реализации из предыдущих ДЗ. Отличие только то что в CLI программах нет кук как таковых и поэтому sessionId нужно хранить в файле и передавать его  в хидере или посредством ссылки.


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
