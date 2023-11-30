/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.visit('/login')
    cy.get(`input[name="name"]`).type('admin')
    cy.get(`input[name="name"]`).should('have.value', 'admin')
    cy.get(`input[name="password"]`).type('123')
    cy.get(`input[name="password"]`).should('have.value', '123')
    cy.get('button').click()
})

Cypress.Commands.add('loginApi', (name, password) => {
    const user = {
        name,
        password
    }
    // create the user first in the DB
    cy.request({
        url: '/api/login', // assuming you've exposed a seeds route
        method: 'POST',
        body: user,
    })
        .its('body')
        .then((body) => {
            if (body.code === 0) {
                window.localStorage.setItem('isAuthenticated', 'true')
            } else {
                window.localStorage.setItem('isAuthenticated', 'false')
            }

        })
})

declare global {
    namespace Cypress {
        interface Chainable {
            login(): Chainable<void>
            loginApi(name: string, password: string): Chainable<void>
        }
    }
}

export { }
