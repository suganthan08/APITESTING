import { faker } from '@faker-js/faker';

export const library = {
  randomId: () => faker.number.int({ min: 1000, max: 9999 }),
  randomName: () => faker.person.firstName(),
  randomStatus: () => faker.helpers.arrayElement(['available', 'pending', 'sold'])
};
