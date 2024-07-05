Работа выполнена на отлично и вам плюсик за корректную настройку репортера!

ДЗ принято.


# пример репортера (Ренат Гасанов)
const wdioReporter = require("@wdio/reporter").default;
class CustomReporter extends wdioReporter {
  constructor(options) {
    super(options);
    this.options = options;
  }
  onTestStart(test) {
    console.log(`${test.title}  started`);
  }
  onSuiteEnd(suite) {
    const statusSymbols = {
      passed: "✓",
      failed: "×",
    };
    for (let test of suite.tests) {
      if (test.state == "failed") {
        this.write(
          `    \x1b[31m${statusSymbols.failed} Тест ${test.title} провален ${test.duration / 1000}s\n`
        );
      }
      if (test.state == "passed") {
        this.write(
          `    \x1b[92m${statusSymbols.passed} Тест ${test.title} пройден успешно ${test.duration / 1000}s\n`
        );
      }
    }

    let methodsArray = [];
    for (let method of suite.tests[0].output) {
      if (method === undefined) return;
      methodsArray.push(method.endpoint);
    }

    console.log(`\x1b[96mТест ${suite.tests[0].title} использовал следующие команды: `);
    for (let i = 0; i <= methodsArray.length; i++) {
      if (methodsArray[i] === undefined) continue;
      console.log(`    \x1b[97m${methodsArray[i]}`);
    }
  }
}

module.exports = { CustomReporter: CustomReporter };
