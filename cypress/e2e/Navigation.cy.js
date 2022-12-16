describe('Browser Navigation', () => {

    it('Navigation', () => {
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store')
        cy.xpath("//a[normalize-space()='Cameras']").click()
        cy.title().should('eq', 'Cameras')

        //navigation
        cy.go('back')
        cy.title().should('eq', 'Your Store')
        cy.go('forward')
        cy.title().should('eq', 'Cameras')
        cy.go(-1)
        cy.title().should('eq', 'Your Store')
        cy.go(1)
        cy.title().should('eq', 'Cameras')
        cy.reload()
        cy.title().should('eq', 'Cameras')
    })

})