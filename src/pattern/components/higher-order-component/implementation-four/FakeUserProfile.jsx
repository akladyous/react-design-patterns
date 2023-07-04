export default function FakeUserProfile({ user }) {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-100 p-4 rounded-md'>
      <h1 className='text-2xl font-bold mb-4'>User Profile</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p className='font-bold'>Name:</p>
          <p>{`${user.firstName} ${user.lastName}`}</p>
        </div>
        <div>
          <p className='font-bold'>Username:</p>
          <p>{user.userName}</p>
        </div>
        <div>
          <p className='font-bold'>Email:</p>
          <p>{user.email}</p>
        </div>
        <div>
          <p className='font-bold'>Phone:</p>
          <p>{user.phone}</p>
        </div>
        <div>
          <p className='font-bold'>Website:</p>
          <p>{user.website}</p>
        </div>
        <div>
          <p className='font-bold'>Address:</p>
          <p>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
        </div>
        <div>
          <p className='font-bold'>Company:</p>
          <p>{user.company.name}</p>
        </div>
        <div>
          <p className='font-bold'>Catch Phrase:</p>
          <p>{user.company.catchPhrase}</p>
        </div>
        <div>
          <p className='font-bold'>BS:</p>
          <p>{user.company.bs}</p>
        </div>
      </div>
    </div>
  );
}

const userObject = {
  id: 1,
  firstName: 'Elaine',
  lastName: 'Herzog',
  userName: 'Elaine_Herzog23',
  email: 'Elaine_Herzog16@hotmail.com',
  phone: '1-665-908-9313 x6227',
  website: 'https://thick-sip.org',
  address: {
    street: 'Kallie Canyon',
    buildingNumber: '961',
    city: 'Port Tevinworth',
    zipCode: '76994',
    state: 'Virginia',
    geo: {
      latitude: 76.9575,
      longitude: 60.1296,
    },
  },
  company: {
    name: 'Davis - Ward',
    catchPhrase: 'Adaptive bifurcated benchmark',
    bs: 'strategize e-business applications',
  },
};
