class SignUpPage {
  go() {
    cy.visit('/cadastrarusuarios')
  }

  fillSignUpForm(name, email, password, isAdmin = false) {
    cy.getBySelLike('nome').type(name)
    cy.getBySelLike('email').type(email)
    cy.getBySelLike('password').type(password)

    if (isAdmin) {
      cy.getBySelLike('checkbox').click()
    }
  }

  clickSignUpButton() {
    cy.getBySelLike('cadastrar').click()
  }

  alertContentShouldBe(expectedMessage) {
    cy.get('.alert-link').should('have.text', expectedMessage)
  }
}

export default new SignUpPage()
