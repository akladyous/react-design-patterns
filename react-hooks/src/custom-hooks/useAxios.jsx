import axios from 'axios'
import { useState, useEffect } from 'react';

export default function useAxios(props) {
    const { url } = props || {};
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const controller = new AbortController();

    async function fetchData(url, params) {
        const config = {
            headers: { "Content-type": "application/json" },
            signal: controller.signal
        };
        try {
            const response = axios.get(url, config)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {


        return () => {
            setIsLoading(false)
            controller.abort()
        }
    }, [])
    return (
        <div>useAxios</div>
    )
}
