import { LoginPage } from '../support/pages/login'
import { ShaversPage } from '../support/pages/shavers'
import { faker } from '@faker-js/faker'

describe('Login', () => {
  context('when form is submitted', () => {
    const correctEmail = 'test-user@mail.com'
    const correctPassword = 't3st-pa$$'
    const correctName = 'Test'
    it('should login with correct email and password', () => {
      LoginPage.submit({ email: correctEmail, password: correctPassword })
      ShaversPage.header.assertUserIsLogged({ name: correctName })
    })

    context('with invalid data', () => {
      it('should not login with incorrect password', () => {
        const error = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
        LoginPage.submit({ email: correctEmail, password: faker.internet.password() })
        LoginPage.assertInvalidDataLoginError({ error })
      })
  
      it('should not login with unregistered email', () => {
        const error = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
        LoginPage.submit({ email: faker.internet.email(), password: correctPassword })
        LoginPage.assertInvalidDataLoginError({ error })
      })
  
      it('should not login when email is not informed', () => {
        const error = 'E-mail é obrigatório'
        LoginPage.submit({ password: correctPassword })
        LoginPage.assertAlertErrorMessage({ error })
      })
  
      it('should not login when password is not informed', () => {
        const error = 'Senha é obrigatória'
        LoginPage.submit({ email: correctEmail })
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
          LoginPage.submit({ email: correctEmail, password })
          LoginPage.assertAlertErrorMessage({ error })
        })
      })
    })

    context('email format is invalid', () => {
      const emails = ['test-user2mail.com', 'test-user$mail.com', 'test-user@', 'test-user.mail.com', '@mail.com']
      const error = 'Informe um email válido'

      emails.forEach(email => {
        it(`case: ${email}`, () => {
          LoginPage.submit({ email, password: correctPassword })
          LoginPage.assertAlertErrorMessage({ error })
        })
      })      
    })
  })

})