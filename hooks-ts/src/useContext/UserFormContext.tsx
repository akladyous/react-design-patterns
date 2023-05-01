import { useReducer } from 'react';
import { Draft, produce } from 'immer';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    geo: {
      latitude: string;
      longitude: string;
    };
  };
};

enum ActionType {
  UPDATE = 'UPDATE',
  SET_VALUE = 'SET_VALUE',
  SET_ADDRESS = 'SET_ADDRESS',
  SET_GEO = 'SET_GEO',
}

type PayloadType = {
  property: string;
  value: string;
};
type UpdateUserAction =
  | {
      type: ActionType.UPDATE;
      payload: PayloadType;
    }
  | {
      type: ActionType.SET_VALUE;
      payload: PayloadType;
    }
  | {
      type: ActionType.SET_ADDRESS;
      payload: PayloadType;
    }
  | {
      type: ActionType.SET_GEO;
      payload: PayloadType;
    };

const initialState: User = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  address: {
    street: '',
    state: '',
    city: '',
    zipCode: '',
    geo: {
      latitude: '',
      longitude: '',
    },
  },
};

const initializer = (state: User): User => {
  return {
    ...state,
    id: crypto.randomUUID(),
  };
};

function reducer(state: User, action: UpdateUserAction): User {
  switch (action.type) {
    case ActionType.UPDATE:
      return produce(state, (draft: Draft<User>) => {
        debugger;

        const { property, value } = action.payload;
        const propertyNames = property.split('.');
        let nestedValue: Draft<any> = draft;
        for (let i = 0; i < propertyNames.length - 1; i++) {
          nestedValue = nestedValue[propertyNames[i]];
        }
        nestedValue[propertyNames[propertyNames.length - 1]] = value;
        console.log('------');
      });
    // return { ...state, [action.payload.property]: action.payload.value };
    case ActionType.SET_ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          [action.payload.property]: action.payload.value,
        },
      };
    case ActionType.SET_GEO: {
      return {
        ...state,
        address: {
          ...state.address,
          geo: {
            ...state.address.geo,
            [action.payload.property]: action.payload.value,
          },
        },
      };
    }

    default:
      return state;
  }
}

export default function UserFormContext(_props: {}) {
  const [user, dispatch] = useReducer(reducer, initialState, initializer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.UPDATE,
      payload: { property: e.target.name, value: e.target.value },
    });
  };

  const generateFormFields = (
    data: User,
    parentKey?: string,
  ): JSX.Element[] => {
    return Object.entries(data).map(([key, value]) => {
      const fieldName = parentKey ? `${parentKey}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        return generateFormFields(value, fieldName);
      } else {
        return (
          <div key={fieldName}>
            <label htmlFor={fieldName}>{fieldName}</label>
            <input
              type='text'
              name={fieldName}
              id={fieldName}
              value={user[fieldName]}
              onChange={handleInputChange}
            />
          </div>
        );
      }
    });
  };

  return (
    <section className='w-1/2 border rounded-lg p-2 m-2'>
      <div className='text-center pb-2 border max-w-fit mx-auto px-4 rounded-lg'>
        <p>Context Component</p>
      </div>
      <form>
        <div className=' grid grid-cols-2 gap-x-3'>
          <div className='mb-2'>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              first name
            </label>
            <div className='mt-2'>
              <input
                id='firstName'
                name='firstName'
                type='text'
                value={user.firstName}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='first name'
              />
            </div>
          </div>

          <div className='mb-2'>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              last name
            </label>
            <div className='mt-2'>
              <input
                id='lastName'
                name='lastName'
                type='text'
                value={user.lastName}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='last name'
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
                id='email'
                name='email'
                type='email'
                value={user.email}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='email'
              />
            </div>
          </div>
          {/*  */}
          <div className='mb-2'>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              password
            </label>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                value={user.password}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='password'
              />
            </div>
          </div>
        </div>
        <div className=' grid grid-cols-1 gap-x-3 border p-2 mt-3 ml-3'>
          <div className='border-b col-span-3'>
            <h4 className='capitalize'>address</h4>
          </div>
          <div className='mb-2 sm:col-span-3 py-2'>
            <label
              htmlFor='street'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              street
            </label>
            <div className='mt-2'>
              <input
                id='street'
                name='address.street'
                type='text'
                value={user.address.street}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='street'
              />
            </div>
          </div>
          {/* ----------------- */}
          <div className='mb-2 sm:col-span-1'>
            <label
              htmlFor='state'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              city
            </label>
            <div className='mt-2'>
              <input
                id='city'
                name='address.city'
                type='text'
                value={user.address.city}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='city'
              />
            </div>
          </div>
          <div className='mb-2 sm:col-span-1'>
            <label
              htmlFor='state'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              state
            </label>
            <div className='mt-2'>
              <input
                id='state'
                name='address.state'
                type='text'
                value={user.address.state}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='state'
              />
            </div>
          </div>
          <div className='mb-2 sm:col-span-1'>
            <label
              htmlFor='state'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              zip code
            </label>
            <div className='mt-2'>
              <input
                id='zipCode'
                name='address.zipCode'
                type='text'
                value={user.address.zipCode}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='zip Code'
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className=' grid grid-cols-2 gap-x-3 border p-2 mt-6 ml-6'>
          <div className='border-b col-span-3'>
            <h4 className='capitalize'>geo Location</h4>
          </div>
          <div className='mb-2 sm:col-span-1 py-2'>
            <label
              htmlFor='street'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              latitude
            </label>
            <div className='mt-2'>
              <input
                id='latitude'
                name='address.geo.latitude'
                type='text'
                value={user.address.geo.latitude}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='latitude'
              />
            </div>
          </div>
          {/* ----------------- */}
          <div className='mb-2 sm:col-span-1 py-2'>
            <label
              htmlFor='street'
              className='block text-sm font-medium leading-6 text-gray-900 capitalize'
            >
              longitude
            </label>
            <div className='mt-2'>
              <input
                id='longitude'
                name='address.geo.longitude'
                type='text'
                value={user.address.geo.longitude}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='longitude'
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
