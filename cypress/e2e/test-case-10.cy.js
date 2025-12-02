describe('Test Case 10', () => {
  it('Verify Subscription in home page', () => {
    cy.visit('https://automationexercise.com/')

    cy.subscription()
  })
})