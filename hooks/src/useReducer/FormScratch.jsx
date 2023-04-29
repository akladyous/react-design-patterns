import { useReducer } from 'react';

const initialState = {
  name: '',
  age: '',
};

function initializer() {}

function reducer(state, action) {
  switch (action.type) {
    case 'setState': {
      return { ...state };
    }
    case 'resetState': {
      return { ...initialState };
    }
    default:
      return state; // or return
  }
}

export default function FormScratch() {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  function handleChange(event) {
    dispatch({
      type: 'setValue',
      payload: {
        targetName: event.target.name,
        targetValue: event.target.value,
      },
    });
  }
  return (
    <main>
      <form>
        <div>
          <input
            type='text'
            name='name'
            id=''
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='age'
            id=''
            onChange={handleChange}
          />
        </div>
      </form>
    </main>
  );
}
