export const getUserToken = (email: string) => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('API_HELPER_URL')}/user-token/${email}`
  }).then(response => {
    expect(response.status).to.eql(200)
    cy.wrap(response.body.token).as('userToken')
  })
}