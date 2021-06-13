import React, { useReducer, useEffect } from 'react';


const reducer = (state, action) => {
    if (action.type === 'SET_LOADING') {
        return { ...state, isLoading: action.payload }
    }

    if (action.type === 'SET_DATA') {
        return { ...state, data: action.payload }
    }

    if (action.type === 'SET_ERROR') {
        return { ...state, isError: action.payload }
    }

    return state
}

export const useSimpleFetchReducer = (url, initialState = { data: null, isLoading: false, isError: false }) => {
    // const [data, setData] = useState(null);
    // const [isLoading, setLoading] = useState(false);
    // const [isError, setError] = useState(null);


    const [{ data, isLoading, isError }, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                //setLoading(true);
                dispatch({ type: 'SET_LOADING', payload: true })
                const data = await fetch(url);
                const response = await data.json();
                console.log("we have data!", response);
                //setData(response)
                dispatch({ type: 'SET_DATA', payload: response })
            } catch (e) {
                //setError(e);
                dispatch({ type: 'SET_ERROR', payload: e })
            } finally {
                //setLoading(false);
                dispatch({ type: 'SET_LOADING', payload: false })
            }
        }

        fetchData();
    }, [])


    return {
        data,
        isLoading,
        isError
    }
}
