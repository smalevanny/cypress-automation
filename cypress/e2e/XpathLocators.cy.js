describe("Xpath Locators usage examples", () => {

    it("Find no of products", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.xpath("//ul[@id='homefeatured']/li").should("have.length", 7)
    })

    it("Find no of products with chained xpath", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.xpath("//ul[@id='homefeatured']").xpath("./li").should("have.length", 7)//chained xpath
    })
})