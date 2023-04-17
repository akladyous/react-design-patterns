import Counter from './Counter';
import { useTime } from '../customHooks/useTime';
import Gallery from './Gallery';
import MutateState from './MutateState';

export default function StateDemo() {
  // const time = useTime();
  return (
    <div>
      {/* <p className='text-center text-blue-400'>{time.toLocaleTimeString()}</p> */}
      {/* <Counter /> */}
      {/* <Gallery /> */}
      <MutateState />
    </div>
  );
}
