
describe ('User should be able to', () => {

    it ('Login with valid credentials', () => {
        cy.visit ('https://www.qa.taltektc.com')
        cy.title().should('eq', 'Sign In')
        cy.get('.ttc_email').type('info@taltektc.com')
        cy.get('.ttc_password').type('123456')
        cy.get('#login_form > input.my-login').click()
        cy.xpath("//*[@id='profile_form']/legend", {timeout: 60000})
        .should('contain', "Welcome to TalentTek")
        .and('not.contain', 'Welcome to TALTEKTC')
        .and('have.text', 'Welcome to TalentTek')
        cy.get("[name='email']").should('have.value', 'info@taltektc.com')
    })

})