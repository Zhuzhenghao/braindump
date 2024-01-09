describe('Event Test', () => {
    beforeEach(() => {
        cy.loginApi('admin', '123')
    })
    it('click', () => {
      cy.visit('/list')
      cy.get('input').type('1')
      cy.get('.search-btn').click()
      cy.get('.el-table__body-wrapper .el-table_1_column_1 .cell').should('have.length', 8)
    })
  })