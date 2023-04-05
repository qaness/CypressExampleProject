describe('Log in to the demoqa.com', () => {

    it('Fill in the credintals', () => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName')
            .type('test');
        cy.get('#password')
            .type('Test-12345*@');
        cy.get('#login')
            .click()
    })
})