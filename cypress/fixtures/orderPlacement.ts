import { faker } from '@faker-js/faker';
import { Shavers } from './shavers';

export const customerFixture: Application.User = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  isShaver: false
}

export const shaverFixture = {
  name: faker.helpers.enumValue(Shavers)
}

export const serviceFixture = {
  description: 'Corte de cabelo',
  price: '79,99'
}
