Cypress.Commands.add('search', () => {
    cy.get('#slider-carousel').should('be.visible');
    
    cy.get('.material-icons.card_travel').click();

    cy.url().should('include', '/products');
    
    cy.get('#search_product').type('tshirt')
    cy.get('.btn.btn-default.btn-lg').click();
    
    cy.get('.title.text-center')
    .should('have.text', 'Searched Products')
    .and('be.visible');

    cy.get(".features_items")
    .children()
    .should("be.visible");
});