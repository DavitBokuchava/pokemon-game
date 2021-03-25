import {useContext} from 'react';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PockemonCard';
import s from './style.module.css';

const BoardPage = () => {
    const contText = useContext(PokemonContext);
    console.log("....../// ", contText)

    return (
        <div className={s.root}>
		    <div className={s.playerOne}>
            {
                    Object.entries(contText.pokemons).map(([key,{name,img,id,type,values}])=>
                        < PokemonCard 
                        className = {s.card}
                        key = {key}
                        name = {name}
                        img = {img}
                        id = {id} 
                        type = {type} 
                        values =  {values}
                        isActive = {true}
                        minimize = {true}
                         />)
                    }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;