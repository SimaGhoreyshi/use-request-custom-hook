import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import { UseRequestType } from './useRequest.types';

const cache = {};

export function useRequest(url: string): UseRequestType {
    const [response, setResponse] = useState<null | AxiosResponse>(null);
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            if (cache[url]) {
                setResponse(cache[url]);
            } else {
                const response = await axios.get(url);
                setResponse(response);
                cache[url] = response;
            }
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    const refetch = () => {
        delete cache[url];
        fetchData();
    };

    return { response, error, loading, refetch };
}
