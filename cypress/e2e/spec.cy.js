/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it('looks the same', () => {
  cy.visit('/')
  cy.get('main').should('be.visible')
  // get the window's pixel ratio and assert it is 1 on Linux
  // or 2 on macOS
  // confirm the application looks the same
  cy.imageDiff('todo-app')
})
