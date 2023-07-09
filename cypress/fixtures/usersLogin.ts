import { faker } from '@faker-js/faker';

export const usersLoginFixture = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  isShaver: false
}
