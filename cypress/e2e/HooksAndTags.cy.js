//Hooks
//before
//after
//beforeEach
//afterEach

//Tags
//it.skip
//it.only
describe("Hooks and Tags", () => {

    before(()=>{
        cy.log("******* Launch App *******")
    })

    after(()=>{
        cy.log("******* Close App *******")
    })

    beforeEach(()=>{
        cy.log("******* Login *******")
    })

    afterEach(()=>{
        cy.log("******* Logout *******")
    })

    it("Search", () => {
        cy.log("******* searching *******")
    })

    it("Advanced Search", () => {
        cy.log("******* advanced searching *******")
    })

    it("Listing Products", () => {
        cy.log("******* listing products *******")
    })
})