Отлично! Все тесты проходят успешно. Вам плюсик за правильное использование readFileSync с try/catch и за то что самостоятельно разобрались с задачей. ДЗ принято.

Отлично! Все тесты для основного и бонусного задания проходят успешно. Вам плюсик за то что самостоятельно разобрались с задачами.

Что можно исправить:
- Если убрать кодировку в первом fs.readFile, то все тесты пройдут успешно
- Сейчас ваш скрипт заканчивает работу с неправильным кодом, вам нужно это исправить. Если нет файла, то нужно выйти с process.exit(100). Для файла хеша соответственно нужно использовать process.exit(101). Если хеши не совпадают, программа должна вывести сообщение об ошибке и выйти с кодом process.exit(102).


Рекомендации:
- В качестве доп. материала к изучению рекомендую вам изучить часто используемую библиотеку axios. В частности ее можно использовать для бонусного задания.
https://github.com/axios/axios
- В качестве доп. материала к изучению рекомендую вам изучить часто используемую библиотеку node-fetch
https://github.com/node-fetch/node-fetch

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

#


Основное задание:
- process.exit(1) вместо кода
    Как минимум нужно вместо console.error(код); нужно использовать process.exit(код).
    ---
    Сейчас ваш скрипт заканчивает работу с неправильным кодом, вам нужно это исправить. Если нет файла, то нужно выйти с process.exit(100). Для файла хеша соответственно нужно использовать process.exit(101). Если хеши не совпадают, программа должна вывести сообщение об ошибке и выйти с кодом process.exit(102).



- ошибки в тестах
  В целом подход верный, но ваш скрипт не всегда срабатывает корректно. Вы можете это проверить с помощью тестовых файлов из папки ./test-files. Это надо исправить.
  ---
  Проверьте, пожалуйста, ваш скрипт с тестовыми файлами из папки ./test-files. Скрипт не всегда срабатывает корректно. Это надо исправить.


### Вопросы
# Харкодят путь к файлу
Вы верно поняли задачу, кроме одного нюанса. Вы захардкодили путь к папке с тестовыми файлами, а ваш скрипт должен работать с любым файлом переданным ему в качестве аргумента. Например:

node index.js test-files/LICENSE

Ваш скрипт должен получить путь к любому файлу. Т.е. он должен без ошибок сработать с таким путем (если этот файл есть) или выйти с кодом 100

node index.js ../../test.txt

# стримы
Стримы это отдельная тема которую вы будете проходить в конце курса, но вам плюсик что вы интересуетесь ими сейчас, хотя и для этой задачи вам достаточно использовать readFileSync.

# не совпадают хеши 2-х файлов. Так и не смог найти где ошибся..
В тестовых файлах в директории test-files есть ошибки: для файлов cat.txt и LICENSE могут не проходить тесты, если вы используете windows. Это связанно с отличием в символе переноса строки для Linux и Windows, вот статья если интересно:

https://russianblogs.com/article/8582668574/

# Неверная кодировка
Уберите кодировку для основного файла (так как он может быть не только бинарным) и наоборот добавьте кодировку для sha256 файла (так как он всегда текст)   .

readFile(pathFile).then((fileData) => {
  hash.update(fileData);
  const hashCode = hash.digest("hex");

  readFile(pathFile + ".sha256", "utf8", true).then((encodeData) => {
    if (hashCode !== encodeData.trim()) {
      console.error("Хеши не совпадают");
      process.exit(102);
    } else {
      process.exit(0);
    }
  });
});



И так все сработает:

# не правильно используют асинхронные методы
Вы не совсем верно используете асинхронные методы. Оба fs.readFile запускаются по очереди, но, так как это асинхронные методы, они могут завершиться не в порядке очередности запуска, что может выдать вам неправильный результат для несуществующего файла. Т.е. несуществующий файл может выдать вам ошибку связанную с хеш-файлом, когда ожидается ошибка основного файла. Здесь вам нужно вложить один метод в другой, чтобы точно быть уверенным что они выполнятся по очереди. Вот так:


# axios не срабатывает для jpg файлов
Попробуйте добавить в запрос для файлов следующую опцию:
axios.get(filePath, { responseType: 'arraybuffer'}

# Не понимают что нужно сделать
Вам нужно в вашем скрипте:
1) Получить содержимое файла путь к которому вы должны получить из аргумента вашего скрипта, например:
node index.js ../это_путь_к_файлу.txt
Если его нет выдать ошибку process.exit(100)

2) Получить содержимое файла с хешем. Этот файл находится рядом с файлом из пункта 1, но у него есть расширение
const sha256File = `${process.argv[2]}.sha256`;
Если файла с хешем нет, то выдать ошибку process.exit(101)

3) Создать хеш файла из пункта 1 и сравнить его с хешем полученным в пункте 2. Если они отличаются выдать ошибку process.exit(102)

Также у вас в папке test-files есть файлы для тестирования вашего скрипта:
node index.js test-files/LICENSE

И есть тесты запускаемые следующей командой:
npm test
Можете запустить тесты с помощью команды npm test для быстрой проверки скрипта.


