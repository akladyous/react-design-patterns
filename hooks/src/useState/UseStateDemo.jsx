import UseStateCounter from './UseStateCounter';

import Gallery from './Gallery';
import MutateState from './MutateState';

import { useTime } from '../customHooks/useTime';
import UseStateTodos from './UseStateTodos';

import BasicCounter from '../components/BasicCounter';
import CounterUseState from './CounterUseState';
import CounterProviderComponent from '../context/CounterContext';

export default function UseStateDemo() {
  // const time = useTime();
  return (
    <div>
      {/* <p className='text-center text-blue-400'>{time.toLocaleTimeString()}</p> */}

      <CounterProviderComponent />
      <CounterUseState />
      <BasicCounter />
      <UseStateTodos />

      <Counter />
      <MutateState />
      <Gallery />
    </div>
  );
}
