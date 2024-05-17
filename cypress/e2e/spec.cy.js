/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it('removes the news widget', () => {
  cy.visit('/')
  // hide the "aside.news" element
  // if it is visible
  // Hint: this is a conditional test example
  // https://glebbahmutov.com/cypress-examples/recipes/conditional-testing.html
  cy.get('.news')
    .should(Cypress._.noop)
    .then(($el) => {
      if (Cypress.dom.isVisible($el)) {
        cy.log('hiding the news widget')
        cy.get('.news').invoke('hide')
      }
    })
  cy.imageDiff('todo-app')
})
