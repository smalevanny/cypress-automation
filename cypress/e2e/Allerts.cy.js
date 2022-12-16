describe("Alerts", () => {

    //1) JS Alert: text + OK button
    it("JS Alert", () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        cy.on("window:alert", (t) => {
            expect(t).to.contains("I am a JS Alert")
        })
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    //2) JS Confirm Alert: text + OK + Cancel button
    it("JS Confirm Alert Ok", () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.get("#result").should("have.text", "You clicked: Ok")
    })

    it("JS Confirm Alert Cancel", () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.on("window:confirm", () => false)
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })

    //3) JS Prompt Alert: text + text box + OK button
    it("JS Prompt Alert", () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })
        //default OK
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should("have.text", "You entered: welcome")
    })

    //4) Autenticated Alert
    it("JS Autenticated Alert", () => {
        //1)
        cy.visit("http://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password: "admin"}})
        //2)
        //cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain", "Congratulations")
    })

})