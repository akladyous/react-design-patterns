import React, { useState, useRef } from "react";

const MainParent = () => {
    console.log("from child-child number: ", chdNum);
    const currentChildren = React.Children.toArray(children)[chdNum];
    console.log("child array: ");
    console.log(React.Children.toArray(children));
    console.log("current children");
    console.log(currentChildren);

    if (React.isValidElement(currentChildren)) {
        return React.cloneElement(currentChildren);
    } else {
        return null;
    }
};

const ChdOne = () => {
    return (
        <div>
            <h2>chile one</h2>
            <p>test child one....</p>
        </div>
    );
};
const ChdTwo = () => {
    return (
        <div>
            <h2>chile two</h2>
            <p>test child two....</p>
        </div>
    );
};

export default function Parent() {
    const [inValue, setInValue] = useState(0);
    const inputValue = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("input value: ", inputValue.current.value);
        console.log("useState value: ", inValue);
        setInValue(inputValue.current.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputValue} />
                <button>submit</button>
            </form>

            <MainParent chdNum={inValue}>
                <ChdOne />
                <ChdTwo />
            </MainParent>
        </div>
    );
}
