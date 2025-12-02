Cypress.Commands.add('subscription', () => {
    cy.get('#slider-carousel').should('be.visible');
    cy.get('#susbscribe_email').type('maxverstappen@email.com');
    cy.get('#subscribe').click();
});