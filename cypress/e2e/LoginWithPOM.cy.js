import Login from "../PageObjects/Login2"

describe('POM', () => {

    //Straightforward approach
    it('Login without using POM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', 'Dashboard')
    })

    //POM approach
    it('Login using POM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        const login = new Login()
        login.setUserName("Admin")
        login.setPassword("admin123")
        login.submit()
        login.verify()
    })

    //POM approach with fixtures
    it('Login using POM with fixtures', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('orangeHRM').then((data) => {
            const login = new Login()
            login.setUserName(data.username)
            login.setPassword(data.password)
            login.submit()
            login.verify()
        })
    })

})