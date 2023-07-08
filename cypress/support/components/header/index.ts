export class Header {
  static assertUserIsLogged({ name }: { name: string }) {
    cy.get('.logged-user div a')
        .should('be.visible')
        .should('have.text', `Olá, ${name}`)
  }
}