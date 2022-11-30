describe("DDT", () => {

    it("Data Drivet Test", () => {
        cy.fixture("orangeHRM2").then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()  

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    cy.xpath(`//span[normalize-space()='${userdata.expected}']`).click()
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.expected)
                    cy.get(".oxd-userdropdown-name").click()
                    cy.xpath("//a[normalize-space()='Logout']").click()
                }
                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", userdata.expected)
                }
            })
        })

    })
})