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
