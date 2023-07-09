export class ResetPasswordPage {
  static url = '/reset-password'

  static open({ token }: { token: string }) {
    cy.visit(`${ResetPasswordPage.url}?token=${token}`)
    cy.get('form h1')
      .should('have.text', 'Resetar senha')
  }

  static submit({
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

  static assertNotice({ message }: { message: string }) {
    cy.get('.notice p', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', message)
  }
}