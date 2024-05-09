/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it(
  'ignores the text on the page',
  // avoid scrolling the input element all the way
  // to the top of the page when typing new todos
  { scrollBehavior: 'center' },
  () => {
    // load the page and create 5 todos
    cy.visit('/')
    Cypress._.times(5, (k) => {
      cy.get('input#addt').type(`todo ${k + 1}{enter}`)
    })
    cy.get('input#addt').blur()
    cy.get('[data-cy=todo]').should('have.length', 5)

    // take the visual snapshot of the page
    // with all text hidden by making it transparent
    cy.imageDiff('styles-without-text')

    // after taking the visual diff, remove the style
    // to make the text visible again
    //
    // just to confirm, change the added todos text
    // and see if the image diff fails or not
  },
)
