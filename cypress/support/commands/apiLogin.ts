
export const apiLogin = ({ email, password }: Application.User) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('API_URL')}/sessions`,
    body: { email, password }
  }).then(response => {
    expect(response.status).to.eql(200)
    const { user, token } = response.body
    window.localStorage.setItem('@ShaveXP:user', JSON.stringify(user))
    window.localStorage.setItem('@ShaveXP:token', token)
  })
}
