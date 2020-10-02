const { describe } = require('mocha')

describe('My first test', () => {
  it('does not do much', () => {
    cy.visit('http://localhost:3001')

    cy.contains('Count:')
      .click()
      .should('have.text', 'Count: 1')
      .click()
      .should('have.text', 'Count: 2')

    cy.url().should('include', '/')
  })
  it('matches screenshot at 1000px wide', () => {
    cy.viewport(1000, 1000).get('html').matchImageSnapshot()
  })
  it('matches screenshot at 320px wide', () => {
    cy.viewport(320, 568).get('html').matchImageSnapshot()
  })
})
