import { SharedItems } from '../shared'

export const resetPasswordPage = {
  ...SharedItems,
  url: '/reset-password',

  open({ token }: { token: string }) {
    cy.visit(`${this.url}?token=${token}`)
    cy.get('form h1')
      .should('have.text', 'Resetar senha')
  },

  submit({
    newPassword,
    confirmation
  }: { newPassword: string, confirmation: string }
  ) {
    cy.get('input[placeholder="Nova senha"]')
      .type(newPassword)

    cy.get('input[placeholder="Confirmação da senha"]')
      .type(confirmation)

    cy.contains('button', 'Alterar senha')
      .click()
  }
}