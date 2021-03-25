import {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PockemonCard';
import PokemonComponent from '../../../../components/PlayerBoard';
import s from './style.module.css';

const BoardPage = () => {
    const [board,setBoard] = useState([]);
    const [playerTwo,setPlayerTwo] = useState([]);
    const [choice, setChoiceCard] = useState(null)
    const contText = useContext(PokemonContext);
    const history = useHistory()
    console.log("....../// ", contText)
    if(Object.keys(contText.pokemons).length === 0){
        history.replace('/game')
    }
    useEffect( async ()=>{
        const res = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const request = await res.json();
         setBoard(request.data)
         const resPlayerTwo = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const requestPlayerTwo = await resPlayerTwo.json();
         setPlayerTwo(requestPlayerTwo.data)
    },[])
    useEffect(()=>{
        console.log(board,playerTwo)
    },[board,playerTwo])

    const handleClickOnBoard = (a)=>{
        console.log(a, "hfgjkghkhlkj")
        return console.log(choice, " CARDS")
    }

    return (
        <div className={s.root}>
		    <div className={s.playerOne}>
            {
                   <PokemonComponent 
                   cards = {Object.values(contText.pokemons)}
                    onClickCard = {(card)=> setChoiceCard(card)}
                   />
                       
            }     
            </div>
            <div className={s.board}>
                {board.map(el=>
                   ( <div
                     key= {el.position}
                     className={s.boardPlate}
                     onClick = {()=>  !el.card&&handleClickOnBoard(el.position)}
                     >
                        {
                            el.card&&<PokemonCard {...el} minimize/>
                           // el.position
                        }
                     </div>)
                )}
                
            </div>
            <div className={s.playerTwo}>
               <PokemonComponent 
               cards = {playerTwo}
               onClickCard = {(card)=> setChoiceCard(card)}/>
            </div>
        </div>
    );
};

export default BoardPage;

            /*                < PokemonCard 
                        // // className = {s.card}
                        // // key = {key}
                        // // name = {name}
                        // // img = {img}
                        // // id = {id} 
                        // // type = {type} 
                        // // values =  {values}
                        // // isActive = {true}
                        // // minimize = {true}
                        //  />)*/