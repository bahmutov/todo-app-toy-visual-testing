/// <reference types="cypress-axe" />

it('has good text contrast', () => {
  cy.visit('/')
  cy.imageDiff('day')
  // start the a11y checks using cypress-axe plugin
  // https://github.com/component-driven/cypress-axe
  cy.get('button img[alt="Change color theme"]').click()
  cy.imageDiff('night')
  // check the a11y again
})
