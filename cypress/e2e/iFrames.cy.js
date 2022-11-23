import 'cypress-iframe'

describe("Handling iFrames", () => {

    it("Approach 1", () => {
        cy.visit("http://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr").its("0.contentDocument.body").should("be.visible").then(cy.wrap)
        iframe.clear().type("Welcome {cmd+a}" )
        cy.get("[aria-label='Bold']").click()
    })

    it("Approach 2. With custom command", () => {
        cy.visit("http://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}")
        cy.get("[aria-label='Bold']").click()
    })

    it("Approach 3. Using cypress-iframe plugin", () => {
        cy.visit("http://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr")
        cy.iframe("#mce_0_ifr").clear().type("Welcome {cmd+a}")
        cy.get("[aria-label='Bold']").click()
    })

})