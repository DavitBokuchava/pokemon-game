import React from 'react';
import { 
  useRouteMatch,
  Route,
  Switch } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import {PokemonContext} from '../../context/pokemonContext';


const GamePage = () => {
    //const [selectedPokemons,setSelectedPokemons] = React.useState({});
    const [playerOneResult,setPlayerOneResult] = React.useState(false);
    const [playerOnePkmns,setPlayerOnePokemons] = React.useState({});
    const [playerTwoPkmns,setPlayerTwoPokemons] = React.useState([]);
    const match = useRouteMatch();
    const handlePlayerOnePokemons = (key,pokemon)=>{
        console.log( "././././." , pokemon, key)
        setPlayerOnePokemons(prev=>{
            if(prev[key]){
                const copyState = {...prev};
                delete copyState[key]
                return copyState;
            }
            return {
                ...prev,
                [key]:pokemon
            }
        })
    }
    const handlePlayerTwoPokemons = (pokemons)=>{
        console.log( "././././." , pokemons)
        setPlayerTwoPokemons([...pokemons]);
    }
    const handleEmptyStates = ()=>{  //I dont know the best way to clean up  state...
        setPlayerTwoPokemons([]);
        return setPlayerOnePokemons({})
    }
    const handleResult = (bool)=>{  // define winner...
        return setPlayerOneResult(bool)
    }
    // setPlayerOnePokemons(prv=>({
    //     ...prv,
    //     result:bool
    // }))
    
    return (
        <PokemonContext.Provider value = {{
            playerOnePokemons:playerOnePkmns,
            playerTwoPokemons:playerTwoPkmns,
            playerOneResult:playerOneResult,
            onPlayerOnePokemons:handlePlayerOnePokemons,
            onPlayerTwoPokemons:handlePlayerTwoPokemons,
            onDeletePokemons:handleEmptyStates,
            onPlayerOneResult:handleResult,
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};
export default GamePage;
// const handlePokemonsSelected = (key,pokemon)=>{
    //     console.log( "././././." , pokemon, key)
    //     setSelectedPokemons(prev=>{
    //         if(prev[key]){
    //             const copyState = {...prev};
    //             delete copyState[key]
    //             return copyState;
    //         }
    //         return {
    //             ...prev,
    //             [key]:pokemon
    //         }
    //     })
    // }
    //onSelectedPokemons:handlePokemonsSelected,
