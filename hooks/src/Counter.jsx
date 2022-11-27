import { useState, useReducer, useEffect, useRef, RefObject } from "react";

const initState = function (initialCount) {
    return { counter: initialCount || 0 }
}

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: 'reset'
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case ACTIONS.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case ACTIONS.RESET:
            return { ...state, counter: 0 }
        default:
            return state;
    }
}

export default function Counter({ initialCount }) {
    const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialCount, initState);
    const myValue = useRef(false)

    useEffect(() => {
        console.log('useState counter')
    }, [counter])
    useEffect(() => {
        console.log('useReducer counter')
    }, [state.counter])

    return (
        <section>
            <div className="container my-3 border">
                <h4>counter with useState</h4>
                <span>Counter &nbsp;</span>
                <span className="">{counter}</span>
                <div className="p-1">
                    <button
                        className="d-inline block btn btn-primary me-2"
                        onClick={() => {
                            setCounter((count) => (count += 1));
                        }}
                    >
                        Increment
                    </button>
                    <button
                        className="d-inline block btn btn-primary me-2"
                        onClick={() => {
                            setCounter((count) => (count -= 1));
                        }}
                    >
                        Decrement
                    </button>
                </div>
            </div>
            <div className="container my-3 border">
                <h4>counter with useReducer</h4>
                <span>Counter &nbsp;</span>
                <span className="">{state.counter}</span>
                <div className="p-1">
                    <button
                        className="d-inline-block btn btn-primary me-2"
                        onClick={(e) => dispatch({ type: ACTIONS.INCREMENT })}
                    >
                        Increment
                    </button>
                    <button
                        className="d-inline-block btn btn-primary me-2"
                        onClick={(e) => dispatch({ type: ACTIONS.DECREMENT })}
                    >
                        Decrement
                    </button>
                    <button
                        className="d-inline-block btn btn-primary me-2"
                        onClick={(e) => dispatch({ type: ACTIONS.RESET })}
                    >
                        Reset
                    </button>

                </div>
            </div>
        </section>
    );
}
