import s from './style.module.css';
import cn from 'classnames';
import { useState } from "react";
import PokemonCard from '../PockemonCard';
const PlayerBoard = ({cards,onClickCard,player, possession })=>{
    const [isSelected,setSelected] = useState(null)
    //name,img,id,type,values
    return(
        <>
            {
               cards.map((card)=>
                    (<div 
                        key = {card.id}
                    className = {cn(s.cardBoard,
                    {
                        [s.selected]:isSelected === card.id
                    })}
                    onClick = {()=>{
                        setSelected(card.id);
                        onClickCard&&onClickCard({
                            player,
                            ...card})}}>
                    
                        < PokemonCard
                            possession = {possession}
                            className = {s.card}
                            key = {card.id}
                            name = {card.name}
                            img = {card.img}
                            id = {card.id} 
                            type = {card.type} 
                            values =  {card.values}
                            isActive = {true}
                            minimize = {true}
                        />
                    </div>)
                    )
                }
        </>
    )
}
export default PlayerBoard