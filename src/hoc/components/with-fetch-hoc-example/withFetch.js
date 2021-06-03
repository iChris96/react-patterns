import React, { useEffect, useState } from 'react';


export const withFetch = (FORM, url) => {

    const ControlledFetch = () => {

        const [data, setData] = useState(null);
        const [isLoading, setLoading] = useState(false);
        const [isError, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const data = await fetch(url);
                    const response = await data.json();
                    console.log("we have data!", response);
                    setData(response)
                } catch (e) {
                    setError(e);
                } finally {
                    setLoading(false);
                }
            }

            fetchData();
        }, [])


        if (isLoading) {
            return 'Loading...';
        }

        if (isError) {
            return <p>{isError.message}</p>;
        }

        if (!data) {
            return null;
        }

        return (<FORM data={data} isLoading={isLoading} />)

    }

    return ControlledFetch;
}



