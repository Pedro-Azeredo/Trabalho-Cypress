Cypress.Commands.add('review', (name = 'Max') => {

    cy.get('.material-icons.card_travel').click()

    cy.get('.title.text-center')
    .should('have.text', 'All Products')
    .and('be.visible');

    cy.contains('a', 'View Product').click();

    cy.contains('a', 'Write Your Review')
    .should('be.visible')

    cy.get('#name').type('Max Verstappen')
    cy.get('#email').type('maxverstappen@f1.com')
    cy.get('#review').type('Max Verstappen is a Belgian-born Dutch racing driver who has won four consecutive Formula One World Championships in 2021, 2022, 2023, and 2024. Son of former F1 driver Jos Verstappen and kart racer Sophie Kumpen, he began his F1 career in 2015, becoming the youngest driver to compete in the sport at just 17 years old.')

    cy.get('#button-review').click()

})
