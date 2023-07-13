declare namespace Cypress {
  export interface Chainable<Subject = any> {
    createUser(user: Application.User): Chainable<any>;
    getUserToken(email: string): Chainable<any>;
    apiLogin(user: Application.User): Chainable<any>
  }
}

declare namespace Application {
  export type User = {
    name: string
    email: string
    password: string
    isShaver?: boolean
  }
  
}
