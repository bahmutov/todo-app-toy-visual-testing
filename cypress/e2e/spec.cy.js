/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it(
  'takes an image diff of a wide page',
  { viewportWidth: 1600 },
  () => {
    cy.visit('/')
    cy.imageDiff('pattern')
  },
)
