import { faker, fakerEN_US } from '@faker-js/faker';

export const generateFakeUsers = async (timeout = 2000, totalRecords = 10) => {
  return new Promise((resolve, reject) => {
    if (timeout > 5000) reject(undefined);
    setTimeout(() => {
      const data = [];
      for (let i = 0; i < totalRecords; i++) {
        const sample = sampleUser();

        data.push({ ...sample, id: i + 1 });
      }
      resolve(data);
    }, timeout);
  });
};

export function sampleUser() {
  // const gender = ['male', 'female']
  // const randIndexforList = Math.floor(Math.random() * gender.length)
  // let sex = gender[randIndexforList]
  return {
    ...generateUserInfo(),
    address: generateAddress(),
    company: generateCompany(),
  };
}

const generateUserInfo = () => {
  faker.person.fullName();
  faker.person.sexType();
  let sex = faker.person.sexType();
  let firstName = faker.person.firstName(sex);
  let lastName = faker.person.lastName(sex);
  return {
    id: faker.string.uuid(),
    firstName: firstName,
    lastName: lastName,
    userName: faker.internet.userName({ firstName: firstName, lastName }),
    email: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
    }),
    phone: faker.phone.number(),
    website: faker.internet.url({ protocol: 'https', appendSlash: false }),
  };
};

const generateAddress = () => {
  return {
    street: fakerEN_US.location.street(),
    buildingNumber: fakerEN_US.location.buildingNumber(),
    city: fakerEN_US.location.city(),
    zipCode: fakerEN_US.location.zipCode('#####'),
    state: fakerEN_US.location.state(),
    geo: {
      latitude: fakerEN_US.location.latitude(),
      longitude: fakerEN_US.location.longitude(),
    },
  };
};

const generateCompany = () => {
  return {
    name: faker.company.name(),
    catchPhrase: faker.company.catchPhrase(),
    bs: faker.company.buzzPhrase(),
  };
};
