export const registerUser = (user) => {
  return cy.request({
    method: 'POST',
    url: `${cy.config('APIBaseUrl')}/usuarios`,
    body: user,
  })
}
export const getUserById = (userId) => {
  return cy.request(
    'GET',
    `${cy.config('APIBaseUrl')}/usuarios/` + userId,
  )
}

export const registerProduct = (product) => {
  return cy.request({
    method: 'POST',
    url: `${cy.config('APIBaseUrl')}/produtos`,
    headers: {
      authorization: Cypress.env('token'),
    },
    body: product,
  })
}

export const getProductById = (productId) => {
  return cy.request({
    method: 'GET',
    url: `${cy.config('APIBaseUrl')}/produtos/` + productId,
    headers: {
      authorization: Cypress.env('token'),
    },
  })
}

export const getProducts = () => {
  return cy.request({
    method: 'GET',
    url: `${cy.config('APIBaseUrl')}/produtos`,
    headers: {
      authorization: Cypress.env('token'),
    },
  })
}

export const createCart = (products) => {
  return cy.request({
    method: 'POST',
    url: `${cy.config('APIBaseUrl')}/carrinhos`,
    headers: {
      authorization: Cypress.env('token'),
    },
    body: {
      produtos: products,
    },
  })
}

export const cancelPurchase = () => {
  return cy.request({
    method: 'DELETE',
    url: `${cy.config('APIBaseUrl')}/carrinhos/cancelar-compra`,
    headers: {
      authorization: Cypress.env('token'),
    },
  })
}

export const finishPurchase = () => {
  return cy.request({
    method: 'DELETE',
    url: `${cy.config('APIBaseUrl')}/carrinhos/concluir-compra`,
    headers: {
      authorization: Cypress.env('token'),
    },
  })
}
