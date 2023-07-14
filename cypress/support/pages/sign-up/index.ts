import { SharedItems } from '../shared'

export const signUpPage = {
  ...SharedItems,
  url: '/signup',

  assertIsSignUpPage() {
    cy.contains('button', 'Cadastrar')
      .should('be.visible')
  },

  submit({ email, name, password }: Application.User) {
    cy.visit(signUpPage.url)

    cy.get('input[placeholder="Nome completo"]').as('name')
    cy.get('input[placeholder*="email"]').as('email')
    cy.get('input[placeholder*="senha"]').as('password')
    name && cy.get('@name').type(name)
    email && cy.get('@email').type(email)
    password && cy.get('@password').type(password)
    cy.contains('button', 'Cadastrar')
      .should('be.visible')
      .click()
  },

  backToLogin() {
    cy.contains('a', 'Voltar para login')
      .click()
  },
}
