//click link using label
//overwrite existing contains() command
//reusable custome command

describe('Custom commands', () => {

    it('Handling links', () => {
        cy.visit("https://demo.nopcommerce.com/")
        //standard command
        //cy.xpath("//a[normalize-space()='Apple MacBook Pro 13-inch']").click()
        //custom command
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')

    })

    it('Overwrite existing command', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('APPLE MACBOOK Pro 13-inch')//contains() which used in clickLink is case insensitive
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it('Login command', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('log in')
        cy.login("testing@gmail.com", "test123")
        cy.get('.ico-account').should('have.text', 'My account')
    })
})