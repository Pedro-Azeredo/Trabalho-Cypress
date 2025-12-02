Cypress.Commands.add('formAnswer', () => {

    cy.get('#slider-carousel').should('be.visible');

    cy.get('.fa.fa-envelope').click();

    cy.get('input[name="name"]').should('be.visible').type('Max');
    cy.get('input[name="email"]').should('be.visible').type('maxverstappen@email.com');
    cy.get('input[name="subject"]').should('be.visible').type('Return Present');
    cy.get('#message').type('It came broken...');

    // Upload do Arquivo (NÃO FUNCIONA)
    // cy.get('input[name="upload_file"]').attachFile('img/sorry.jpg')

    cy.get('.btn.btn-primary.pull-left.submit_form').click();
    cy.get('.btn.btn-success').click();
});