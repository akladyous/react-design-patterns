import { useReducer } from "react";

const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type){
        case ACTION.INCREMENT:
            return {...state, count: state.count + 1}
        case ACTION.DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state;
    }
};

export default function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="container mt-2 border py-2">
            <h3>Counter</h3>
            <section>
                <p>{state.count}</p>
                <button
                    onClick={() => {dispatch({type: ACTION.INCREMENT})}}>
                    increment
                </button>
                <button
                    onClick={() => {dispatch({type: ACTION.DECREMENT})}}>
                    decrement
                </button>
            </section>
        </div>
    );
}
