Cypress.Commands.add('order', (name = 'Max') => {
   
    cy.get('#slider-carousel').should('be.visible');

    const timestamp = new Date().getTime(); 
    
    const email = `maxverstappen.${timestamp}@email.com`;

    cy.get('[data-product-id="1"]').first().click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('[data-product-id="3"]').first().click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('[data-product-id="4"]').first().click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('[data-product-id="5"]').first().click();
    cy.get('[data-dismiss="modal"]').click();

    cy.get('.fa.fa-shopping-cart').first().click();

    cy.get('.btn.btn-default.check_out').click();

    cy.get('.text-center').eq(1).click();    

    cy.get('[data-qa="signup-name"]').should('be.visible').type(name);
    cy.get('[data-qa="signup-email"]').should('be.visible').type(email);
    cy.get('[data-qa="signup-button"]').should('be.visible').click();

    cy.get('#id_gender1').click();
    cy.get('#password').type('010101');
    cy.get('#days').type('30');
    cy.get('#months').type('September');
    cy.get('#years').type('1997');
    cy.get('#first_name').type(name);
    cy.get('#last_name').type('Verstappen');
    cy.get('#address1').type('RedBull');
    cy.get('#country').type('Canada');
    cy.get('#state').type('Toronto');
    cy.get('#city').type('Toronto City');
    cy.get('#zipcode').type('1111');
    cy.get('#mobile_number').type('11111111');
    cy.get('[data-qa="create-account"]').should('be.visible').click();

    cy.get('[data-qa="continue-button"]').should('be.visible').click();

    cy.get('.fa.fa-shopping-cart').first().should('be.visible').click();

    cy.get('.btn.btn-default.check_out').should('be.visible').click();

    cy.get('.btn.btn-default.check_out').should('be.visible').click();

    cy.get('[name="name_on_card"]').type(name);
    cy.get('[name="card_number"]').type('1111222233334444');
    cy.get('[name="cvc"]').type('333');
    cy.get('[name="expiry_month"]').type('03');
    cy.get('[name="expiry_year"]').type('2033');
    cy.get('#submit').click();

    cy.get('[data-qa="continue-button"]').should('be.visible').click();

    cy.get('.fa.fa-trash-o').should('be.visible').click();

    cy.get('[data-qa="continue-button"]').should('be.visible').click();
});