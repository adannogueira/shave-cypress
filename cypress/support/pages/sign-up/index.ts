export class SignUpPage {
  static url = '/signup'

  static open() {
    cy.visit(SignUpPage.url)
  }

  static assertIsSignUpPage() {
    cy.contains('button', 'Cadastrar')
      .should('be.visible')
  }

  static submit({ email, name, password }: SignUpData) {
    cy.visit(SignUpPage.url)

    cy.get('input[placeholder="Nome completo"]').as('name')
    cy.get('input[placeholder*="email"]').as('email')
    cy.get('input[placeholder*="senha"]').as('password')
    name && cy.get('@name').type(name)
    email && cy.get('@email').type(email)
    password && cy.get('@password').type(password)
    cy.contains('button', 'Cadastrar')
      .should('be.visible')
      .click()
  }

  static assertNotice({ message }: { message: string }) {
    cy.get('.notice p', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', message)
  }

  static assertAlertErrorMessage({ error }: { error: string }) {
    cy.contains('.alert-error', error)
      .should('be.visible')
  }

  static backToLogin() {
    cy.contains('a', 'Voltar para login')
      .click()
  }
}

type SignUpData = {
  email: string
  name: string
  password: string
}