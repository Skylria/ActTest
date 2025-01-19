import {
  registerUser,
  getUserById,
  registerProduct,
  getProductById,
  getProducts,
  createCart,
  cancelPurchase,
  finishPurchase,
} from '../../support/utils'

describe('HTTP Requests', () => {
  let authToken = null

  before('get access token', () => {
    cy.loginApi()
  })

  context('POST /usuarios', function () {
    it('Register User', () => {
      const user = {
        nome: `testeAPI${Cypress._.random(1e9)}`,
        email: `testeAPI@teste${Cypress._.random(1e9)}.com`,
        password: 'teste',
        administrador: 'true',
      }
      registerUser(user)
        .then((response) => {
          expect(response.body.message).to.eq(
            'Cadastro realizado com sucesso',
          )
          return response.body._id
        })
        .then((userId) => {
          getUserById(userId).then((response) => {
            expect(response.body.nome).to.eq(user.nome)
            expect(response.body.email).to.eq(user.email)
            expect(response.body.password).to.eq(user.password)
          })
        })
    })
  })

  context('POST /produtos', function () {
    it('Add product', () => {
      const product = {
        nome: `random${Cypress._.random(1e9)}`,
        preco: Cypress._.random(1e9),
        descricao: 'random product',
        quantidade: Cypress._.random(1e5),
      }

      registerProduct(product)
        .then((response) => {
          expect(response.body.message).to.eq(
            'Cadastro realizado com sucesso',
          )
          return response.body._id
        })
        .then((productId) => {
          getProductById(productId).then((response) => {
            expect(response.body.nome).to.eq(product.nome)
            expect(response.body.preco).to.eq(product.preco)
            expect(response.body.descricao).to.eq(product.descricao)
          })
        })
    })
  })

  context('POST /carrinhos', function () {
    it('Register cart and delete it', () => {
      cancelPurchase()
      getProducts()
        .then((response) => {
          const firstProduct = response.body.produtos[0]
          console.log(firstProduct)
          return firstProduct
        })
        .then((product) => {
          createCart([{ idProduto: product._id, quantidade: 1 }])
            .then((response) => {
              console.log(response)
            })
            .then(() => {
              finishPurchase().its('status').should('eq', 200)
            })
        })
    })
  })
})
