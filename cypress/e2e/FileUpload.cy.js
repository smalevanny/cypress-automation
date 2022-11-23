import "cypress-file-upload"

describe("File Upload", () => {

    it("Single File Upload", () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("test1.pdf")
        cy.get("#file-submit").click()
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    })

    it("File Upload: Rename", () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath: "test1.pdf", fileName: "myfile.pdf"})
        cy.get("#file-submit").click()
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    })

    it("File Upload: Drag and Drop", () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("test1.pdf", {subjectType: "drag-n-drop"})
        cy.get(".dz-preview.dz-file-preview.dz-processing.dz-success.dz-complete").contains("test1.pdf")
    })

    it("Multiple Files Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["test1.pdf", "test2.pdf"])
        cy.get('#fileList').contains("test1.pdf")
        cy.get('#fileList').contains("test2.pdf")
    })

    it.only("File Upload: Shadow Dom", () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input", {includeShadowDom: true}).attachFile("test1.pdf")
        cy.get(".smart-item-name", {includeShadowDom: true}).contains("test1.pdf")
    })
})