
import React from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { getPokemonss, pokemonsLoading } from '../../../../store/pokemons.js';
import st from './style.module.css';
import PokemonCard from '../../../../components/PockemonCard';

import { FirebaseContext }  from '../../../../context/firebaseContext';
import { PokemonContext }  from '../../../../context/pokemonContext'


const  StartPage =  ()=> { 
    const firebase = React.useContext(FirebaseContext);
    const pokemonsContext = React.useContext(PokemonContext);
    const [pokemons,setPokemons] = React.useState({});
    const history = useHistory();
   // const pokemonsState = useSelector(selectPokemonsLoading)
    const dispatch = useDispatch();
    
    React.useEffect(()=>{
        pokemonsContext.onDeletePokemons();
        firebase.getPokemonSocket= ((pkmns)=>{
            console.log(pkmns, " pkmns  from on listening DB")
            setPokemons(pkmns);
            dispatch(getPokemonss(pkmns))
        })
        return ()=>firebase.getPokemonSocketOff();
    },[]);
    
    React.useEffect(()=>{
        dispatch(pokemonsLoading(true))
        //dispatch(getPokemonss(pokemons))
        return getPokemons()
    },[]);
   

    function toBoard(){
        history.push('/game/board')
    }
    async function getPokemons (){
        const pkmns = await  firebase.getPokemonsOnce();
        //console.log(pkmns, pokemonsContext.playerOnePokemons, "=== pokemonsContext.pokemons")
          setPokemons(pkmns)
          dispatch(getPokemonss(pkmns))
    }
    function handleSelected (key){
        const pokemon = {...pokemons[key]}
        pokemonsContext.onPlayerOnePokemons(key,pokemon) // add to context state 
        return setPokemons(pr=>({
            ...pr,
            [key]:{
                ...pr[key],
                selected:!pr[key].selected
            }
        }));
     
    };
    return (
        <>
                
            <div className = {st.buttonWrap}>
                <button onClick = {()=>toBoard()}
                    disabled={Object.keys(pokemonsContext.playerOnePokemons).length<5}> Start Game </button>
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
                        selected = {selected}
                        onClickCard =  {()=>{
                            if(Object.keys(pokemonsContext.playerOnePokemons).length<5 || selected){
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
    // React.useEffect(()=>{
    //     console.log(PokemonCard, pokemons, " === POKEMONS")
    //     //return getPokemons()
    // },[]);
  //  import Layout from '../../../../components/Layout';
//import { uniqCardsList } from '../../../../cards/index';
//import { v4 as uuidv4 } from 'uuid';