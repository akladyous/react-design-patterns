import UseStateCounter from './UseStateCounter';
import Counter from './Counter';
import Gallery from './Gallery';
import MutateState from './MutateState';

import { useTime } from '../customHooks/useTime';
import UseStateTodos from './UseStateTodos';

export default function StateDemo() {
  // const time = useTime();
  return (
    <div>
      {/* <p className='text-center text-blue-400'>{time.toLocaleTimeString()}</p> */}

      {/* <UseStateCounter /> */}
      <UseStateTodos />

      <Counter />
      <MutateState />
      <Gallery />
    </div>
  );
}
