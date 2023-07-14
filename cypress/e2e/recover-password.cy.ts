import { loginPage } from '../support/pages/views/login'
import { forgotPasswordPage } from '../support/pages/views/forgot-password'
import { usersLoginFixture } from '../fixtures/usersLogin'
import { resetPasswordPage } from '../support/pages/views/reset-password'
import { shaversPage } from '../support/pages/views/shavers'
import { faker } from '@faker-js/faker'

describe('Recover Password', () => {
  const { email, name } = usersLoginFixture

  it('should show recovery screen when "Esqueci minha senha" is clicked', () => {
    loginPage.forgotPassword()
    forgotPasswordPage.assertIsRecoveryPage()
  })

  context('when form is submitted', () => {
    beforeEach(() => cy.createUser(usersLoginFixture))

    it('should show success notice with correct email', () => {
      const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
      forgotPasswordPage.open()
      forgotPasswordPage.submit({ email })
      forgotPasswordPage.assertNotice({ message })
    })

    it('should be able to register a new password', () => {
      const message = 'Agora você já pode logar com a sua nova senha secreta.'
      const newPassword = faker.internet.password()
      forgotPasswordPage.open()
      forgotPasswordPage.submit({ email })
      cy.getUserToken(usersLoginFixture.email)
      cy.get<string>('@userToken').then((token) => resetPasswordPage.open({ token }))
      resetPasswordPage.submit({ newPassword, confirmation: newPassword })
      resetPasswordPage.assertNotice({ message })
      loginPage.submit({ email, password: newPassword })
      shaversPage.header.assertUserIsLogged({ name })
    })
  })
})
