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
    const match = useRouteMatch();
    const handlePokemonsSelected = ()=>{
        console.log( "././././.")
    }
    return (
        <PokemonContext.Provider value = {{
            pokemon:[],
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

