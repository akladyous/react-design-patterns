import withFakeUser from '../component/withFakeUser';
import FakeUserProfile from './FakeUserProfile';

const WithFakeUser = withFakeUser(FakeUserProfile, 1);

export default function HigherOrderComponentFourDemo() {
  return (
    <div className='w-3/4 mx-auto my-5 p-3'>
      <WithFakeUser />
    </div>
  );
}
