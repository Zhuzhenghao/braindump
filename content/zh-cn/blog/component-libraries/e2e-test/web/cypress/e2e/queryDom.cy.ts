describe('Visit query dom', () => {
    beforeEach(() => {
        cy.loginApi('admin', '123')
    })
    it('get dom', () => {
      cy.visit('/list')
      cy.get('.search-btn').should('not.be.disabled')
    })
  })
  