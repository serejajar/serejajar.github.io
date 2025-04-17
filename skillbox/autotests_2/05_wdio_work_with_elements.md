Проверил вашу работу и у вас все выполнено по условиям ДЗ модуля и вы правильно работаете с ожиданием элементов. Работа выполнена на отлично!

ДЗ принято.


#
Укажите точный тег, так как webdriver ищет по умолчанию ссылку. Вот так тест пройдет без ошибок

const startDateCalendar = await $('td=24')

https://webdriver.io/docs/selectors

# invalid session id
Разделите тесты по файлам. Вот так:

Т.е. у вас будет несколько файлов тестов:

describe('Calendar', () => {
  it('Scenario 1', async () => {
    await browser.url('https://react-dates.github.io/react-dates/iframe.html?id=drp-input-props--reopens-daypicker-on-clear-dates')

     ...
  });
});


describe('Calendar', () => {
  it('Scenario 2', async () => {
    await browser.url('https://react-dates.github.io/react-dates/iframe.html?id=drp-input-props--reopens-daypicker-on-clear-dates')
    ...
  });
});

В этом случае сессии автоматически перезагрузится и не будет этой ошибке.

Если хотите оставить один файл теста, то в каждом it не нужно использовать browser.url случае если вы работате с одной страницей


# данные в календаре вводятся, но не те, которые планировала.
browser.keys выполняет действия сразу, те. ваш код равнозначен если одновременно нажать кнопки 'ArrowDown', 'ArrowRight', 'Enter', также не заьывайте про время которое нужно чтобы элемент поменялся. Вот так сработает.

await browser.keys("ArrowDown");
await browser.keys("ArrowRight");
await browser.keys("Enter");

await new Promise((r) => setTimeout(r, 5000))

await browser.keys("ArrowDown");
await browser.keys("ArrowDown");
await browser.keys("Enter");

# используют browser.executeAsync
Вам нужно использовать browser.execute вместо browser.executeAsync. Последний ожидает вызов коллбека done.
https://webdriver.io/docs/api/browser/executeAsync/


# в каком уроке рассказывается про нажатие клавиш на клавиатуре?
В видео "5.3 Ввод символов в элемент", примерный тайминг 3:25. Спикер выполняет следующий код:

browser.keys("sparrow")

Так же вот ссылка на документацию:
https://webdriver.io/docs/api/browser/keys/
