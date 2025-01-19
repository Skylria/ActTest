class CartPage {
  messageShouldBeDisplayed(expectedMessage) {
    cy.get('h1').should('have.text', expectedMessage)
  }
}

export default new CartPage()
