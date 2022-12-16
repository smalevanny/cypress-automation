class Login {

    tbUserName  = "input[placeholder='Username']"
    tbPassword  = "input[placeholder='Password']"
    bSubmit     = "button[type='submit']"
    lDashboard  = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

    setUserName(username) {
        cy.get(this.tbUserName).type(username)
    }

    setPassword(password) {
        cy.get(this.tbPassword).type(password)
    }

    submit() {
        cy.get(this.bSubmit).click()
    }

    verify() {
        cy.get(this.lDashboard).should('have.text', 'Dashboard')
    }

}

export default Login