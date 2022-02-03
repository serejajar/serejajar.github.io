-ругается на импорт картинок, css:
Попробуйте добавить вот эти конфиги для обработки файлов:
https://jestjs.io/docs/next/code-transformation#transforming-images-to-their-path

    У вас сейчас нет локальных изменений в конфиге? Просто я буду вам присылать рабочий пример основанный на вашем коде из репозитория.

    1. Добавьте код из той ссылки что я вам дал.  testEnvironment должен быть не в болке transform. Вот сам конфиг:

    // eslint-disable-next-line no-undef
    module.exports = {
      //verbose: true,
      transform: {
        '\\.js$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js', /* для файлов изображений*/
        '\\.(css|scss)$': '<rootDir>/fileTransformer.js', /* для файлов стилей */
      },
      testEnvironment: 'jsdom',
    };
    2. Создайте файл 20_testing/fileTransformer.js и добавьте туда следующий код:

    const path = require('path');

    module.exports = {
      process(src, filename, config, options) {
        return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
      },
    };
    После это проверьте работу тестов.



###
Похвалить и отклонить:
Первое задание выполнено на отлично!
---


###
Принять

###
Похвалить
Все выполнено по условиям ДЗ.  Вам большой плюс за самостоятельно решение проблем связанных с тестами и конфигурационным файлом jest. ДЗ принято.



###
Рекомендовать:
Вы также можете использовать циклы при тестировании. Примерно вот так:
for (const i in filtered) {
  expect(expected[i] === filtered[i]).toBe(true);
}

​Часто это облегчает тестирование.
---
Можете еще глянуть в сторону библиотеки для тестирование mocha. Не смотря на название он неплох

https://learn.javascript.ru/testing-mocha
https://mochajs.org/


###
Прочее

- помочь студенту с первым заданием
  Хотите чтобы я проверил первое задание, перед тем как вы начнете делать второе?

- все вперемешку
  Добавьте весь код игры в репозиторий этой практической работы в отдельную папку, чтобы задания не перемешались друг с другом.
