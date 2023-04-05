describe('Register to Book Store', () => {
    it('Fill in the credintals', () => {
        cy.visit('https://demoqa.com/register');
        cy.get('#firstname')
            .type('Anastasia');
        cy.get('#lastname')
            .type('Belova');
        cy.get('#userName')
            .type('qaness');
        cy.get('#password')
            .type('12345');
    });

})