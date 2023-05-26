import Toggle from './prop-getters-pattern/Toggle';

function App() {
  return (
    <>
      <Toggle>
        {({ on, getTogglerProps }) => (
          <div>
            <button
              {...getTogglerProps({
                onClick() {
                  alert('you clicked!');
                },
              })}
            >
              Toggle me
            </button>
            <div>{on ? 'Toggled On' : 'Toggled Off'}</div>
          </div>
        )}
      </Toggle>
    </>
  );
}

export default App;
