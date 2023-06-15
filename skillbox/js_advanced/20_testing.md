Все выполнено по условиям ДЗ. Вам большой плюс за самостоятельно решение проблем связанных с тестами и конфигурационным файлом jest. ДЗ принято.

Что можно исправить:
- Добавить в package.json команду для запуска тестов "e2e": "npx cypress open", чтобы можно было запустить e2e тесты во втором задании с помощью команды:
npm run e2e

- При запуске тестов ошибка из-за того что папка отсутствует. Это можно исправить добавив в конфигурационный файл опцию supportFile:

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false
  },
});

Рекомендации:
- Вы также можете использовать циклы в самих тестах. Это может значительно сократить код тестов
for (const i in filtered) {
  expect(expected[i] === filtered[i]).toBe(true);
}
Часто это облегчает тестирование.

- Можете еще глянуть в сторону библиотеки для тестирования mocha. Несмотря на название он неплох

https://learn.javascript.ru/testing-mocha
https://mochajs.org/


Спасибо вам за неплохой код. Удачи в дальнейшей работе и обучении. Мне было приятно проверять ваши работы.

PS: Также будем рады вашему отзыву о работе куратора и о содержании курса на hello@skillbox.ru или в бот обратной связи.

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

# есть ли пример теста.
Вот пример теста. Это не совсем полноценный пример, но в целом подход думаю вам будет понятен.

describe('Игра "Найди пару"', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
    cy.get('div').should('have.id', 'game-app');
  });

  it('Проверка игры', () => {
    cy.get('.card').each(($card, i) => {
      const value1 = $card.text();
      cy.get('.card')
        .eq(i)
        .click()
        .then(($card) => {
          const value2 = $card.text();
          cy.get('.card').eq(0).click();
          if (value1 === value2) {
            cy.log(`Пара найдена 0 и ${i}`);
            cy.wait(500);
            cy.get('.card').eq(0).should('not.be.empty');
            cy.get('.card').eq(i).should('not.be.empty');
          }
        });
    });
  });
});



### Пример теста
describe('Игра в карточки', () => {
  // eslint-disable-next-line no-unused-vars
  beforeEach(() => {
    cy.visit('http://localhost:5000/20_testing/02/src/index.html');
  });
  it('Формирование игрового поля 4х4', () => {
    cy.get('.card').should('have.length', 16);
    // cy.get('.card').eq(4).click();
  });
  it('Открытие произвольной карточки', () => {
    const ncard = Math.floor(Math.random() * 16);
    cy.get('.card').eq(ncard).click();
    cy.get('.card').eq(ncard).should('have.class', 'open');
  });
  it('Поиск пары', () => {
    cy.get('.card').then((cards) => {
      const firstElement = cards[0].textContent;
      for (let i = 1; i < 16; i++) {
        cy.wait(20);
        cy.get('.card').eq(i).click();
        cy.wait(20);
        cy.get('.card').eq(0).click();
        if (firstElement === cards[i].textContent) {
          cy.get('.card').eq(0).should('have.class', 'success');
          break;
        }
      }
    });
  });
  it('Закрытие непарных карточек', () => {
    cy.get('.card').then((cards) => {
      const firstElement = cards[0].textContent;
      for (let i = 1; i < 2; i++) {
        cy.get('.card').eq(i).click();
        cy.wait(20);
        cy.get('.card').eq(0).click();
        if (firstElement !== cards[i].textContent) {
          cy.get('.card').eq(0).should('have.class', 'open');
          cy.get('.card').eq(i).should('have.class', 'open');
          cy.wait(20);
          cy.get('.card').eq(i + 1).click();
          cy.get('.card').eq(0).should('not.have.class', 'open');
          cy.get('.card').eq(i).should('not.have.class', 'open');
        } else cy.reload();
      }
    });
  });
});
