###
Принять
Тут вам нужно создать сам файл с хуком и через замыкание можно сохранять данные из разных методов:

const fs = require("fs");
let jsonReport = {}

module.exports = {
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
      let content = {}

      const jsonFilePath = `./04_wdio_advanced_configuration/reports.json`;

      try {
        content = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
      } catch (e) {
        console.log('Error: File does not exiest');
      }

      const testObj = {
          [test.parent]: {
              ...(content[test.parent] || {}),
              [test.title]: {
                duration,
                status: passed ? 'passed' : 'failed'
              }
          }
      }

      const jsonReport = {
        ...content,
        ...testObj
      }

      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonReport, null, 2));


      browser.closeWindow();
  },
}

И в конфигурационном файле wdio.conf.js вызвать этот хук

const hooks = require('./hooks');

exports.config = {
    /* остальные конфигурации */
    ...hooks,
}


Но вам плюсик за ваше решение. ДЗ я принимаю, а это исправление оставляю в качестве самостоятельной работы.

###
Похвалить
---


###
Рекомендации



# Были ли у кого то проблема с синхронным режимом
В 16 версии nodejs синхронный режим работать не будет, об этом говориться в самом видео 4.4.
