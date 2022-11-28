import React, { useState, useEffect } from 'react'

export default function DataSource({ getDataFunc, resourceName, children }) {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await getDataFunc();
            setState(data)
        })()
    }, [getDataFunc])
    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { ...child.props, [resourceName]: state })
                    }
                    return child;
                })
            }
        </>
    )
}
