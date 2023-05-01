import ReducerForm from './ReducerForm';
import UserFormReducer from './UserFormReducer';

export default function ReducerDemo(props) {
  return (
    <div className='border p-2 my-3 w-1/2'>
      <>
        {/* <ReducerForm /> */}
        <UserFormReducer />
      </>
    </div>
  );
}
