# Задание "Подмените в ответе сообщение коммита на сообщение длиной в 450 символов"

Тут имеется ввиду использование cy.intercept с специальной опцией fixture. Значение переданное в fixture означает файл с данными из одноименной папки Cypress. Например вот такой записи будет искать файл ./fixtures/project.json где будет содержаться данные.

cy.intercept('https://dashboard.cypress.io/graphql', {headers: {'content-length': '1669'},}, {fixture: 'project'}).as('project')

https://docs.cypress.io/api/commands/intercept
