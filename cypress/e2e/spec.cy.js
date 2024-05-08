/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it(
  'takes an image diff of a tall page with a left column',
  { scrollBehavior: 'center' },
  () => {
    cy.visit('/')
    Cypress._.times(20, (k) => {
      cy.get('input#addt').type(`todo ${k + 1}{enter}`)
    })
    cy.get('[data-cy=todo]').should('have.length', 20)
    cy.imageDiff('20', { ignoreElements: '.left' })
    // cy.get('.right').imageDiff('20-todos')
    // cy.imageDiff('20-todos-viewport', {
    //   capture: 'viewport',
    // })
  },
)
