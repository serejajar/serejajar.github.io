# driver not found
https://www.edureka.co/community/52315/how-to-setup-chrome-driver-with-selenium-on-macos

или

1. Сначала выполняем установку пакета chromedriver. Введите команду npm install chromedriver через терминал в проекте.

2. Дальше в ваш файл task4.js добавьте импорт библиотеки на первой строке:

require('chromedriver');

3. А теперь создайте переменную driver

const driver = new Builder().forBrowser('chrome').build();

Но обратите внимание что данная строка после импорта класса Builder. Иначе мы не сможем использовать класс раньше времени.

Теперь попробуйте запусти команду npm run test, все должно вновь начать работать)

# INFO devtools: Connect Puppeteer with browser on port 62426
0-0] 2023-11-04T10:30:03.840Z ERROR @wdio/runner: FetchError: Failed to fetch browser webSocket URL from http://localhost:62426/json/version: request
to http://localhost:62426/json/version failed, reason: connect ECONNREFUSED ::1:62426

https://t.me/c/1791694905/33/486

проблема решилась добавлением хука в конфиг файл wdio

beforeSession: () => {
  dns.setDefaultResultOrder('ipv4first');
},

# Как использовать ENTER, CTRL, BACKSPACE
Вам нужно импортировать его из selenium-webdriver, вот так

const { Key } = require("selenium-webdriver");

describe("Test", async function () {
  it("Show Keys", async function () {
    console.log('KEY', Key);
  });
});
Если запустите этот пример, то в терминале увидите все доступные свойства-кнопки:

https://www.selenium.dev/documentation/webdriver/actions_api/keyboard/
