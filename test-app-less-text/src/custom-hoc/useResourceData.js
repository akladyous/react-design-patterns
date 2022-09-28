import {useState, useEffect} from "react"

const useGetResource = (endPoint) => {
    // console.log("endPoint  --: ", endPoint);
    const [resource, setResource] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        const controller = new AbortController();
        fetch(endPoint, { signal: controller.signal })
            .then(response => response.json())
            .then((data) => {
                setResource(data);
                setLoading(false)
                console.log(data)

            })
            .catch((err) => {
                console.error(err);
                setError(true);
            });
        return ()=>{
            console.log("call from clean up")
            controller.abort()
            setLoading(false)
            setError(false)
        };
    },[endPoint])

    return {resource, loading, error}
    // return resource
}

export default useGetResource;