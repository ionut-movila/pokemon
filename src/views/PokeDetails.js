import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as pokemonServices from '../services/pokemons.service';
import PokeHeader from '../sltyledComponents/pokemonHeader';
import { selectPokemon } from '../actions/pokemonActions';
import PokeTabs from '../sltyledComponents/pokeTabs';
import styled from 'styled-components';
import { colorsByType } from '../sltyledComponents/colors';


const Description = styled.div`
    width: 80%;
    margin: 40px auto;
    background: white;
    border: 2px solid lightgray;
    border-radius: 5px;
    padding-bottom: 10px;
`;

function PokeDetails(props) {

    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemonReducer.pokemonSelected);
    const [characteristics, setcharacteristics] = useState();
    const [color, setcolor] = useState('red');

    useEffect(() => {
        pokemonServices.getPokemonDetails(id).then(result => dispatch(selectPokemon(result)));
        if(pokemon) {
            pokemonServices.getPokemonCharacteristics(pokemon.id).then(res => setcharacteristics(res));
            setcolor(colorsByType.find(col => col.type === pokemon.types[0].type.name).color);
        }
    }, [dispatch, id, pokemon?.id]);
    return (
        pokemon? 
        <div className="container">
            <PokeHeader color={color} pokemon={pokemon}></PokeHeader>
        {characteristics? <Description>
            <h2>Description</h2>
            {characteristics.descriptions[0].description}
        </Description> : ''}
            <PokeTabs color={color} pokemon={pokemon}></PokeTabs>
        </div> : <></>
    )
}

export default PokeDetails
