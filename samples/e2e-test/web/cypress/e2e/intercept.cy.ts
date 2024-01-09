

describe('Event Test', () => {
    beforeEach(() => {
        cy.loginApi('admin', '123')
    })
    it('click', () => {
      cy.visit('/list')
      cy.intercept('POST', '/api/getList', {
       fixture: 'list.json'
      })
    })
  })