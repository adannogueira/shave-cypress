import { usersLoginFixture } from '../fixtures/usersLogin'
import { LoginPage } from '../support/pages/login'
import { ShaversPage } from '../support/pages/shavers'
import { faker } from '@faker-js/faker'

describe('Login', () => {
  const { email, name, password } = usersLoginFixture

  context('when form is submitted', () => {
    it('should login with correct email and password', () => {
      cy.createUser(usersLoginFixture)
      LoginPage.submit({ email, password })
      ShaversPage.header.assertUserIsLogged({ name })
    })

    context('with invalid data', () => {
      it('should not login with incorrect password', () => {
        const error = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
        LoginPage.submit({ email, password: faker.internet.password() })
        LoginPage.assertInvalidDataLoginError({ error })
      })
  
      it('should not login with unregistered email', () => {
        const error = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
        LoginPage.submit({ email: faker.internet.email(), password })
        LoginPage.assertInvalidDataLoginError({ error })
      })
  
      it('should not login when email is not informed', () => {
        const error = 'E-mail é obrigatório'
        LoginPage.submit({ password })
        LoginPage.assertAlertErrorMessage({ error })
      })
  
      it('should not login when password is not informed', () => {
        const error = 'Senha é obrigatória'
        LoginPage.submit({ email })
        LoginPage.assertAlertErrorMessage({ error })
      })
    })

    context('password is too short', () => {
      const passwords = Array.from(
        { length: 5 },
        (_, index) => faker.internet.password({ length: index + 1 })
      )
      const error = 'Pelo menos 6 caracteres'
      
      passwords.forEach(password => {
        it(`case: password has only ${password.length} digits`, () => {
          LoginPage.submit({ email, password })
          LoginPage.assertAlertErrorMessage({ error })
        })
      })
    })

    context('email format is invalid', () => {
      const emails = ['test-user2mail.com', 'test-user$mail.com', 'test-user@', 'test-user.mail.com', '@mail.com']
      const error = 'Informe um email válido'

      emails.forEach(email => {
        it(`case: ${email}`, () => {
          LoginPage.submit({ email, password })
          LoginPage.assertAlertErrorMessage({ error })
        })
      })      
    })
  })

})