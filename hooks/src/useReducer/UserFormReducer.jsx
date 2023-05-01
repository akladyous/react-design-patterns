import { useReducer } from 'react';

const initialState = {
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
function initializer() {
  return initialState;
}

function reducer(state, action) {}

export default function UserFormReducer(props) {
  const [user, dispatch] = useReducer(reducer, initialState, initializer);

  return (
    <section>
      <div></div>
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
    </section>
  );
}
