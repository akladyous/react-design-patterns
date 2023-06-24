import CounterOne from './CounterOne';

import UseStateCounter from './UseStateCounter';

import Gallery from './Gallery';
import MutateState from './MutateState';

import { useTime } from '../customHooks/useTime';
import UseStateTodos from './UseStateTodos';

import BasicCounter from '../components/BasicCounter';
import CounterUseState from './CounterUseState';
import CounterProviderComponent from '../context/CounterContext';

import UseStateUsers from './UseStateUsers';
export default function UseStateDemo() {
  // const time = useTime();
  return (
    <div>
      <UseStateUsers />
      {/* <UseStateTodos /> */}

      {/* <CounterOne /> */}
      {/* <CounterUseState /> */}
      {/* <CounterProviderComponent /> */}
      {/* <BasicCounter /> */}
      {/* <MutateState /> */}
      {/* <Gallery /> */}
    </div>
  );
}
