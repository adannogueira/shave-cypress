import { customerFixture, serviceFixture, shaverFixture } from '../fixtures/orderPlacement'
import { catalogPage } from '../support/pages/views/catalog'
import { orderPage } from '../support/pages/views/order'
import { shaversPage } from '../support/pages/views/shavers'

describe('Orders', () => {
  context('given user is logged in', () => {
    before(() => {
      cy.createUser(customerFixture)
      cy.apiLogin(customerFixture)
      shaversPage.open()
      shaversPage.header.assertUserIsLogged(customerFixture)
    })

    it('should be able to order a haircut', () => {
      const { name } = shaverFixture
      shaversPage.pickShaver({ name })
      catalogPage.assureIsShaverCatalogPage({ shaverName: name })
      catalogPage.selectService({ service: serviceFixture.description })
      catalogPage.assureServiceIsSelected({ service: serviceFixture.description })
      catalogPage.confirmService()
      orderPage.assureIsOrderPage()
    })
  })
})
