import React, { useEffect } from 'react';
import * as pokemonServices from '../services/pokemons.service';
import { loadPokemons } from '../actions/pokemonActions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../sltyledComponents/card';
import styled from 'styled-components';
import { colors } from '../sltyledComponents/colors';

const HeaderImage = styled.img`
    width: 100%;
    max-height: 200px; 
    background-color: white;
    //background-image: linear-gradient(to right, black,red,white,white,white,white,white,red, black);
`;

const Title = styled.h1`
    padding: 20px 0;
    border-radius: 10px;
    background: #fbd100;
    position: sticky;
    top: 0;
    margin: 0 30px 30px 30px;
    z-index: 10;
`;

function PokeList(props) {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemonReducer.list);
    useEffect(() => {
        pokemonServices.getAllPokemons().then(list => dispatch(loadPokemons(list.results)));
    }, []);
    
    return (
        <div className="list-container">
            <HeaderImage src="/pokemontitle.svg"></HeaderImage>
            <Title>Catch'em All!</Title>
            <div className="d-flex fit-height">
            {pokemons.map((pokemon, index) => (<Card key={index} pokemon={pokemon} color={colors[index % colors.length]}></Card>))} 
            </div>
        </div>
    )
}

export default PokeList
