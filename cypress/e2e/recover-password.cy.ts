import { LoginPage } from '../support/pages/login'
import { ForgotPasswordPage } from '../support/pages/forgot-password'
import { usersLoginFixture } from '../fixtures/usersLogin'
import { ResetPasswordPage } from '../support/pages/reset-password'
import { ShaversPage } from '../support/pages/shavers'
import { faker } from '@faker-js/faker'

describe('Recover Password', () => {
  const { email, name } = usersLoginFixture

  it('should show recovery screen when "Esqueci minha senha" is clicked', () => {
    LoginPage.forgotPassword()
    ForgotPasswordPage.assertIsRecoveryPage()
  })

  context('when form is submitted', () => {
    beforeEach(() => cy.createUser(usersLoginFixture))

    it('should show success notice with correct email', () => {
      const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
      ForgotPasswordPage.open()
      ForgotPasswordPage.submit({ email })
      ForgotPasswordPage.assertNotice({ message })
    })

    it('should be able to register a new password', () => {
      const message = 'Agora você já pode logar com a sua nova senha secreta.'
      const newPassword = faker.internet.password()
      ForgotPasswordPage.open()
      ForgotPasswordPage.submit({ email })
      cy.getUserToken(usersLoginFixture.email)
      cy.get<string>('@userToken').then((token) => ResetPasswordPage.open({ token }))
      ResetPasswordPage.submit({ newPassword, confirmation: newPassword })
      ResetPasswordPage.assertNotice({ message })
      LoginPage.submit({ email, password: newPassword })
      ShaversPage.header.assertUserIsLogged({ name })
    })
  })
})
