import { faker } from '@faker-js/faker';

export const usersLoginFixture: Application.User = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  isShaver: false
}
