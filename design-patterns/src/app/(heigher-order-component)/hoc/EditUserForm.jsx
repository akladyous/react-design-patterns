'use client';
import { withEditableUser } from '@/components/heigher order component/withEditableUser';

export default function EditUser({ user, onChange, onSave, resetUser }) {
  console.log('EditUserForm  user: ', user);
  if (!user) return null;

  return (
    <>
      <section>
        <form>
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2'>
              <input
                type='firstName'
                name='firstName'
                id='firstName'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export const EditUserForm = withEditableUser(EditUser, 1);
