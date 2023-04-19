import TextField from './TextField';

export default function Form() {
  return (
    <div className='mx-auto w-1/3 mt-10'>
      <form className=' border rounded-md mx-3 p-3'>
        <TextField
          type='text'
          name='firstName'
          label='first name'
        />
        <TextField
          type='text'
          name='lastName'
          label='last name'
        />
      </form>
    </div>
  );
}
