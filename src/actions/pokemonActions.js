export const loadPokemons = (pokemons) => {
    return {
        type: 'LOAD_POKEMONS',
        payload: pokemons
    }
};

export const selectPokemon = (pokemon) => {
    return {
        type: 'SELECT_POKEMON',
        payload: pokemon
    }
};