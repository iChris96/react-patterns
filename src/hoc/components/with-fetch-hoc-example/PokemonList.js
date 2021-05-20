export const PokemonList = ({ data }) => {

    const pokemonList = data.results.map((pokemon) =>
        <li>{pokemon.name}</li>
    );
    return (
        <>
            {pokemonList}
        </>
    )

}

