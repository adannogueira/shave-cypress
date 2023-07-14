export const orderPage = {
  url: '/order',

  assureIsOrderPage() {
    cy.contains('h1', 'PEDIDO RECEBIDO')
      .should('be.visible')
  }
}