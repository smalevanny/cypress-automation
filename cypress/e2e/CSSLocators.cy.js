describe("CSS Locators usage examples", () => {
    it("Search t-shirts and check search results title", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.get("#search_query_top").type("T-Shirts")//id. Tag is optional
        cy.get("[name='submit_search']").click()    //attribute. Tag is optional
        cy.get(".lighter").contains("T-Shirts")     //class. Tag is optional. Another option = .<class_name>[<attribute_name>='<attribute_value>']
    })
})