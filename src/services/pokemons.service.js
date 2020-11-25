import * as httpService from './httpBaseService';

export const getAllPokemons = () => {
    return httpService.get('pokemon');
}

export const getPokemonDetails = (id) => {
    return httpService.get(`pokemon/${id}`)
}

export const getPokemonCharacteristics= (id) => {
    return httpService.get(`characteristic/${id}`)
}