export class ForgotPasswordPage {
  static url = '/forgot-password'

  static open() {
    cy.visit(ForgotPasswordPage.url)
    cy.get('form h1')
      .should('have.text', 'Recuperar senha')
  }

  static submit({ email }: { email: string }) {
    cy.get('input[placeholder="E-mail"]')
      .type(email)
    cy.contains('button', 'Recuperar')
      .click()
  }

  static assertIsRecoveryPage() {
    cy.contains('button', 'Recuperar')
      .should('be.visible')
  }

  static assertNotice({ message }: { message: string }) {
    cy.get('.notice p', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', message)
  }
}