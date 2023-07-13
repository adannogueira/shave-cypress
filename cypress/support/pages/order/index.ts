export class OrderPage {
  static url = '/order'

  static assureIsOrderPage() {
    cy.contains('h1', 'PEDIDO RECEBIDO')
      .should('be.visible')
  }
}