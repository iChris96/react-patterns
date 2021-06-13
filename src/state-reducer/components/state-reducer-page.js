import React, { useReducer, useEffect } from 'react';
import { defaultReducer, useComplexFetchReducer } from './complexUseFetchRecucer';
import { useSimpleFetchReducer } from './simpleUseFetchReducer';


export const X = () => {

  const endpoint = "pokemon?limit=10"
  const url = `https://pokeapi.co/api/v2/${endpoint}/`

  const { data, isLoading, isError } = useSimpleFetchReducer(url);

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
      <ul>{pokemonList}</ul>
    </>
  )
}

export const Y = () => {

  const endpoint = "pokemon?limit=10"
  const url = `https://pokeapi.co/api/v2/${endpoint}/`

  const { data, isLoading, isError } = useComplexFetchReducer(url, (state, action) => {
    const stateUpdated = defaultReducer(state, action) //default reducer will be executed

    //we can intercept the state before it will be updated
    if (action.type === 'SET_DATA') {
      alert('we have awesome data')
    }


    return stateUpdated
  });

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
      <ul>{pokemonList}</ul>
    </>
  )
}

export const StateReducerPage = () => {
  return (
    <>
      <h2>Pokemons List - Using Simple State Reducers </h2>

      <X />

      <br />

      <h2>Pokemons List - Using State Reducers Level God </h2>

      <Y />

    </>
  )
}
