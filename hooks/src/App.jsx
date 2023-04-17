import Counter from './useState/Counter';
import Gallery from './useState/Gallery';

import { useTime } from './customHooks/useTime';

function App() {
  const time = useTime();
  return (
    <div className='App'>
      <h1 className='text-4xl text-center'>Main App</h1>
      <p className='text-center text-blue-400'>{time.toLocaleTimeString()}</p>

      <Counter />
      <Gallery />
    </div>
  );
}

export default App;
