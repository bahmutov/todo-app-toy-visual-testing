/// <reference types="cypress" />

it('uses application CSS styles', () => {
  cy.visit('/')
  cy.get('input#addt').type('hello{enter}')
  cy.get('[data-cy=todo]')
    .should('have.length', 1)
    .first()
    .find('input:checkbox')
    .check()
  cy.contains('#items-left', '0').should('be.visible')
})
