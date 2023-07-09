import { User } from '../../../types/user'

export const createUser = (user: User) => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('API_HELPER_URL')}/user/${user.email}`
  }).then(response => expect(response.status).to.eql(204))

  cy.request({
    method: 'POST',
    url: `${Cypress.env('API_HELPER_URL')}/users`,
    body: user
  }).then(response => expect(response.status).to.eql(201))
}