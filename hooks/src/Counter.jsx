import { useState, useReducer } from "react";
const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case ACTIONS.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })
    }
    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    return (
        <section>
            <div className="container my-3 border">
                <h4>counter with useState</h4>
                <span>Counter &nbsp;</span>
                <span className="">{counter}</span>
                <button
                    className="d-block btn btn-primary my-2"
                    onClick={() => {
                        setCounter((count) => (count += 1));
                    }}
                >
                    Increment
                </button>
                <button
                    className="d-block btn btn-primary my-2"
                    onClick={() => {
                        setCounter((count) => (count -= 1));
                    }}
                >
                    Decrement
                </button>
            </div>
            <div className="container my-3 border">
                <h4>counter with useReducer</h4>
                <span>Counter &nbsp;</span>
                <span className="">{state.counter}</span>
                <button
                    className="d-block btn btn-primary my-2"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="d-block btn btn-primary my-2"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </section>
    );
}
