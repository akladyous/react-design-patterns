import ReducerForm from './ReducerForm';
import UserFormReducer from './UserFormReducer';

export default function ReducerDemo(props) {
  return (
    <div className='border p-2 my-3'>
      <>
        {/* <ReducerForm /> */}
        <UserFormReducer />
      </>
    </div>
  );
}
