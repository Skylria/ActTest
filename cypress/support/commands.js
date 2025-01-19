// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getBySelLike', (selector, ...args) => {
  return cy.get(`[data-testid='${selector}']`, ...args)
})

Cypress.Commands.add('login', (isAdmin = 'false') => {
  const nome = `amb${Cypress._.random(1e9)}`
  const email = `${nome}@teste.com`
  const password = 'teste'
  cy.request({
    method: 'POST',
    url: `${cy.config('APIBaseUrl')}/usuarios`,
    body: {
      nome,
      email,
      password,
      administrador: isAdmin,
    },
  }).then(() => {
    const signinPath = '/login'

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== signinPath) {
        cy.visit(signinPath)
      }
    })

    cy.getBySelLike('email').type(email)
    cy.getBySelLike('senha').type(password)
    cy.getBySelLike('entrar').click()
  })
})

Cypress.Commands.add('loginApi', () => {
  const nome = `amb${Cypress._.random(1e9)}`
  const email = `${nome}@teste.com`
  const password = 'teste'
  cy.request({
    method: 'POST',
    url: `${cy.config('APIBaseUrl')}/usuarios`,
    body: {
      nome,
      email,
      password,
      administrador: 'true',
    },
  }).then(() => {
    cy.request({
      method: 'POST',
      url: `${cy.config('APIBaseUrl')}/login`,
      headers: { 'Content-Type': 'application/json' },
      body: {
        email,
        password,
      },
    }).then((response) => {
      Cypress.env('token', response.body.authorization)
    })
  })
})
