Укажите точный тег, так как webdriver ищет по умолчанию ссылку. Вот так тест пройдет без ошибок

const startDateCalendar = await $('td=24')

https://webdriver.io/docs/selectors


# данные в календаре вводятся, но не те, которые планировала.
browser.keys выполняет действия сразу, те. ваш код равнозначен если одновременно нажать кнопки 'ArrowDown', 'ArrowRight', 'Enter', также не заьывайте про время которое нужно чтобы элемент поменялся. Вот так сработает.

await browser.keys("ArrowDown");
await browser.keys("ArrowRight");
await browser.keys("Enter");

await new Promise((r) => setTimeout(r, 5000))

await browser.keys("ArrowDown");
await browser.keys("ArrowDown");
await browser.keys("Enter");
