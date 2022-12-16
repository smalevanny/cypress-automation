describe('Capturing Screenshots and Videos', () => {

    it('Screenshots and Videos', () => {
        cy.visit("https://demo.opencart.com/")

        //intentional capturing
        // cy.screenshot('homepage')
        // cy.get("img[title='Your Store']").screenshot('logo')

        //Cypress automaticaly capturing of screenshots and videos on failures in cmdline or CI mode
        cy.xpath("//a[normalize-space()='Cameras']").click()
        cy.title().should('eq', 'Laptops')

    })

})