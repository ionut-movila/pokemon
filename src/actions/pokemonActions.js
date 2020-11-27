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

export const changeTab = (index) => {
    return {
        type: 'CHANGE_TAB',
        payload: index
    }
}