import { useReducer } from 'react';

const initialState: User = {
  id: 0,
  name: '',
  userName: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

const initializer = (state: User): User => {
  return state;
};
function reducer(state: User, action: Action): User {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_STREET':
      return {
        ...state,
        address: { ...state.address, street: action.payload },
      };
    case 'SET_CITY':
      return { ...state, address: { ...state.address, city: action.payload } };
    case 'SET_ZIPCODE':
      return {
        ...state,
        address: { ...state.address, zipcode: action.payload },
      };
    case 'SET_LAT':
      return {
        ...state,
        address: {
          ...state.address,
          geo: { ...state.address.geo, lat: action.payload },
        },
      };
    case 'SET_LNG':
      return {
        ...state,
        address: {
          ...state.address,
          geo: { ...state.address.geo, lng: action.payload },
        },
      };
    default:
      return state;
  }
}

export default function UserFormContext(_props: {}) {
  const [user, dispatch] = useReducer(reducer, initialState);

  const handleChange = () => {
    dispatch();
  };

  return (
    <section className='w-1/2 border rounded-lg p-2 m-2'>
      <div className='text-center pb-2 border max-w-fit mx-auto px-4 rounded-lg'>
        <p>Context Component</p>
      </div>
      <form>
        <div className='mb-2'>
          <label
            htmlFor='name'
            className='block text-sm font-medium leading-6 text-gray-900 capitalize'
          >
            Name
          </label>
          <div className='mt-2'>
            <input
              id='name'
              name='name'
              type='text'
              value={user.name}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
              placeholder='name'
            />
          </div>
        </div>
        {/*  */}
        <div className='mb-2'>
          <label
            htmlFor='userName'
            className='block text-sm font-medium leading-6 text-gray-900 capitalize'
          >
            User Name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='userName'
              id='userName'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
              placeholder='user name'
            />
          </div>
        </div>
        {/*  */}
        <div className='mb-2'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900 capitalize'
          >
            email
          </label>
          <div className='mt-2'>
            <input
              type='email'
              name='email'
              id='email'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
              placeholder='email'
            />
          </div>
        </div>
      </form>
    </section>
  );
}
