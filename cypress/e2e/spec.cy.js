/// <reference types="@bahmutov/cypress-toy-visual-testing" />

// https://github.com/bahmutov/cypress-if
import 'cypress-if'

it('removes the news widget', () => {
  cy.visit('/')
  // hide the "aside.news" element
  // if it is visible
  // Hint: this is a conditional test example
  // https://glebbahmutov.com/cypress-examples/recipes/conditional-testing.html
  cy.get('.news')
    // using "should(Cypress._.noop)" to avoid failing
    // even if there is no element at all
    .should(Cypress._.noop)
    .then(($el) => {
      if ($el.length && Cypress.dom.isVisible($el)) {
        cy.log('hiding the news widget')
        cy.get('.news').invoke('hide')
      }
    })
  cy.imageDiff('todo-app')
})

it('removes the news widget using cypress-if', () => {
  cy.visit('/')
  // hide the "aside.news" element
  // if it is visible
  // Hint: this is a conditional test example
  // https://glebbahmutov.com/cypress-examples/recipes/conditional-testing.html
  cy.get('.news')
    .if('visible')
    .invoke('hide')
    .log('hidden the widget')
  cy.imageDiff('todo-app')
})
