import { faker } from "@faker-js/faker";

export const generateUser = () => ({
  name: faker.person.fullName(),
  age: faker.number.int({ min: 18, max: 60 }),
  job: faker.person.jobTitle()
});