import { useReducer, useEffect, useCallback } from "react";
import { MemoizedComponent } from "./MemoChild.js";

const initialState = {
        first_name: "",
        last_name: "",
        age: "",
};

const ACTION = {
    CHANGE_VALUE: "changeValue",
    SUBMIT_FORM: "submitForm",
};

export default function MemoParent() {

    const reducer = useCallback((state, action) => {
        switch (action.type) {
            case ACTION.CHANGE_VALUE: {
                return { ...state, [action.field]: action.payload };
            }
            case ACTION.SUBMIT_FORM: {
                //
            }
            // eslint-disable-next-line no-fallthrough
            default: {
                return state;
            }
        }
    }, []);
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleUpdate = useCallback( (e) =>{
        dispatch({
            type: ACTION.CHANGE_VALUE,
            field: e.target.name,
            payload: e.target.value,
        });
    }, [])
    // const handleUpdate = (e)=>{}

    useEffect(()=>{
        console.log("parent - component did mount")
        return () => { console.log("parent - component will unmount") }
    },[])

    return (
        <>
            <div className="container border mt-5 w-50">
                <h4>Parent Component</h4>
                {Object.entries(state).map((item, index) => {
                    const fieldName = item[0];
                    return (
                        <MemoizedComponent
                            key={index}
                            name={fieldName}
                            value={state[fieldName]}
                            onChange={handleUpdate}
                        />
                    );
                })}
            </div>
        </>
    );
}
