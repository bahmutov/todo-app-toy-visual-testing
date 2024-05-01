/// <reference types="cypress" />

it('adds and removes todos', () => {
  cy.visit('/')
  cy.get('[data-cy="add-todo"]').clear()
  cy.get('[data-cy="add-todo"]')
    .invoke('css', 'caret-color', 'transparent')
    .type('record the test')
  cy.imageDiff('typing-todo')
})
