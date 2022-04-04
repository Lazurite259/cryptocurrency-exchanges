describe('The Home Page', () => {
    before(() => {
        cy.exec('npm start')
    })

    it('successfully loads', () => {
        cy.visit('/');

        // test if the list can click
        cy.get('img:first').click();

        cy.visit('/binance');

        // test if the back-to-main-page button is working right
        cy.get('.btn').click()

        cy.visit('/');

        cy.get('img:last').click();

        cy.visit('/bitmart');
    });
});