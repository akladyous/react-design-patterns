import React, {useEffect, useState} from "react";

export default function UsersLoader({children, resourceName}) {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const controller = new AbortController();
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            signal: controller.signal,
        })
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => {
                console.error(error.message);
            })
            .finally(() => {
                setLoading(false);
                controller.abort();
            });
    },[])

    return (
        <>
        {
            React.Children.map(children, child =>{
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {
                        ...child.props,
                        [resourceName]: items,
                        loading,
                        items
                    })
                }
            })
        }
        </>
    );


};
