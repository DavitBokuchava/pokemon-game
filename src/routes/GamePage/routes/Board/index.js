import {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PockemonCard';
import PokemonComponent from '../../../../components/PlayerBoard';
import s from './style.module.css';

const BoardPage = () => {
    const contText = useContext(PokemonContext);
    const [board,setBoard] = useState([]);
    const [playerOne,setPlayerOne] = useState(()=>{
        return Object.values(contText.pokemons).map(pokemon=>({
            ...pokemon,
            possession:"green"
        }))
    })
    const [playerTwo,setPlayerTwo] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null)
    
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
         setPlayerTwo(()=>{
             return requestPlayerTwo.data.map(pokemon=>({
                ...pokemon,
                possession:"red"
             }))
         })
    },[])
    useEffect(()=>{
        console.log(playerOne,playerTwo,choiceCard)
    },[playerOne,playerTwo,choiceCard])

    const handleClickOnBoard = async (position)=>{
        //console.log(a, "hfgjkghkhlkj")
        if(choiceCard){
            const params = {
                position,
                card:choiceCard,
                board
            };
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            const request = await res.json();
            console.log(request, " === reque")
            setBoard(request.data)
        };
    }

    return (
        <div className={s.root}>
		    <div className={s.playerOne}>
            {
                   <PokemonComponent 
                   player = {1}
                   cards = {playerOne}
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
                            el.card&&<PokemonCard {...el.card} isActive   minimize/>
                           
                        }
                     </div>)
                )}
                
            </div>
            <div className={s.playerTwo}>
               <PokemonComponent
               player = {2} 
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