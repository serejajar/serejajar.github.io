###
Принять
Тут вам нужно создать сам файл с хуком и через замыкание можно сохранять данные из разных методов:

const jsonReport = {}

module.exports = {
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
      jsonReport[test.parent][test.title].duration = duration
      jsonReport[test.parent][test.title].status = passed ? 'passed' : 'failed'    
   },
   afterSuite: function (suite) {
       console.log(suite)
   },
   after: function (result, capabilities, specs) {
       console.log(JSON.stringify(jsonReport))
   }
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
