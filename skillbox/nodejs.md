# node_modules не нужно хранить в репозитории
- Папку node_modules не нужно хранить в репозитории. Эта папка содержат в себе файлы библиотек устанавливаемых командой npm i и библиотеки в ней могут отличаться в зависимости от разных фактором, например ОС.

# ошибка установки
- Судя по всему у вас не установленна nodejs/npm. Вы можете это проверить с помощью команд:

npm -v
node -v

Вывод должен быть примерно таким:

# ReferenceError: fetch is not defined
fetch api появилось в nodejs 18 версии.

# res.status(404) и res.sendStatus(404)
Метод .status() отправляет код состояния в качестве аргумента. Его часто используют с методом send что бы отправить с кодом какие-то данные, например текст ошибки:

res.status(404).send('Not Found');

Метод .sendStatus() – это сокращенный синтаксис, который обеспечивает функциональность методов .status() и .send():

res.sendStatus(404);

Здесь метод .sendStatus() устанавливает код состояния 404 и отправляет его клиентской стороне с текстом по умолчанию. Например:

res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
