/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it('looks the same', () => {
  cy.visit('/')
  cy.get('main').should('be.visible')
  // get the window's pixel ration and assert it is 1 on Linux
  // or 2 on macOS
  const expectedPixelRatio =
    Cypress.platform === 'linux' ? 1 : 2
  cy.window()
    .its('devicePixelRatio', { timeout: 0 })
    .should('equal', expectedPixelRatio)
  // confirm the application looks the same
  cy.imageDiff('todo-app')
})
