import React from 'react'
import styled from 'styled-components';

const ImageContainer = styled.div`
    max-width: 120px;
    max-height: 120px;
    width: 140px;
    height: 120px;
    transform-origin: top left;
    transform: scale(1.2);
    border-radius: 5px;
    box-shadow: 0px 6px 6px 4px rgba(0, 0, 0, 0.40);
`;

const Image = styled.img`
    width: 96%;
    height: 96%;
    margin: 2%;
    border-radius: 5px;
`;

const ContentContainer = styled.div`
    width: 100%;
    margin: 0 30px;
    display: flex;
`;

const Header = styled.div`
    width: 100%;
    height: 120px;
    background: ${({color}) => color? color : 'red'};
    margin-bottom: 40px;
    display: flex;
    box-shadow: 0px 6px 6px 4px rgba(0, 0, 0, 0.40);
    position: sticky;
    top: 0;
    ${ImageContainer} {
        background: ${({color}) => color? color : 'red'};
    }
`;

const Badge = styled.div`
    padding: 5px 10px;
    background: white;
    height: 30px;
    font-size: 1.1rem;
    color: gray;
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 5px;
    margin: auto 5px;
`;


function PokeHeader(props) {
    const {pokemon, color} = props;
    return (
        <React.Fragment>
            <Header color={color}>
                <ImageContainer>
                    <Image src={pokemon.sprites.other['official-artwork'].front_default}></Image>
                </ImageContainer>
                <ContentContainer>
                <Badge>{pokemon.types[0].type.name}</Badge>
                    <div style={{flex: '1 1 auto'}}></div>
                    <h1 style={{color: 'white', fontSize: '3rem', textTransform: 'capitalize', textAlign: 'center'}}>{pokemon.name}</h1>
                </ContentContainer>
            </Header>
        </React.Fragment>
    )
}

export default PokeHeader
