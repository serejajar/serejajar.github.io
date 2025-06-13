# Runtime.consoleAPICalled не срабытывает
Странно, так как событие Runtime.consoleAPICalled не срабытывает, но оно есть в доках.
https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#event-consoleAPICalled

Попробуйте проверить с этим кодом для теста из видео:

describe('CDP Protocol - Events', () => {
    it.only('should get message from console via Puppeteer', async () => {
        const puppeteer = await browser.getPuppeteer()
        const page = (await puppeteer.pages())[0]

        await page.on('console', (message) => {
            console.log(`Get messge: ${message.args()[0]}`)
        })

        await browser.url('https://skillbox.ru')
        await browser.debug()
    })
});

# не могу никак кастомный сервис подключить, хотя из примеров работает
Скорее всего, дело в том как вы импортируете сам RequestService. Нужно вот так:

const { RequestService } = require('./RequestService')

И в самом файле нужно экспортировать класс:

class RequestService { ... }

module.exports = {
    RequestService: RequestService
}

# Не срабатывает команда в винде
Нужно использовать двойные кавычки
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222


# как получать postData, headers, queryParams, body.
Вот так:

await page.on('request', (request) => {})

В Puppeteer из объект request можно получить то что вам нужно:

URL запроса (request.url())

Метод запроса (request.method())

Заголовки (request.headers())

POST-данные (request.postData())

Однако есть важное уточнение: request.postData() доступно только для POST-запросов. Если запрос — это GET, postData() вернёт null.

# пример класса
Вот пример подобного класса:

const { $ } = require('@wdio/globals')
const Page = require('./page');

class SecurePage extends Page {
    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new SecurePage();


И далее в тесте можно его импортировать и использовать

const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
})
