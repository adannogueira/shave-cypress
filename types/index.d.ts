declare namespace Cypress {
  export interface Chainable<Subject = any> {
    createUser(user: any): Chainable<any>;
  }
}