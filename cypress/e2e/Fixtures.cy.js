describe("Fixtures usage examples", () => {

    // it.skip("Fixtures: direct access", () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/')

    //     cy.fixture("orangeHRM").then((data) => {
    //         cy.get("input[placeholder='Username']").type(data.username)
    //         cy.get("input[placeholder='Password']").type(data.password)
    //         cy.get("button[type='submit']").click()

    //         cy.xpath(`//span[normalize-space()='${data.expected}']`).click()
    //         cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", data.expected)

    //     })
    // })

    let userdata
    before(() => {
        cy.fixture("orangeHRM").then((data) => {
            userdata = data
        })
    })

    it("Fixtures: hook access for multiple it blocks", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()

        cy.xpath(`//span[normalize-space()='${userdata.expected}']`).click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.expected)
    })
})