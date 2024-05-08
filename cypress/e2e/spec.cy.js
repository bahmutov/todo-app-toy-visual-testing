/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it(
  'takes an image diff of a tall page with a left column',
  // avoid scrolling the input element all the way
  // to the top of the page when typing new todos
  { scrollBehavior: 'center' },
  () => {
    // load the page and create 20 todos
    cy.visit('/')
    Cypress._.times(20, (k) => {
      cy.get('input#addt').type(`todo ${k + 1}{enter}`)
    })
    // remove focus from the input to hide the caret
    cy.get('input#addt').blur()
    cy.get('[data-cy=todo]').should('have.length', 20)
    // take a full page screenshot
    // notice that Cypress scrolls the page to get
    // all 20 items. Hmm, does the screenshot look correct?
    //
    // Solve the problem with the left column
    // appearing several times in the gold image

    // Solution 1: ignore the left column element
    cy.imageDiff('solution-1-ignore-left-column', {
      ignoreElements: '.left',
    })
    // Solution 2: take a screenshot of the right column only
    cy.get('.right').imageDiff('solution-2-right-column')
    // Solution 3: take a screenshot of the viewport only
    cy.imageDiff('solution-3-viewport-only', {
      capture: 'viewport',
    })
    // Solution 4: change the left column CSS
    // to remove the "position: sticky" style
    // Tip: you can set it to "initial" or "inherit"
    cy.get('.left').invoke('css', 'position', 'initial')
    cy.imageDiff('solution-4-left-column-fixed')
  },
)
