import { SharedItems } from '../../shared'

export const loginPage = {
  ...SharedItems,
  url: '/',

  submit({ email = null, password = null }: LoginParams = {}) {
    cy.visit(this.url)
    cy.get('input[placeholder$=email]').as('email')
    cy.get('input[placeholder*=senha]').as('password')
    email && cy.get('@email').type(email)
    password && cy.get('@password').type(password)
    cy.contains('button', 'Entrar').click()
  },

  assertInvalidDataLoginError({ error }: { error: string }) {
    cy.get('.notice-container')
        .should('be.visible')
        .find('.error p')
        .should('have.text', error)
  },

  assertIsLoginPage() {
    cy.contains('h1', 'Faça seu login')
      .should('be.visible')
  },

  forgotPassword() {
    cy.visit(this.url)
    cy.get('.forgot-password').click()
  },

  signUp() {
    cy.visit(this.url)
    cy.get('.signup')
      .click()
  }
}

export type LoginParams = {
  email?: string;
  password?: string;
}
