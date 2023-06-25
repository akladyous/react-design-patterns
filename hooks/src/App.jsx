import React from 'react';
import UseStateDemo from './useState/UseStateDemo';
import ContextDemo from './context/ContextDemo';
import UseDebugValueDemo from './useDebugValue/UseDebugValueDemo';
import DeferedDemo from './useDeferredValue/DeferedDemo';
import Form from './forwardRef/Form';
import ModalParent from './useImperativeHandle/ModalParent';
import ReducerDemo from './useReducer/ReducerDemo';
import UseTransitionDemo from './useTransition/UseTransitionDemo';
import Todos from './todos/Todos';
//

function App() {
  return (
    <div className='App px-5'>
      <h1 className='text-4xl text-center'>Main App</h1>

      {/* <UseStateDemo /> */}
      {/* <ReducerDemo /> */}
      {/* <UseTransitionDemo /> */}
      <ContextDemo />
      {/* <DeferedDemo /> */}
      {/* <Form /> */}
      {/* <ModalParent /> */}
      {/* <ReducerDemo /> */}

      {/* <Todos /> */}
    </div>
  );
}
export default App;
