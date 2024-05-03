/// <reference types="cypress-axe" />

it('uses application CSS styles', () => {
  cy.visit('/')
  cy.get('input#addt').type('hello{enter}')
  cy.get('[data-cy="todo"]')
    .should('have.length', 1)
    .first()
    .find('input:checkbox')
    .check()
  cy.contains('button', 'Completed').click()
  cy.contains('#items-left', '0')
  cy.get('button [alt="Change color theme"]').click()
})
