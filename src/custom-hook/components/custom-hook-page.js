import React, { useEffect, useState } from 'react';

const endpoint = "pokemon?limit=100"
const url = `https://pokeapi.co/api/v2/${endpoint}/`

export const useFetch = (url) => {
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


  return {
    data,
    isLoading,
    isError
  }
}

export const CustomHookPage = () => {

  const { data, isLoading, isError } = useFetch(url);

  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return <p>{isError.message}</p>;
  }

  if (!data) {
    return null;
  }

  const pokemonList = data.results.map((pokemon) =>
    <li>{pokemon.name}</li>
  );



  return (
    <>
      <h2>Pokemons List - Using Custom Hooks </h2>

      <ul>{pokemonList}</ul>

    </>
  )
}
