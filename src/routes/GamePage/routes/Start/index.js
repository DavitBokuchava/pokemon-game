
import React from 'react';
import st from './style.module.css';
import PokemonCard from '../../../../components/PockemonCard';
//import { uniqCardsList } from '../../../../cards/index';
//import { v4 as uuidv4 } from 'uuid';
import { FirebaseContext}  from '../../../../context/firebaseContext';
import {PokemonContext}  from '../../../../context/pokemonContext'


const  StartPage =  ()=> { 
    const firebase = React.useContext(FirebaseContext);
    const pokemonsContext = React.useContext(PokemonContext);
    const [pokemons,setPokemons] = React.useState({});
    const [isSelected,setIsSelected] = React.useState(false);
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
        console.log(PokemonCard, " === POKEMONS")
        //return getPokemons()
    },[]);

    async function getPokemons (){
        const pkmns = await await firebase.getPokemonsOnce();
        console.log(pkmns)
          setPokemons(pkmns)
    }
    function handleSelected (key){
        return setPokemons(pr=>({
            ...pr,
            [key]:{
                ...pr[key],
                selected:!pr[key].selected
            }
        }))
    };
    return (
        <>
                
            <div className = {st.buttonWrap}>
                <button > Start Game </button>
            </div>
                <div className = {st.flex}>
                {
                    Object.entries(pokemons).map(([key,{name,img,id,type,values,selected}])=>
                        < PokemonCard 
                        
                        className = {st.card}
                        key = {key}
                        img = {img}
                        name = {name} 
                        id = {id} 
                        type = {type} 
                        values =  {values}
                        isActive = {false}
                        isSelected = {selected}
                        onClickCard = {()=> handleSelected(key)} />)
                    }
                
            </div>
        </>
    )
 }

export default StartPage;

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
