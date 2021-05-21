import React from 'react';
import { PokemonList } from './with-fetch-hoc-example/PokemonList';
import { withFetch } from './with-fetch-hoc-example/withFetch';
import MyForm from './with-form-hoc-example/MyForm';
import { withForm } from './with-form-hoc-example/withForm';


const endpoint = "pokemon?limit=15"
const url = `https://pokeapi.co/api/v2/${endpoint}/`
const WithPokemonList = withFetch(PokemonList, url);
const WithFormAuth = withForm(MyForm, {
  email: '',
  password: ''
})



export const HocPage = () => {


  const handleSubmit = (values) => {
    console.log("Submit: ", values)
  }

  return (
    <>
      <h1>PokemonList - Using withFetch HOC</h1>
      <WithPokemonList />
      <h1>Form - Using withForm HOC</h1>
      <WithFormAuth onSubmit={handleSubmit} />


    </>
  )

}

