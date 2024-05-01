/// <reference types="cypress" />

it('adds and removes todos', () => {
  cy.visit('/')
  cy.get('[data-cy="add-todo"]').clear()
  cy.get('[data-cy="add-todo"]')
    .type('record the test')
    .blur()
  cy.imageDiff('typing-todo')
})
