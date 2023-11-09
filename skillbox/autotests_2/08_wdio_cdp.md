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
