const INITIAL_STATE = {
    list: [],
    pokemonSelected: null
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_POKEMONS':
            return {...state, list: action.payload};
        case 'SELECT_POKEMON':
            return {...state, pokemonSelected: action.payload}
        default:
            return state;
    }
};

export default pokemonReducer;