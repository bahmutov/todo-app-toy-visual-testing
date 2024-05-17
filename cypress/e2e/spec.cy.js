/// <reference types="@bahmutov/cypress-toy-visual-testing" />

it('removes the news widget', () => {
  cy.visit('/')
  // hide the "aside.news" element
  // if it is visible
  // Hint: this is a conditional test example
  // https://glebbahmutov.com/cypress-examples/recipes/conditional-testing.html
  cy.imageDiff('todo-app')
})
