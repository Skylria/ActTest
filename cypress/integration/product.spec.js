import home from '../pages/HomePage'
import product from '../pages/ProductPage'
import myList from '../pages/MyListPage'
import cart from '../pages/CartPage'

describe('Products Tests', () => {
  before(() => {
    cy.login()
  })

  it('User should buy a product', function () {
    home.searchFirstProduct()
    home.clickDetailsButton()
    product.clickAddToListButton()
    myList.productShouldBeOnList()
    myList.clickAddToCartButton()
    cart.messageShouldBeDisplayed('Em construção aguarde')
  })
})
