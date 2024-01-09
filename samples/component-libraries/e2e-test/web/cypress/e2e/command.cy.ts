describe('Command Test', () => {
    it('login test', () => {
     cy.login()
    })
    it('loginApi test', () => {
        cy.loginApi('admin', '123')
        cy.visit('/about')
      })
  })