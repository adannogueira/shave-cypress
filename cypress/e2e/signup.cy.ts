import { LoginPage } from '../support/pages/login'
import { usersLoginFixture } from '../fixtures/usersLogin'
import { faker } from '@faker-js/faker'
import { SignUpPage } from '../support/pages/sign-up'

describe('SignUp', () => {
  const { email, name, password } = usersLoginFixture

  it('should show sign up screen when "Criar conta" is clicked', () => {
    LoginPage.signUp()
    SignUpPage.assertIsSignUpPage()
  })

  context('when form is submitted', () => {
    it('should create a new account', () => {
      const message = 'Boas vindas, faça login para solicitar serviços!'
      SignUpPage.submit({ email, name, password })
      SignUpPage.assertNotice({ message })
    })

    it('should not create a new account when email is already registered', () => {
      cy.createUser(usersLoginFixture)
      const message = 'Oops! E-mail já cadastrado.'
      SignUpPage.submit({ email, name, password })
      SignUpPage.assertNotice({ message })
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
          SignUpPage.submit(userData)
          SignUpPage.assertAlertErrorMessage({ error: message })
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
          SignUpPage.submit({ name, email, password })
          SignUpPage.assertAlertErrorMessage({ error })
        })
      })
    })

    context('email format is invalid', () => {
      const emails = ['test-user2mail.com', 'test-user$mail.com', 'test-user@', 'test-user.mail.com', '@mail.com']
      const error = 'Informe um email válido'

      emails.forEach(email => {
        it(`should not accept ${email} as a valid email`, () => {
          SignUpPage.submit({ name, email, password })
          SignUpPage.assertAlertErrorMessage({ error })
        })
      })      
    })
  })

  it('should return to login page when "Voltar para login" is clicked', () => {
    SignUpPage.open()
    SignUpPage.backToLogin()
    LoginPage.assertIsLoginPage()
  })
})