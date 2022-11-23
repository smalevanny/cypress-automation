describe("Handle Child tabs", () => {

    it("Approach 1", () => {
        cy.visit("http://the-internet.herokuapp.com/windows")
        cy.get(".example >a").invoke("removeAttr", "target").click();//removes 'target' attribute which prevent opening new browser tab
        cy.url().should("include", "http://the-internet.herokuapp.com/windows/new")
        cy.wait(1000)
        cy.go("back")
    })

    it.only("Approach 2", () => {
        cy.visit("http://the-internet.herokuapp.com/windows")
        cy.get(".example >a").then((e) => {
            let url = e.prop('href')
            cy.visit(url)
        })
        cy.url().should("include", "http://the-internet.herokuapp.com/windows/new")
        cy.wait(1000)
        cy.go("back")
    })
})