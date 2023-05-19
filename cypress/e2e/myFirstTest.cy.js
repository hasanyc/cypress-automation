
describe ('login with', () => {

    it ('valid credentials', () => {
        cy.visit ('https://www.qa.taltektc.com')
        cy.title().should('eq', 'Sign In')
        cy.get('.ttc_email').type('QATest20032@taltektc.com')
        cy.get('.ttc_password').type('123456')
        cy.get('#login_form > input.my-login').click()

      //  cy.xpath("#login_form > input.my-login").click()
    })

})