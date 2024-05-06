/// <reference types="cypress" />

it('takes an image diff of a tall page', () => {
  cy.visit('/')
  // add 20 todos
  // Tip: Lodash _.times is a good utility function
  Cypress._.times(20, (k) => {
    cy.get('input#addt').type(`todo ${k + 1}{enter}`)
  })
  // confirm there are 20 todos on the page
  cy.get('[data-cy=todo]').should('have.length', 20)
  // use image diff assertion
  cy.imageDiff('20-todos')
})
