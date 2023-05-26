import Toggle from "./Toggle"


export default ToggleDemo(props) {

  return <>
    <Toggle>
        {({ on, getTogglerProps }) => {
          return (
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
          );
        }}
      </Toggle>
  </>
}
