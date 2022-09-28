import { useReducer } from "react";

const initialState = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
};

const ACTION = {
    CHANGE_VALUE: "changeValue",
    SUBMIT_FORM: "submitForm",
};

const reducer = (state, action) =>{
    switch(action.type){
        case ACTION.CHANGE_VALUE: {
            console.log("action: ", action)
            return {...state, [action.field]: action.payload }
        }
        case ACTION.SUBMIT_FORM: {
            console.log("action : ", action)
            console.log("state: ", state)
            // break
        }
        // eslint-disable-next-line no-fallthrough
        default: {
            return state
        }
    }
}
export default function User() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="container border mt-5 w-25">
            <div className="w-100 p-3  border my-2 container">
                {Object.keys(initialState).map((field, index) => {
                    return (
                        <div className="input-group mb-1" key={`div-${index}`} >
                            <input
                                type="text"
                                name={field}
                                key={`field-${index}`}
                                value={state[field]}
                                onChange={(e) =>
                                    dispatch({
                                        type: ACTION.CHANGE_VALUE, field: field, payload: e.target.value
                                    })
                                }
                                className="form-control"
                                placeholder={field.split("_").join(" ")}
                            ></input>
                        </div>
                    );
                })}
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e)=>{
                        e.preventDefault();
                        dispatch({ type: ACTION.SUBMIT_FORM });
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
