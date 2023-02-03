# проблемы с асинхронностью
Методы cypress асинхронны, поэтому вы и наблюдаете что первым срабатывает cy.log. Вы можете использовать async/await чтобы ваш код выполнялся линейно.
---
# ругается на импорт картинок, css:
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
---
# как выходить из цикла после первой удачной проверки
Можете использовать метод cypress each с if/else внутри функции обработчика, но ничего страшного, для этого задания это не критично.
https://docs.cypress.io/api/commands/each

# нет npm test для 2-го ДЗ
Подготовьте, пожалуйста, package.json чтобы можно было запустить тесты во втором задании с помощью команды:
npm run e2e

# но, при достижении нужного результата в 3 и 4 тесте выпадает ошибка, которую я не могу никак перехватить
Вы в самом цикле все карточки проверяете на соответствие класса, поэтому этот тест всегда будет падать. Тут вы можете сохранить индекс карты в переменную и потом сравнить значения 1-й карт и сохраненной. Аот как это решил другой студент:

it('Проверка нахождение не пары', () => {
        cy.document().then(document => {
            const first = document.querySelectorAll('.back')[0].textContent;
            let i = 1;
            let flag = true;

            while (flag) {
                cy.get('.front').eq(0).click();
                cy.get('.front').eq(i).click();
                const second = document.querySelectorAll('.back')[i].textContent;
                if (first !== second) {
                    flag = false;
                    break;
                }
                ++i;
            }
            cy.get('.back').eq(0).should('not.have.class', 'back--active')
            cy.get('.back').eq(i).should('not.have.class', 'back--active')
        });
    })

###
Отклонить:
---


###
Принять
--
Все выполнено по условиям ДЗ.

###
Похвалить
Все выполнено по условиям ДЗ. Вам большой плюс за самостоятельно решение проблем связанных с тестами и конфигурационным файлом jest. ДЗ принято.
---
Первое задание выполнено на отлично!
---
И вам тоже спасибо за неплохой код. ДЗ принято.
---
Спасибо вам за неплохой код. Удачи в дальнейшей работе и обучении. Мне было приятно проверять ваши работы.



###
Рекомендации:
Вы также можете использовать циклы в самих тестах. Это может значительно сократить код тестов
for (const i in filtered) {
  expect(expected[i] === filtered[i]).toBe(true);
}

​Часто это облегчает тестирование.
---
Можете еще глянуть в сторону библиотеки для тестирования mocha. Несмотря на название он неплох

https://learn.javascript.ru/testing-mocha
https://mochajs.org/


###
Прочее

- помочь студенту с первым заданием
  Хотите чтобы я проверил первое задание, перед тем как вы начнете делать второе?

- все вперемешку
  Добавьте весь код игры в репозиторий этой практической работы в отдельную папку, чтобы задания не перемешались друг с другом.
