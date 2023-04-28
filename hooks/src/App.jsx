import React from 'react';
import StateDemo from './useState/StateDemo';
import ContextDemo from './context/ContextDemo';
import Counter from './context/CounterContext';
import UseDebugValueDemo from './useDebugValue/UseDebugValueDemo';
import DeferedDemo from './useDeferredValue/DeferedDemo';
import Form from './forwardRef/Form';
import ModalParent from './useImperativeHandle/ModalParent';
import ReducerDemo from './useReducer/ReducerDemo';

function App() {
  return (
    <div className='App px-5'>
      <h1 className='text-4xl text-center'>Main App</h1>

      {/* <StateDemo /> */}

      {/* <ContextDemo /> */}
      {/* <Counter />  */}
      {/* <DeferedDemo /> */}

      {/* <Form /> */}

      {/* <ModalParent /> */}

      <ReducerDemo />
    </div>
  );
}
export default App;
