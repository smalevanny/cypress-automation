describe("Checking UI Elements", () => {

    it("Checking Radio Buttons", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility check
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
    })

    it("Checking Check Boxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility check
        cy.get("input#monday").should('be.visible')

        //selecting check boxes
        cy.get("input#monday").check().should('be.checked')

        //unselecting check boxes
        cy.get("input#monday").uncheck().should('not.be.checked')

        //selecting all the check boxes
        cy.get("input.form-check-input[type$='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type$='checkbox']").uncheck().should('not.be.checked')

        //selecting first and last check boxes
        cy.get("input.form-check-input[type$='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type$='checkbox']").last().check().should('be.checked')
    })
})