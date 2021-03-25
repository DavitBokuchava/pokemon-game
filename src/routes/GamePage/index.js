import React from 'react';
import { 
  useRouteMatch,
  Route,
  Switch,
  Redirect } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import {PokemonContext} from '../../context/pokemonContext';


const GamePage = () => {
    const [selectedPokemons,setSelectedPokemons] = React.useState({});
    const match = useRouteMatch();
    const handlePokemonsSelected = (key,pokemon)=>{
        console.log( "././././." , pokemon, key)
        setSelectedPokemons(prev=>{
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
    return (
        <PokemonContext.Provider value = {{
            pokemons:selectedPokemons,
            onSelectedPokemons:handlePokemonsSelected
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

