export class CatalogPage {
  static url = '/catalog'

  static assureIsShaverCatalogPage({ shaverName }: { shaverName: string }) {
    cy.contains('.subtitle h1', 'Escolha o serviço')
    cy.get('.content h3')
    .contains(shaverName)
  }

  static selectService({ service }: { service: string }) {
    cy.contains('.catalog-item h3', service)
      .click()
  }

  static assureServiceIsSelected({ service }: { service: string }) {
    cy.contains('h2.swal2-title', service)
      .should('be.visible')
  }

  static confirmService() {
    cy.get('button.swal2-confirm')
      .should('be.visible')
      .click()
  }
}