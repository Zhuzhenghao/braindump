// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get(`input[name="name"]`).type('admin')
    cy.get(`input[name="name"]`).should('have.value', 'admin')
    cy.get(`input[name="password"]`).type('123')
    cy.get(`input[name="password"]`).should('have.value', '123')
    cy.get('button').click()

  })
  // it('only input name', () => {
  //   cy.visit('/login')
  //   cy.get(`input[name="name"]`).type('admin')
  //   // cy.get(`input[name="password"]`).type('123')
  //   cy.get('button').click()
  //   cy.get('.el-form-item__error').should('have.text', '请输入密码')
  // })

  // it('only input password', () => {
  //   cy.visit('/login')
  //   cy.get(`input[name="password"]`).type('123')
  //   // cy.get(`input[name="password"]`).type('123')
  //   cy.get('button').click()
  //   cy.get('.el-form-item__error').should('have.text', '请输入账号')
  // })

  // it('test network request', () => {
  //   cy.visit('/')
  //   cy.get(`input[name="name"]`).type('admin')
  //   cy.get(`input[name="name"]`).should('have.value', 'admin')
  //   cy.get(`input[name="password"]`).type('123')
  //   cy.get(`input[name="password"]`).should('have.value', '123')
  //   cy.get('button').click()

  // })
})
