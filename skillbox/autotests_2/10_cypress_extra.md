# Задание "Подмените в ответе сообщение коммита на сообщение длиной в 450 символов"

Тут имеется ввиду использование cy.intercept с специальной опцией fixture. Значение переданное в fixture означает файл с данными из одноименной папки Cypress. Например, вот такой записи будет искать файл ./fixtures/project.json где будет содержаться данные.

cy.intercept('https://dashboard.cypress.io/graphql', {
  headers: { 'content-length': '1669' },
}, {
  fixture: 'project'
}).as('project')

https://docs.cypress.io/api/commands/intercept

#
Тут имеется ввиду использование cy.intercept с url в качестве аргумента Т.е. подмена должна происходить для определенного запроса, например:

cy.intercept('https://dashboard.cypress.io/graphql', {
  headers: { 'content-length': '1669' },
}, {
  fixture: 'project'
}).as('project')
Либо с указанием метода POST, GET и прочее:

cy.intercept('POST', '/graphql', (req) => {
  if (req.body.operationName == "RunsList") {
    req.reply({fixture: 'RunsList_response'})
  }
}).as('inter')
https://docs.cypress.io/api/commands/intercept


# 2-й сценарий
У вас должен быть небольшой тест результаты которого отобразятся в дашборде и один из них должен падать:

describe('Простые тесты для Dashboard', () => {
    it('Успешный тест - открытие страницы TinyMCE', () => {
      cy.visit('/docs/tinymce/latest/full-featured-premium-demo/')
      cy.contains('Full featured demo').should('be.visible')
      cy.contains('TinyMCE').should('be.visible')
      cy.log('Успешный тест пройден')
    })

    it('Провальный тест - проверка несуществующего элемента', () => {
      cy.visit('/docs/tinymce/latest/full-featured-premium-demo/')
      cy.contains('Full featured demo').should('be.visible')

      // Этот элемент не должен существовать
      cy.get('.non-existent-element')
        .should('not.exist')
        .then(() => {
          throw new Error('Искусственная ошибка для демонстрации падения теста')
        })

      cy.log('Этот тест должен упасть')
    })
  })

Т.е. во втором сценарии вам нужно посетить дашбоард и проверить есть ли ошибка:

it('Сценарий №2: Отображение ошибки', () => {
      cy.visit(${dashboardUrl}/projects/your-project-id/runs)
      cy.get('[data-cy="run-item"]').first().click()
      cy.contains('Test Results').click()
      cy.get('[data-cy="test-status-failed"]').first().click()
      cy.get('[data-cy="error-message"]')
        .should('be.visible')
        .should('contain', 'Искусственная ошибка для демонстрации')
    })
