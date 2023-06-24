import { memo, useEffect } from "react"

export const MemoChild = (props) => {
    const {name, value, onChange} = props || {};
    
    useEffect(() =>{
        console.log(`Child component : ${name} -> component did mount`)
        return () => { console.log(`Child component : ${name} -> component`) }
    },[name, value])

    return (
        <div className="w-100 p-1 my-1 container border">
            <p>{`Child component : ${name}`}</p>
            <input
                className="input-group mb-1"
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={name.replace("_", " ")}
            />
        </div>
    );
}

export const MemoizedComponent = memo(MemoChild);