export class LoginPage {
  static url = '/'

  static submit({ email = null, password = null }: LoginParams = {}) {
    cy.visit(LoginPage.url)
    cy.get('input[placeholder$=email]').as('email')
    cy.get('input[placeholder*=senha]').as('password')
    email && cy.get('@email').type(email)
    password && cy.get('@password').type(password)
    cy.contains('button', 'Entrar').click()
  }

  static assertInvalidDataLoginError({ error }: { error: string }) {
    cy.get('.notice-container')
        .should('be.visible')
        .find('.error p')
        .should('have.text', error)
  }

  static assertAlertErrorMessage({ error }: { error: string }) {
    cy.contains('.alert-error', error)
      .should('be.visible')
  }

  static forgotPassword() {
    cy.visit(LoginPage.url)
    cy.get('.forgot-password').click()
  }
}

export type LoginParams = {
  email?: string;
  password?: string;
}