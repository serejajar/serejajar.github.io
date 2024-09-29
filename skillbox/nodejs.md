# node_modules не нужно хранить в репозитории
- Папку node_modules не нужно хранить в репозитории. Эта папка содержат в себе файлы библиотек устанавливаемых командой npm i и библиотеки в ней могут отличаться в зависимости от разных факторов, например ОС.

# ошибка установки
- Судя по всему у вас не установленна nodejs/npm. Вы можете это проверить с помощью команд:

npm -v
node -v

Вывод должен быть примерно таким:

# ReferenceError: fetch is not defined
fetch api появилось в nodejs 18 версии.

# В чем отличие res.status(404) и res.sendStatus(404)
Метод .status() отправляет код состояния в качестве аргумента. Его часто используют с методом send что бы отправить с кодом какие-то данные, например текст ошибки:

res.status(404).send('Not Found');

Метод .sendStatus() – это сокращенный синтаксис, который обеспечивает функциональность методов .status() и .send():

res.sendStatus(404);

Здесь метод .sendStatus() устанавливает код состояния 404 и отправляет его клиентской стороне с текстом по умолчанию. Например:

res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

# Ошибка ОК is not valid JSON
Это происходит из-за использования метод .sendStatus(), сокращенного синтаксиса, который обеспечивает функциональность методов .status() и .send():

res.sendStatus(200);

https://gitlab.skillbox.ru/razmik_achikyan/node/-/blob/knex-issue/07_timers_pg/timers.js#L108

Метод .sendStatus() устанавливает код состояния и отправляет его клиентской стороне с текстом по умолчанию. Например:

res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

А так как на клиенте ожидается JSON, то и выдает эту ошибку при парсинге строки "ОК", так как эта строка не является JSON.

Вы можете заменить метод sendStatus на res.status(200).send('{}') или использовать res.status(200).json(timer) и этой ошибки не будет.

# cannot use import outside a module
Чтобы исправить эту ошибку вы можете использовать require() как в видеоуроках или добавить следующую строку в package.json
"type": "module",

И тогда  нужно будет использовать вот такую запись
import chai from 'chai'

# почему в Node.js используется импорт/экспорт CommonJS (require), а не ES6 (import)?
Так сложилось исторически, но require уже уходит в прошлое. Чтобы использовать модули в nodejs вам нужно добавить следующую строку в package.json

"type": "module",

# Ошибка с импортом
Чтобы исправить эту ошибку вы можете использовать  import вместо require() для всех модулей. Для этого вам нужно добавить следующую строку в package.json:

"type": "module",

Либо использовать динамические импорты:
const module = await import(path); // где path это путь к модулю.

# что такое npx
npx это npm package runner, который может выполнить любой пакет, который вы хотите получить из реестра npm, даже не устанавливая этот пакет. npx полезен во время одноразового использования пакета.

# npm не распознано как имя командлета
если терминал выдает обратно версию Node, установленную в вашей системе, возможно, что-то пошло не так в процессе установки, поэтому вам все равно следует переустановить.

В некоторых случаях перезагрузка компьютера также может решить проблемы такого типа после установки.
