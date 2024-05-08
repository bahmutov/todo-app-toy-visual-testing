/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it(
  'ignores small differences in the page',
  // avoid scrolling the input element all the way
  // to the top of the page when typing new todos
  { scrollBehavior: 'center' },
  () => {
    // load the page and create 5 todos
    cy.visit('/')
    Cypress._.times(5, (k) => {
      cy.get('input#addt').type(`todo ${k + 1}{enter}`)
    })
    cy.get('[data-cy=todo]').should('have.length', 5)
    // take a snapshot of the page
    // is the image consistent? Especially when running
    // the tests locally on your main display?
    cy.imageDiff('5-todos')
  },
)
