import StateDemo from './useState/StateDemo';
import ContextDemo from './context/ContextDemo';
import Counter from './context/CounterContext';
import UseDebugValueDemo from './useDebugValue/UseDebugValueDemo';
import DeferedDemo from './useDeferredValue/DeferedDemo';

function App() {
  return (
    <div className='App'>
      <h1 className='text-4xl text-center'>Main App</h1>

      {/* <StateDemo /> */}

      {/* <ContextDemo /> */}
      {/* <Counter />  */}
      <DeferedDemo />
    </div>
  );
}

export default App;
