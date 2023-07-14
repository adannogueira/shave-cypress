import { SharedItems } from '../shared'

export const forgotPasswordPage = {
  ...SharedItems,
  url: '/forgot-password',

  open() {
    cy.visit(forgotPasswordPage.url)
    cy.get('form h1')
      .should('have.text', 'Recuperar senha')
  },

  submit({ email }: { email: string }) {
    cy.get('input[placeholder="E-mail"]')
      .type(email)
    cy.contains('button', 'Recuperar')
      .click()
  },

  assertIsRecoveryPage() {
    cy.contains('button', 'Recuperar')
      .should('be.visible')
  }
}
