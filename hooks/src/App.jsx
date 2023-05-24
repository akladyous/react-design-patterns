import React from 'react';
import StateDemo from './useState/StateDemo';
import ContextDemo from './context/ContextDemo';
import Counter from './context/CounterContext';
import UseDebugValueDemo from './useDebugValue/UseDebugValueDemo';
import DeferedDemo from './useDeferredValue/DeferedDemo';
import Form from './forwardRef/Form';
import ModalParent from './useImperativeHandle/ModalParent';
import ReducerDemo from './useReducer/ReducerDemo';
import UseTransitionDemo from './useTransition/UseTransitionDemo';

function App() {
  return (
    <div className='App px-5'>
      <h1 className='text-4xl text-center'>Main App</h1>

      {/* <StateDemo /> */}

      {/* <ReducerDemo /> */}

      {/* <UseTransitionDemo /> */}

      {/* <ContextDemo /> */}
      {/* <Counter />  */}
      {/* <DeferedDemo /> */}

      {/* <Form /> */}

      {/* <ModalParent /> */}

      {/* <ReducerDemo /> */}
    </div>
  );
}
export default App;
