import React from 'react';
import { PokemonList } from './with-fetch-hoc-example/PokemonList';
import { withFetch } from './with-fetch-hoc-example/withFetch';

const endpoint = "pokemon?limit=15"
const url = `https://pokeapi.co/api/v2/${endpoint}/`
const WithPokemonList = withFetch(PokemonList, url);

export const HocPage = () => {


  return (
    <>
      <h1>PokemonList - Using withFetch HOC</h1>
      <WithPokemonList />
    </>
  )

}

