
import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import st from './style.module.css';
import { PokemonContext }  from '../../../../context/pokemonContext';
import { FirebaseContext } from '../../../../context/firebaseContext';
import  PokemonCard from '../../../../components/PockemonCard';
//import { useSelector } from 'react-redux';


const  FinishPage =  ()=> { 
    const contextPokemons = React.useContext(PokemonContext);
    const firebase = React.useContext(FirebaseContext);
    const [pokemons,setPokemons] = useState({});
    const [selected, setSelected] = useState({});
    const history = useHistory();
    if(Object.keys(contextPokemons.playerOnePokemons).length === 0  || Object.keys(contextPokemons.playerTwoPokemons).length === 0){
        history.replace('/game')
    };
    
    function goToStartPage(){
    
        if(contextPokemons.playerOneResult){
            const key = Object.entries(selected)[0][0];
            const value = Object.entries(selected)[0][1];
            firebase.addCards(key, value,()=>{
                return console.log(selected)
            });
        }
        
        return history.push('/game');
    }
    function handleSelected (key){ // add to context state
        let temp = {}
        Object.keys(pokemons).map((el)=>{
             temp = {
                ...temp,
                [el]:{
                   ...pokemons[el],
                   selected:el === key ? !pokemons[key].selected : false 
                }
            }
        });
        setPokemons({...temp});
         
         return setSelected({[key]:{...pokemons[key]}}) 
         
    };
    useEffect(()=>{
        let objectPokemons = {};
        contextPokemons.playerTwoPokemons.map(el=>{
            return objectPokemons = {
                ...objectPokemons,
                [uuidv4()]:{ ...el }
            }
        });
        return setPokemons({...objectPokemons});
    },[contextPokemons.playerTwoPokemons])

return (
   <>
       
       <div className = {st.flex}>
       {
           Object.entries(contextPokemons.playerOnePokemons).map(([key,{name,img,id,type,values,selected}])=>
               (< PokemonCard
                    key = {key}
                    name = {name}
                    img = {img}
                    id = {id} 
                    type = {type} 
                    values =  {values}
                    selected = {selected}
                    isActive = {true}
                    minimize = {true}
                    />))
           }
       
      </div>
      <div className = {st.buttonWrap}>
       <button  onClick = {()=>goToStartPage()} > End Game </button>
   </div>
      <div className = {st.flex}>
      {
           Object.entries(pokemons).map(([key,{name,img,id,type,values,selected}])=>
               (
               <div onClick = {()=>contextPokemons.playerOneResult && handleSelected (key)} key = {key}>
               < PokemonCard
                    key = {key}
                    name = {name}
                    img = {img}
                    id = {id} 
                    type = {type} 
                    values =  {values}
                    selected = {selected}
                    isActive = {true}
                    minimize = {true}
                     />
                     </div>)
                )
           }
       {/* {
           contextPokemons.playerTwoPokemons.map(([key,{name,img,id,type,values,selected}])=>
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
               onClickCard =  {()=> console.log("SELECT")} />)
           } */}
       
   </div>
   
</>
    )
 }

export default FinishPage;