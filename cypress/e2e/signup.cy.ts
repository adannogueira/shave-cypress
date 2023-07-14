import { loginPage } from '../support/pages/login'
import { usersLoginFixture } from '../fixtures/usersLogin'
import { faker } from '@faker-js/faker'
import { signUpPage } from '../support/pages/sign-up'

describe('SignUp', () => {
  const { email, name, password } = usersLoginFixture

  it('should show sign up screen when "Criar conta" is clicked', () => {
    loginPage.signUp()
    signUpPage.assertIsSignUpPage()
  })

  context('when form is submitted', () => {
    it('should create a new account', () => {
      const message = 'Boas vindas, faça login para solicitar serviços!'
      signUpPage.submit({ email, name, password })
      signUpPage.assertNotice({ message })
    })

    it('should not create a new account when email is already registered', () => {
      cy.createUser(usersLoginFixture)
      const message = 'Oops! E-mail já cadastrado.'
      signUpPage.submit({ email, name, password })
      signUpPage.assertNotice({ message })
    })

    context('and there are blank fields', () => {
      const fields = [
        {
          field: 'name',
          message: 'Nome é obrigatório'
        },
        {
          field: 'email',
          message: 'E-mail é obrigatório'
        },
        {
          field: 'password',
          message: 'Senha é obrigatória'
        }
      ]

      fields.forEach(({ field, message }) => {
        it(`should not create a new account when ${field} is empty`, () => {
          const userData = { ...usersLoginFixture, [field]: undefined }
          signUpPage.submit(userData)
          signUpPage.assertAlertErrorMessage({ error: message })
        })
      })
    })

    context('and password is too short', () => {
      const passwords = Array.from(
        { length: 5 },
        (_, index) => faker.internet.password({ length: index + 1 })
      )
      const error = 'Pelo menos 6 caracteres'
      
      passwords.forEach(password => {
        it(`should not accept password with only ${password.length} digits`, () => {
          signUpPage.submit({ name, email, password })
          signUpPage.assertAlertErrorMessage({ error })
        })
      })
    })

    context('email format is invalid', () => {
      const emails = ['test-user2mail.com', 'test-user$mail.com', 'test-user@', 'test-user.mail.com', '@mail.com']
      const error = 'Informe um email válido'

      emails.forEach(email => {
        it(`should not accept ${email} as a valid email`, () => {
          signUpPage.submit({ name, email, password })
          signUpPage.assertAlertErrorMessage({ error })
        })
      })      
    })
  })

  it('should return to login page when "Voltar para login" is clicked', () => {
    signUpPage.open()
    signUpPage.backToLogin()
    loginPage.assertIsLoginPage()
  })
})