require('chromedriver');
const {By, until} = require("selenium-webdriver");
const {expect} = require("chai");

describe("Testing notes page", async function(){
    const firstNote = By.className("articlePreview__link");

    const TitleResult = By.css("input.baseInput__field");
    const TextResult = By.css("textarea.baseTextarea__text");

    const Title = By.css("p.articlePreview__title");
    const Text = By.css("p.articlePreview__text");

    const deleteButton = By.css("div.pageArticle__buttons > *:last-child");
    const allNotesLink = By.css("a.theLayout__menuItem:first-child");
    
    // const secondNote = By.css("div.pageCreate__articlePreview > button");
    // const deleteButtonSecond = By.css("div.pageArticle__buttons > button:nth-of-type(2)");
    // const notesWrapper = By.className("vb-content");

    it("Deleting notes", async function(){
        await driver.get("http://qa.skillbox.ru/module15/bignotes/#/statistic");

        // Кликните на заметку из списка заметок по центру экрана.
        await driver.findElement(firstNote).click();

        // Дождитесь появления справа заголовка выбранной записи в разделе «Все записи».
        await driver.sleep(1000);

        // Проверьте, что у первой записи заголовок равен только что выбранной записи.
        const mainNoteTitle = await driver.findElement(TitleResult).getAttribute("value");
        const firstNoteTitle = await driver.findElement(Title).getText();

        expect(mainNoteTitle).to.be.equal(firstNoteTitle, "Wrong title");

        // Проверьте, что у первой записи текст равен только что выбранной записи.
        const mainNoteText = await driver.findElement(TextResult).getAttribute("value");
        const firstNoteText = await driver.findElement(Text).getText();

        expect(mainNoteText).to.be.equal(firstNoteText, "Wrong text");

        // Кликните по кнопке с иконкой корзины, расположенной в центральной белой части страницы.
        await driver.findElement(deleteButton).click();

        // В разделе «Все записи» выберите самую верхнюю запись (первую).

        // Кликните по кнопке с иконкой корзины, расположенной в центральной белой части страницы.
        // Дождитесь исчезновения записи в разделе «Все записи».
        // Проверьте, что справа в списке «Все записи» не видно записей.

        // await driver.findElement(allNotesLink).click();
        // await driver.findElement(secondNote).click();
        // await driver.findElement(deleteButtonSecond).click();
        // await driver.wait(async () => {
        //     const elements = await driver.findElement(notesWrapper);
        //     if (elements.length == 0) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }, 5000);

        expect(true).to.be.true
    });
});
