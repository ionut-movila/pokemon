import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeTab } from '../actions/pokemonActions';

const tabs = [
    {
        title: 'Stats',
        index: 0
    },
    {
        title: 'Images',
        index: 1
    }
];


const Tab = styled.div`
flex: 1;
cursor: pointer;
padding: 10px 0 ;
font-weight: ${({active}) => active ? 'bold' : ""};;
background-color: ${({active, color}) => active ? color : "lightgray"};
color: ${({active}) => active ? 'white' : "black"};
margin: 0 5px;
border-radius: 5px;
`;

const Tabs = styled.div`
display: flex;
`;

const TabsContainer = styled.div`
flex: 1;
`;


const Sprite = styled.img`
min-width: 200px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
margin: 10px;
background-color: white;
`;

const ImagesContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
flex-wrap: wrap;
`;

const Stat = styled.div`
position: relative;
padding: 10px 60px;
font-size: 1.1rem;
font-weight: bold;
&::before {
    content: " ";
        position: absolute;
        left: 20px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
    }
    `;
    
    const StatsContainer = styled.div`
    display: block;
    text-align: justify;
    width: 100%;
    height: 100%;
    
    h2 {
        text-align: center
    }
    `;
    
    const Content = styled.div`
        padding: 20px 10%;
        display: flex;

        & ${Stat} {
            &::before {
                background-color: ${({color}) => color ? color : "red"};
            }
        }
    `;
    
    
const imagesToShow = ['back_default', 'back_female', 'back_shiny', 'back_shiny_female', 'front_default', 'front_female', 'front_shiny', 'front_shiny_female'];



function PokeTabs(props) {
    const dispatch = useDispatch();
    const tabId = useSelector(state => state.pokemonReducer.currentTab);
    const {pokemon, color} = props;
    const handleTabToggle = (index) => {
        dispatch(changeTab((index) % 2));
    }

    const getAllImages = (sprites) => {
        return imagesToShow.filter(image => sprites[image] !== null).map(img => sprites[img]);
    }

    return (
        <TabsContainer>
            <Tabs>
                {tabs.map((tab, index) => 
                <Tab color={color} key={index} onClick={() => handleTabToggle(index)}
                active={tabId === index? true:false}>{tab.title}</Tab>)}
            </Tabs>
            <Content color={color}>
                {
                    tabId === 0? 
                    <>
                    <StatsContainer>
                        <h2>Basic Stats</h2>
                        {pokemon.stats.map((stat, index) => (
                            <Stat key={index}><div className="name">{stat.stat.name}: {stat.base_stat}</div></Stat>
                        ))}
                    </StatsContainer>
                    <StatsContainer>
                        <h2>Abilities</h2>
                        {pokemon.abilities.map((ability, index) => (
                            <Stat key={index}><div className="name">{ability.ability.name}</div></Stat>
                        ))}
                    </StatsContainer>
                    </>
                    :
                    <ImagesContainer>
                        {getAllImages(pokemon.sprites).map((sprite, index) => (<Sprite key={index} src={sprite}></Sprite>))}
                    </ImagesContainer>
                }
            </Content>
        </TabsContainer>
    )
}

export default PokeTabs
