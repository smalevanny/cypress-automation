describe("Hanling tables", (() => {
    beforeEach("Login and opem Customers table", () => {
        //login
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        //close pop-up
        cy.get(".btn-close").click()
        //open Customers table
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()



    })

    it("Check number of rows and columns", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length", "10")
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length", "7")
    })

    it("Check cell data from specific row and columns", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(6)>td:nth-child(3)").contains("rs@yopmail.com")
    })

    it("Read all the rows and columns data in the first page", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each((row, index, rows) => {
            cy.wrap(row).within(() => {
                cy.get("td").each((column, index, columns) => {
                    cy.log(column.text())
                })
            })
        })

    })

    it("Pagination", () => {
        //find total number of pages
        let pagesNumber
        cy.get(".col-sm-6.text-end").then((e) => {
            let text = e.text() //Showing 1 to 10 of 7310 (731 Pages)
            pagesNumber = text.substring(text.indexOf("(") + 1, text.indexOf("Pages") - 1)
            cy.log("Total number of pages = " + pagesNumber)
            
        })

        let pagesToCheck = 5
        for(let p=1; p <= pagesToCheck; p++) {
            cy.log("Active page is " + p)
            if (p > 1) {
                cy.xpath("//a[normalize-space()='" + p + "']").click()
            }
            cy.wait(1000)
            cy.get("table[class='table table-bordered table-hover']>tbody>tr").each((row, index, rows) => {
                cy.wrap(row).within(() => {
                    cy.get("td:nth-child(3)").then((e) => {
                        cy.log(e.text()) //Email
                    })
                })
            })
        }

    })

}))