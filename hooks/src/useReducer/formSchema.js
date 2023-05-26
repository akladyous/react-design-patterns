export default function generateInputs(data, prefix = '') {
  return Object.entries(data).map(([key, value]) => {
    const inputName = prefix ? `${prefix}.${key}` : key;
    const inputValue = value instanceof Object ? '' : value;

    if (value instanceof Object) {
      return generateInputs(value, inputName);
    }

    return (
      <>
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
                id={inputName}
                name={inputName}
                type='text'
                value={user[inputName]}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
                placeholder='first name'
              />
            </div>
          </div>
        </div>
      </>
    );
  });
}
