import { useEffect, useRef } from 'react';
import TextField from './TextField';

export default function Form() {
  const firstNameRef = useRef(null);

  function updateFirstName(e) {
    firstNameRef.current.focus();
  }
  useEffect(() => {}, []);
  return (
    <div className='mx-auto w-1/3 mt-10'>
      <form className=' border rounded-md mx-3 p-3'>
        <TextField
          ref={firstNameRef}
          type='text'
          name='firstName'
          label='first name'
        />
        <TextField
          type='text'
          name='lastName'
          label='last name'
        />
        <button
          type='button'
          className='border px-3'
          onClick={updateFirstName}
        >
          update first name
        </button>
      </form>
    </div>
  );
}
