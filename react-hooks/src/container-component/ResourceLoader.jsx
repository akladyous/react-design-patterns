import React, { useState, useEffect } from 'react'

export default function ResourceLoader(props) {
    const { resourceURL, resourceName, children } = props;
    const [state, setState] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController();
        fetch(resourceURL, { method: "GET", signal: controller.signal })
            .then((response) => response.json())
            .then((data) => setState(data))
            .catch((error) => {
                setError(error.message)
                console.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => {
            controller.abort();
        }
    }, [resourceURL]);
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

};
