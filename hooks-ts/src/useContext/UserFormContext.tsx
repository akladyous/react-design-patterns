import { useReducer } from 'react';
enum ActionType {
  SET_NAME = 'SET_NAME',
  SET_EMAIL = 'SET_EMAIL',
  SET_STREET = 'SET_STREET',
  SET_CITY = 'SET_CITY',
  SET_ZIPCODE = 'SET_ZIPCODE',
}

type Action =
  | { type: ActionType.SET_NAME; payload: string }
  | { type: ActionType.SET_EMAIL; payload: string }
  | { type: ActionType.SET_STREET; payload: string }
  | { type: ActionType.SET_CITY; payload: string }
  | { type: ActionType.SET_ZIPCODE; payload: string };

const initialState: User = {
  id: 0,
  name: '',
  username: '',
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
const reducer = () => {};

export default function UserFormContext(_props: {}) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);
  return (
    <section className='w-1/2 border rounded-lg p-2 m-2'>
      <div className='text-center pb-2 border max-w-fit mx-auto px-4 rounded-lg'>
        <p>Context Component</p>
      </div>
      <form>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email
          </label>
          <div className='mt-2'>
            <input
              type='email'
              name='email'
              id='email'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='you@example.com'
            />
          </div>
        </div>
      </form>
    </section>
  );
}
