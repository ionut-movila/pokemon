import React from 'react'
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(0);
    border-radius: 60%;
  }

  to {
    transform: rotate(360deg) scale(1);
    border-radius: 5px;
  }
`;

const CardName = styled.div`
    &::before {
        position: relative;
        content: " ";
        width: 46px;
        height: 46px;
        min-width: 46px;
        z-index: 3;
        display: block;
        background: url('https://vignette.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png');
        background-size: contain;
        border: 2px solid white;
        border-radius: 50%;
        transition: all .3s linear;
    }

    div {
        flex: 1;
        text-align: center;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    display: flex;
    font-weight: bold;
    text-align: center;
    position: relative;
    font-size: 2rem;
    flex: 1;
    border-radius: 0 0 0 18px;
`;

const CardImage = styled.img`
    width: 100%;
    height: 242px;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    &::before {
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        transform: scale(0);
        background: rgba(5, 66, 97, 0.65);
        transform-origin: center;
    }

    &::after {
        content: " ";
        position: absolute;
        left: 0;
        z-index: 1;
        border: 2px white solid;
        border-radius: 5px;
        transform-origin: center;
    }
`;

const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-width: 230px;
    max-width: 300px;
    height: 300px;
    margin: 30px;
    flex: 1;
    z-index: 5;
    border-radius: 0 0 0 25px;
    overflow: hidden;
    border: 4px solid ${({color}) => color ? color : "red"};
    background-color: white;
    opacity: 1;
    //box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0px 6px 6px 4px rgba(0, 0, 0, 0.70);
    cursor: pointer;
    transition: transform .5s ease-out;

    &:hover {
        transform: scale(1.2);
    }

    ${CardName} {
        background-color: ${({color}) => color ? color : "red"};
        border: 4px ${({color}) => color ? color : "red"} solid;
    }

    &:hover ${CardName} {
        color: ${({color}) => color ? color : "red"};
        background-color: white;
        border-top: 4px ${({color}) => color ? color : "red"} solid;
    }

    &:hover ${CardImage} {
        transition: transform ease-in .6s;
        transform:scale(1.2);
    }

    &:hover ${ImageContainer} {
        &::before {
            transform: scale(1);
            transition: all 0.2s ease-in;
        }

        &::after {
            left: 10px;
            top: 10px;
            right: 10px;
            bottom: 10px;
            animation: ${rotate} .6s linear 1;
        }
    }
`;

const getPokemonIdByUrl = (url) => {
    let urlArray = url.split('/');
    return urlArray[urlArray.length - 2];
}

function Card(props) {
    let history = useHistory();
    const cardClick = (id) => {
        history.push(`/details/${id}`);
    }
    const { color, pokemon } = props;
    const pokemonId = getPokemonIdByUrl(pokemon.url);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    return (
        <CardContainer color={color} onClick={() => cardClick(pokemonId)}>
            <ImageContainer>
                <CardImage src={imageUrl}></CardImage>
            </ImageContainer>
            <CardName >
                <div>{pokemon.name}</div>
            </CardName>
        </CardContainer>
    )
}

export default Card