###
Рекомендации:

В качестве доп. материала к изучению рекомендую вам изучить часто используемую библиотеку axios. В частности ее можно использовать для бонусного задания.
https://github.com/axios/axios
---
В качестве доп. материала к изучению рекомендую вам изучить часто используемую библиотеку node-fetch
https://github.com/node-fetch/node-fetch


# Решение 1
import fs from "fs";
import crypto from 'crypto';

let file = null;

try {
  file = fs.readFileSync(process.argv[2]);
} catch (e) {
  process.exit(100);
}

const hash = crypto.createHash("sha256").update(file).digest("hex");
const sha256 = `${process.argv[2]}.sha256`;

let fileSha256 = null;

try {
  fileSha256 = fs.readFileSync(sha256, "utf8");
} catch (e) {
  process.exit(101);
}

console.log('hash = ', hash);
console.log('fileSha256 = ', fileSha256);

if (hash !== fileSha256.trim()) {
  process.exit(102);
} else {
  process.exit(0);
}

# Решение 2
const fs = require('fs');
const crypto = require('crypto');
const file = process.argv[2];
const shaFile = `${file}.sha256`;

fs.readFile(file, (err, data) => {
  if (err) process.exit(100);
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  fs.readFile(shaFile, 'utf8', (err, data) => {
    if (err) process.exit(101);
    if (hash != data.trim()) process.exit(102);
    else console.log(data);
  });
});

# Решение 3 (readable straem)
const crypto = require("crypto");
const fs = require("fs");

const filename = process.argv[2];

const hash = crypto.createHash("sha256");
const input = fs.createReadStream(filename);

input.on("error", (err) => {
  console.error(err);
  process.exit(100);
});

input.on("readable", () => {
  const val = input.read();

  if (val) hash.update(val);
  else {
    let hashSumWithoutSpace;
    try {
      hashSumWithoutSpace = fs.readFileSync(filename  ".sha256", "utf8", (error, data) => {
        return data.trim();
      });
    } catch (err) {
      // console.error(err);
      process.exit(101);
    }

    if (hash.digest("hex") === hashSumWithoutSpace.trim()) {
      return console.log("OK");
    } else {
      console.error(102);
      return process.exit(102);
    }
  }
});


# бонусное дз
const fs = require("fs");
const axios = require("axios");

const filePath = process.argv[2];
const hashFilePath = filePath  ".sha256";

try {
  new URL(filePath);
  Promise.all([
    axios.get(filePath, { responseType: "arraybuffer" }).then((resp) => resp.data),
    axios.get(hashFilePath).then((resp) => resp.data),
  ])
    .then(([file, hashFile]) => verify(file, hashFile))
    .catch(({ message, config: { url } }) => {
      errorHandler(message, url);
    });
} catch {
  try {
    const file = fs.readFileSync(filePath);
    const hashFile = fs.readFileSync(hashFilePath, "utf8").trim();

    verify(file, hashFile);
  } catch ({ message, path }) {
    errorHandler(message, path);
  }
}

// файл с вспомогательными функциями
const crypto = require("crypto");

function verify(file, hashFile) {
  const hash = crypto.createHash("sha256");
  hash.update(file);

  if (hash.digest("hex") !== hashFile.trim()) {
    console.error("ERROR! File and his hash sum do not match :(");
    process.exit(102);
  }

  console.log("Verification was successful!");
}

function errorHandler(message, path) {
  console.error(message);

  if (path.includes(".sha256")) {
    process.exit(101);
  }
  process.exit(100);
}

# node-fetch. Я тут по быстрому накидал ко, и, как вы можете заметить в коде присутсвует async/await вместе с промисами. В реальной работе лучше использовать один подход.

const fs = require("fs");
const dir = process.argv[2];
const hashFilePath = dir + ".sha256";
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
const fetch = require("node-fetch");

function read() {
  try {
    new URL(dir);
    Promise.all([
      fetch(dir),
      fetch(hashFilePath),
    ]).then(async ([file, hashFile]) => {
        if (file.status !== 200) {
          console.log('100');
          process.exit(100);
        }
        if (hashFile.status !== 200) {
          console.log('101');
          process.exit(101);
        }

        return [await file.buffer(), await hashFile.text()]
      })
      .then(([file, hashFile]) => {
        console.log(file, hashFile);
        checkHash(file, hashFile);
      })
      .catch((error) => {
        // errorHandler("файла не существует", dir);
        console.log("error.message", error.message);
      });
  } catch {
    try {
      const file = fs.readFileSync(dir);
      const copyFile = fs.readFileSync(hashFilePath, "utf-8").trim();
      checkHash(file, copyFile);
    } catch ({ message, path }) {
      errorHandler(message, path);
    }
  }
}

function checkHash(file, fileHash) {
  const originHash = hash.update(file).digest("hex");

  if (originHash !== fileHash.trim()) {
    process.exit(102);
  } else {
    console.log("programm`s successfully finished");
  }
}

function errorHandler(message, path) {
  console.error(message);

  if (path.includes(".sha256")) {
    process.exit(101);
  }
  process.exit(100);
}

read();
