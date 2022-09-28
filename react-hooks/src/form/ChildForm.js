import { useEffect, memo } from "react";

const ChildForm = (props) => {
    const {name, value, onChange} = props || {};    

    useEffect(() => {
        console.log(`%c${name} - component did mount`, "color: blue");
        return () => {
            console.log(`%c${name} - component will unmount`, "color: blue");
        };
    }, [name, value, onChange]);

    return (
        <input
            className="input-group mb-1"
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={name.replace("_", " ")}
        />
    );
};
const checkProps = (prevProps, nextProps) =>{
    // console.log("prevProps: ", prevProps)
    // console.log("nextProps: ", nextProps)
    return false
}

export default ChildForm;
export const InputField = memo(ChildForm, checkProps);
