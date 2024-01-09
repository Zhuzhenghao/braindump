// https://on.cypress.io/api

describe('Visit Test', () => {
  const url = '/home'
  beforeEach(() => {
    cy.login()
  })
  it('visit url', () => {
    cy.visit(url)
  })
  // it('visit local file', () => {
  //   cy.visit('index.html')
  // })

  // it('visit remote url', () => {
  //   cy.visit('www.baidu.com')
  // })
})
