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

# The testing type selected (e2e) is not configured in your config file.
Экспорт в конфиге должен быть только один, вот так эта ошибка уйдет:

module.exports = defineConfig({
  projectId: "h994ct",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
