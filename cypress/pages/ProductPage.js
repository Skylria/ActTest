class ProductPage {
  clickAddToListButton() {
    cy.getBySelLike('adicionarNaLista').click()
  }
}

export default new ProductPage()
