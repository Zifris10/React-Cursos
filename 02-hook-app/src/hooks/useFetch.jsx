import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const initialValues = {
        data: null,
        isLoading: true,
        hasError: null
    };

    const [ state, setState ] = useState(initialValues);

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        });
        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            ...state,
            data,
            isLoading: false
        });
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        ...state
    };
};

export default useFetch;
