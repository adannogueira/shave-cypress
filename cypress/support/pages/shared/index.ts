export const SharedItems = {
  open() {
    cy.visit(this.url)
  },

  assertAlertErrorMessage({ error }: { error: string }) {
    cy.contains('.alert-error', error)
      .should('be.visible')
  },

  assertNotice({ message }: { message: string }) {
    cy.get('.notice p', { timeout: 10000 })
      .should('be.visible')
      .should('have.text', message)
  }
}
