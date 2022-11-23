import 'cypress-iframe'
require ("@4tw/cypress-drag-drop")

describe("Mouse Operations", () => {

    it("Mouseover", () => {
        cy.visit("https://demo.opencart.com/")
        cy.xpath("//a[normalize-space()='Mac (1)']").should("not.be.visible")
        cy.xpath("//a[normalize-space()='Desktops']").trigger("mouseover").click()
        cy.xpath("//a[normalize-space()='Mac (1)']").should("be.visible")
    })

    it("Right click", () => {
        //approach #1
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")
        cy.get('.context-menu-icon-copy > span').should("be.visible")
        //approach #2
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get('.context-menu-icon-copy > span').should("be.visible")
    })

    it("Double click", () => {
        //approach #1
        // cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        // cy.get('#accept-choices').click()
        // cy.frameLoaded("#iframeResult")
        // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
        // cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")

         //approach #2
         cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
         cy.get('#accept-choices').click()
         cy.frameLoaded("#iframeResult")
         cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
         cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")
    })

    it("Drag and Drop using plugin", () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box6").drag("#box106", {force:true})

    })

    it.only("Scrolling Page", () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get("img[alt='Flag of Russia']").scrollIntoView({duration:2000})
        cy.get("img[alt='Flag of Russia']").should("be.visible")
        
    })


})