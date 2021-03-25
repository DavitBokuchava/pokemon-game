
import React from 'react';
import { useHistory,useRouteMatch} from 'react-router-dom'
import st from './style.module.css';
import PokemonCard from '../../../../components/PockemonCard';
import Layout from '../../../../components/Layout';
//import { uniqCardsList } from '../../../../cards/index';
//import { v4 as uuidv4 } from 'uuid';
import { FirebaseContext}  from '../../../../context/firebaseContext';
import {PokemonContext}  from '../../../../context/pokemonContext'


const  StartPage =  ()=> { 
    const firebase = React.useContext(FirebaseContext);
    const pokemonsContext = React.useContext(PokemonContext);
    const [pokemons,setPokemons] = React.useState({});
    const history = useHistory()
    console.log(pokemonsContext)
    
    React.useEffect(()=>{
        firebase.getPokemonSocket= ((pokemons)=>{
            setPokemons(pokemons)
        })
        return firebase.getPokemonSocketOff();
    },[]);
    React.useEffect(()=>{
        //console.log(PockemonCard, " === POKEMONS")
        return getPokemons()
    },[]);
    React.useEffect(()=>{
        console.log(PokemonCard, pokemons, " === POKEMONS")
        //return getPokemons()
    },[]);
    function toBoard(){
        history.push('/game/board')
    }
    async function getPokemons (){
        const pkmns = await await firebase.getPokemonsOnce();
        console.log(pkmns)
          setPokemons(pkmns)
    }
    function handleSelected (key){
        const pokemon = {...pokemons[key]}
        pokemonsContext.onSelectedPokemons(key,pokemon)
        setPokemons(pr=>({
            ...pr,
            [key]:{
                ...pr[key],
                selected:!pr[key].selected
            }
        }));
      return console.log(Object.keys(pokemonsContext.pokemons).length)
    };
    return (
        <>
                
            <div className = {st.buttonWrap}>
                <button onClick = {()=>toBoard()}
                    disabled={Object.keys(pokemonsContext.pokemons).length<5} > Start Game </button>
            </div>
                <div className = {st.flex}>
                {
                    Object.entries(pokemons).map(([key,{name,img,id,type,values,selected}])=>
                        < PokemonCard 
                        className = {st.card}
                        key = {key}
                        name = {name}
                        img = {img}
                        id = {id} 
                        type = {type} 
                        values =  {values}
                        isActive = {true}
                        isSelected = {selected}
                        onClickCard =  {()=>{
                                if(Object.keys(pokemonsContext.pokemons).length<5 || selected){
                                    return handleSelected(key)
                                }
                                }} />)
                    }
                
            </div>
        </>
    )
 }

export default StartPage;


// {()=>{
//     if(Object.keys(pokemonsContext.pokemons).length<5 || selected){
//         return handleSelected(key)
//     }
//     }}
    // function addCardToDB(){
    //     let key = uuidv4();
    //     let index =  Math.floor(Math.random() * Math.floor(uniqCardsList.length));
    //     firebase.addCards(key,uniqCardsList[index], async()=>{
    //              await getPokemons()
    //         });
    // }
    
    // function addActiveTocard({uniq,id}){
    //    return  setPokemons(prevState => {
    //         return Object.entries(prevState).reduce((acc, item) => {
    //             const pokemon = {...item[1]};
    //             if (pokemon.id === id && item[0] === uniq) {
    //                 pokemon.isActive = pokemon.hasOwnProperty('isActive') ? !pokemon.isActive : true;
    //                 firebase.updatePokemon(uniq,pokemon);
    //             };
        
    //             acc[item[0]] = pokemon;
    //             return acc;
    //         }, {});
    //     });
        
    // }
