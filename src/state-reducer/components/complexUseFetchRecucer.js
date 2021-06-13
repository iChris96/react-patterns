import React, { useReducer, useEffect } from 'react';


export const defaultReducer = (state, action) => {
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

const initialState = { data: null, isLoading: false, isError: false }

export const useComplexFetchReducer = (url, complexReducer = defaultReducer) => {


    const [{ data, isLoading, isError }, dispatch] = useReducer(complexReducer, initialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch({ type: 'SET_LOADING', payload: true })
                const data = await fetch(url);
                const response = await data.json();
                console.log("we have data!", response);
                dispatch({ type: 'SET_DATA', payload: response })
            } catch (e) {
                dispatch({ type: 'SET_ERROR', payload: e })
            } finally {
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
