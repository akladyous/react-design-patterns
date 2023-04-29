import UseContextDemo from './useContext/UseContextDemo';
import UseStateDemo from './useState/UseStateDemo';

function App() {
  return (
    <>
      <header></header>
      <main className='m-5 border min-h-screen'>
        <h1 className='text-xl font-bold text-center'>Hello world!</h1>

        <div>
          {/* <UseStateDemo /> */}
          <UseContextDemo />
        </div>
      </main>
    </>
  );
}

export default App;
