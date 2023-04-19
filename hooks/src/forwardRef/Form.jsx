import TextField from './TextField';

export default function Form() {
  return (
    <div>
      Form
      <form>
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
