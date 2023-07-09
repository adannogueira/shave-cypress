import { User } from '../../../types/user'

export const createUser = (user: User) => {
  cy.task('removeUser', user.email)
  cy.request({
    method: 'POST',
    url: `${Cypress.env('API_URL')}/users`,
    body: user
  }).then(response => expect(response.status).to.eql(201))
}