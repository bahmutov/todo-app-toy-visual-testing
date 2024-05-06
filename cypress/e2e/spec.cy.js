/// <reference types="cypress" />

it('takes image diffs on CI while recording to Cypress Cloud', () => {
  cy.visit('/')
  cy.get('input#addt').type('hello{enter}')
  cy.get('[data-cy=todo]').should('have.length', 1)
  cy.screenshot('00-one-todo', { overwrite: true })
  cy.screenshot('01-the-runner', {
    overwrite: true,
    capture: 'runner',
  })
  cy.imageDiff('02-visual-diff')
})
