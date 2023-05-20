# supportFile
Тест выдает ошибку связанная с отсутствием папок cypress. Решается это добавлением опции supportFile в конфиг cypress.

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false
  },
});
