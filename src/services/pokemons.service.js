import * as httpService from './httpBaseService';

export const getAllPokemons = () => {
    return httpService.get('pokemon?limit=200');
}

export const getPokemonDetails = (id) => {
    return httpService.get(`pokemon/${id}`)
}

export const getPokemonCharacteristics= (id) => {
    return httpService.get(`characteristic/${id}`)
}