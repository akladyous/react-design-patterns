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
/*
    const getLocalStorageData = key => () => {
        return localStorage.getItem(key)
    }
    const Text = ({message}) => <h1>{message}</h1>;
    <DataSource getDataFunc={getLocalStorageData('keyName')} resourceName="keyName">
        <Text />
    </DataSource >
*/

/*
    called from parent component


    const getServerData = url => async () => {
        const response = await axios.get(url);
        return response.data;
    }

    <DataSource
        getDataFunc={getServerData('url...')}
        resourceName="user"
    >
        <SomeComponent></SomeComponent>
    </DataSource >

*/
