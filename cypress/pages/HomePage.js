class HomePage {
  searchProduct(product) {
    cy.getBySelLike('pesquisar').type(product)
    cy.getBySelLike('botaoPesquisar').click()
  }

  searchFirstProduct() {
    cy.get('.card:nth-child(1) .card-title').then((container) => {
      this.searchProduct(container.text())
    })
  }

  clickDetailsButton() {
    cy.get('.card-link').click()
  }

  productShouldExist(product) {
    cy.get('.card-title').should('have.text', product)
  }
}

export default new HomePage()
