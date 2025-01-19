class LoginPage {
  go() {
    cy.visit('/')
    cy.title().should('eq', 'Front - ServeRest')
  }

  clickLoginButton() {
    cy.getBySelLike('entrar').click()
  }

  clickSignUpLink() {
    cy.getBySelLike('cadastrar').click()
  }

  logoShouldBeVisible() {
    cy.get('#navbarTogglerDemo01 > img').should('be.visible')
  }
}

export default new LoginPage()
