import admHome from '../pages/AdmHomePage'

const { random } = Cypress._

describe('Admin Routines', () => {
  before(() => {
    cy.login('true')
  })

  it('Register a product', function () {
    const productName = `test product ${random(1e9)}`

    const product = {
      name: productName,
      price: random(999),
      description: `${productName} - description`,
      quantity: random(999),
      image: 'images/image.jpg',
    }

    admHome.registerProduct(product)
    admHome.validateRegister(product)
  })
})
