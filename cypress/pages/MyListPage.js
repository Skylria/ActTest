class MyListPage {
  clickAddToCartButton() {
    cy.getBySelLike('adicionar carrinho').click()
  }

  productShouldBeOnList() {
    cy.getBySelLike('shopping-cart-product-name').should('exist')
  }
}

export default new MyListPage()
