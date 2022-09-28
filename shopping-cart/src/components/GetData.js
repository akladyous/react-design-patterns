import { useEffect, useState} from 'react'

export default function GetData(query) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [data, setData] = useState([]);

    useEffect( () => {
        console.log("get data")
        setLoading(true)
        fetch("https://fakestoreapi.com/products")
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
        .catch(err => {console.log(err)})
        .finally(() => setLoading(false))
    }, [query]);


    return {loading, error, data}
}
