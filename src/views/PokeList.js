import React, { useEffect, useState } from 'react';
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

const SearchContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;

    input {
        flex: 1;
        width: 100%;
        padding: 10px 20px;
    }
`;

let timeout;

function PokeList(props) {
    const dispatch = useDispatch();
    const [name, setname] = useState('');
    const pokemons = useSelector(state => state.pokemonReducer.list);
    const [pokemonsFiltered, setpokemonsFiltered] = useState(pokemons);
    useEffect(() => {
        pokemonServices.getAllPokemons().then(list => {
            dispatch(loadPokemons(list.results));
            setpokemonsFiltered(list.results);
        });
    }, [dispatch]);
    

    const handleNameChange = (event) => {
        clearTimeout(timeout);
        setname(event.target.value);
        timeout = setTimeout(() => {
            setpokemonsFiltered(pokemons.filter(poke => poke.name.toLowerCase().includes(event.target.value.toLowerCase())));
        }, 600);
    }
    
    return (
        <div className="list-container">
            <HeaderImage src="/pokemontitle.svg"></HeaderImage>
            <Title>Catch'em All!</Title>
            <SearchContainer>
                <input type="text" placeholder="Search your pokemon" value={name} onChange={handleNameChange}></input>
            </SearchContainer>
            <div className="d-flex fit-height">
            {pokemonsFiltered.map((pokemon, index) => (<Card key={index} pokemon={pokemon} color={colors[index % colors.length]}></Card>))} 
            </div>
        </div>
    )
}

export default PokeList
