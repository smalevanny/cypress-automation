describe('My First Tests', () => {

    it('Verify Title. Positive', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.title().should('eq', 'OrangeHRM')
    })

    it('Verify Title. Negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.title().should('eq', 'OrangeHRM1111')
      })

  })