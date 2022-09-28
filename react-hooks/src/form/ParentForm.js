import { useReducer, useEffect, useCallback } from "react";
import { InputField } from "./ChildForm.js";

const initialState = {
    first_name: "",
    last_name: "",
    age: "",
}

const ACTION = {
    CHANGE_VALUE: "changeValue",
    SUBMIT_FORM: "submitForm",
}
    const reducer = (state, action) => {
        switch (action.type) {
            case ACTION.CHANGE_VALUE: {
                return { ...state, [action.field]: action.payload };
            }
            case ACTION.SUBMIT_FORM: {
                return state;
            }
            default: {
                return state;
            }
        }
    };

const ParentForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = useCallback((e) =>{
        dispatch({
            type: ACTION.CHANGE_VALUE,
            field: e.target.name,
            payload: e.target.value
        })
    },[])

    useEffect(() => {
        console.log("%cPARENT - component did mount", "color: green");
        return () => {
            console.log("PARENT - component will unmount");
        };
    }, [state]);

    return (
        <div className="container border mt-5 w-50">
            <h4>User Form</h4>
            {
                Object.entries(state).map( (item, index) => {
                    const fieldName = item[0]
                    return (
                        <InputField
                            key={index + 1}
                            name={fieldName}
                            value={state[fieldName]}
                            onChange={handleChange}
                        />
                        // <input
                        //     className="input-group mb-1"
                        //     type="text"
                        //     name={fieldName}
                        //     value={state[fieldName]}
                        //     key={index}
                        //     onChange={handleChange}
                        //     placeholder={fieldName.replace("_", " ")}
                        // />
                    );
                })
            }
        </div>
    )
};


export default ParentForm;