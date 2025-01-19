class AdmHomePage {
  registerProduct({ name, price, description, quantity, image }) {
    cy.getBySelLike('cadastrarProdutos').click()
    cy.getBySelLike('nome').type(name)
    cy.getBySelLike('preco').type(price)
    cy.getBySelLike('descricao').type(description)
    cy.getBySelLike('quantity').type(quantity)
    cy.getBySelLike('imagem').attachFile(image)
    cy.getBySelLike('cadastarProdutos').click()
  }

  validateRegister(product) {
    cy.contains('td', product.name)
      .siblings()
      .contains(product.description)
      .siblings()
      .contains(product.price)
      .siblings()
      .contains(product.quantity)
  }
}

export default new AdmHomePage()
