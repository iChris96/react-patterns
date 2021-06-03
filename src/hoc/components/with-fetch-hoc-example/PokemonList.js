export const PokemonList = ({ data, isLoading }) => {

    const pokemonList = data.results.map((pokemon) =>
        <li>{pokemon.name}</li>
    );

    if (isLoading) return (<div>PokemonList Loading...</div>)

    return (
        <>
            {pokemonList}
        </>
    )

}

