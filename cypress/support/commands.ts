import { apiLogin } from './commands/apiLogin';
import { createUser } from './commands/createUser';
import { getUserToken } from './commands/getUserToken';

Cypress.Commands.add('createUser', createUser)
Cypress.Commands.add('getUserToken', getUserToken)
Cypress.Commands.add('apiLogin', apiLogin)