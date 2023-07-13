import { customerFixture, serviceFixture, shaverFixture } from '../fixtures/orderPlacement'
import { CatalogPage } from '../support/pages/catalog'
import { OrderPage } from '../support/pages/order'
import { ShaversPage } from '../support/pages/shavers'

describe('Orders', () => {
  context('given user is logged in', () => {
    before(() => {
      cy.createUser(customerFixture)
      cy.apiLogin(customerFixture)
      ShaversPage.open()
      ShaversPage.header.assertUserIsLogged(customerFixture)
    })

    it('should be able to order a haircut', () => {
      const { name } = shaverFixture
      ShaversPage.pickShaver({ name })
      CatalogPage.assureIsShaverCatalogPage({ shaverName: name })
      CatalogPage.selectService({ service: serviceFixture.description })
      CatalogPage.assureServiceIsSelected({ service: serviceFixture.description })
      CatalogPage.confirmService()
      OrderPage.assureIsOrderPage()
    })
  })
})
