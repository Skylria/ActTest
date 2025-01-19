import signup from '../pages/SignupPage'
import login from '../pages/LoginPage'

describe('Signup and sign in', () => {
  it('User should create account', function () {
    login.go()
    login.clickSignUpLink()
    signup.fillSignUpForm(
      'ambtest',
      `amb${Cypress._.random(1e3)}@test.com`,
      'teste',
    )
    signup.clickSignUpButton()
    signup.alertContentShouldBe('Cadastro realizado com sucesso')
  })

  it('User should make login', function () {
    cy.login()
    login.logoShouldBeVisible()
  })
})
