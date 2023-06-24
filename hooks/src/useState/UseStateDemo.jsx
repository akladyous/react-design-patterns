import CounterOne from './CounterOne';

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
      <CounterOne />
      {/* <CounterUseState /> */}
      {/* <CounterProviderComponent /> */}
      {/* <BasicCounter /> */}
      {/* <UseStateTodos /> */}
      {/* <MutateState /> */}
      {/* <Gallery /> */}
    </div>
  );
}
