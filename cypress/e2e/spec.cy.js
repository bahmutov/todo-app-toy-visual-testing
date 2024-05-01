/// <reference types="cypress" />

it('adds and removes todos', () => {
  cy.visit('/')
  cy.get('[data-cy="add-todo"]').clear()
  cy.get('[data-cy="add-todo"]').type(
    'record the test{enter}',
  )
  cy.get('[data-cy="add-todo"]').clear()
  cy.get('[data-cy="add-todo"]').type(
    'find the secret{enter}',
  )
  cy.get('[data-cy="add-todo"]').clear()
  cy.get('[data-cy="add-todo"]').type('use Studio{enter}')
  cy.get('[data-cy=todo]')
    .should('have.length', 3)
    .eq(1)
    .find('.cb-input')
    .check()
    .should('be.checked')
  cy.get('#items-left').should('have.text', '2')
  cy.get('#completed').click()
  cy.get('#completed').should('have.class', 'on')
  cy.get('[data-cy=todo]:visible')
    .should('have.length', 1)
    .contains('find the secret')
})
