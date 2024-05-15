/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it(
  'takes an image diff of a wide page',
  { viewportWidth: 1200 },
  () => {
    cy.visit('/')
    cy.imageDiff('pattern')
  },
)
