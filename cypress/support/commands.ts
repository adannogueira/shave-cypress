import { createUser } from './commands/createUser';
import { getUserToken } from './commands/getUserToken';

Cypress.Commands.add('createUser', createUser)
Cypress.Commands.add('getUserToken', getUserToken)