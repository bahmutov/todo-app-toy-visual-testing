/// <reference types="cypress" />

it('takes image diffs on CI while recording to Cypress Cloud', () => {
  cy.visit('/')
  Cypress._.times(20, (k) => {
    cy.get('input#addt').type(`todo ${k + 1}{enter}`)
  })
  cy.get('[data-cy=todo]').should('have.length', 20)
  cy.screenshot('00-one-todo', { overwrite: true })
  cy.screenshot('01-the-runner', {
    overwrite: true,
    capture: 'runner',
  })
  cy.imageDiff('02-visual-diff')
})
