
const {faker} = require('@faker-js/faker');
const fname = faker.person.firstName().replace(/[`~!@#$%^*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
const lname = faker.person.firstName().replace(/[`~!@#$%^*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
const randomNum = faker.number.bigInt({ min: 10000n, max: 1000000 })
const randomEamil = fname+"."+lname+randomNum+'@taltekc.com'

describe ('Brand new user', () => {
    it ('should be able to create a new account with valid infor', () => {
      cy.visit ('https://www.qa.taltektc.com')
      cy.xpath ('//*[@id="wrap"]/div/div/div/a').click()
      cy.get("[name='firstName']").type(fname)
      cy.get("[name='lastName']").type(lname)
      cy.get("[name='email']").type(randomEamil.toLowerCase())
      cy.get('select[name="month"]').select('Nov')
  })

})