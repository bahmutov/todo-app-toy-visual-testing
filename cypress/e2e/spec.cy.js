/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it(
  'takes an image diff of a wide page',
  // we are using a small viewport width to simulate locally
  // the CI situation where the browser total window width is limited
  { viewportWidth: 700 },
  () => {
    cy.visit('/')
    // the viewport is very narrow, and the page is wider than 700px
    // to get how much wider the page is, we need to get the scrollWidth
    // of the body element and set the viewport width to that
    // Tip: "scrollWidth" is a property of the element
    // Tip 2: the current viewport height is defined in the config object
    // https://on.cypress.io/config
    cy.get('body')
      .should('have.prop', 'scrollWidth')
      .should('be.a', 'number')
      .then((width) => {
        cy.viewport(width, Cypress.config('viewportHeight'))
      })
    // take an image diff of the entire page
    // do you see the right "Feedback" column?
    cy.imageDiff('wide-page')

    cy.screenshot('runner', {
      capture: 'runner',
      overwrite: true,
    })
  },
)
