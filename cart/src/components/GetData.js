import { useState, useEffect} from 'react'

export default function GetData(query) {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    
    useEffect( () => {

        if(!query) return;


        setLoading(true)
        
        var controller = new AbortController();
        var signal = controller.signal;

        fetch("https://fakestoreapi.com/products", {signal})
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
        .catch(err => {
            setError(true)
            console.log(err)
        })
        .finally(() => setLoading(false));
        // clear useEffect
        return () => {
            controller.abort();
        }
    }, [query]);
    
    
    return {loading, error, data};
}
