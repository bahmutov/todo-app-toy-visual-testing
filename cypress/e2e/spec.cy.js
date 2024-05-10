/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it(
  'takes an image diff of a wide page',
  { viewportWidth: 1400 },
  () => {
    // load the page and create 20 todos
    cy.visit('/')
    cy.imageDiff('wide-page')
  },
)
