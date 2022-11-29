import axios from 'axios'
import { useState, useEffect } from 'react';

export default function useAxios(props) {
    const { url } = props || {};
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

    }, [])
    return (
        <div>useAxios</div>
    )
}
