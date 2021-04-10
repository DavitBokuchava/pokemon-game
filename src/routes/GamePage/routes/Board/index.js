import {useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PockemonCard';
import PokemonComponent from '../../../../components/PlayerBoard';
import ArrowComponent from '../../../../components/ArrowChoice';
import Result from '../../../../components/Result';
import s from './style.module.css';
//onClick = {()=> history.push('/game/finish')}
//const history = useHistory()
const BoardPage = () => {
    const contText = useContext(PokemonContext);
    const [board,setBoard] = useState([]);
    const [playerOne,setPlayerOne] = useState(()=>{
        return Object.values(contText.playerOnePokemons).map(pokemon=>({
            ...pokemon,
            possession:"green"
        }))
    })
    const [side, setSide] = useState(0);
    const [hide, setHide] = useState(true)
    const [playerTwo,setPlayerTwo] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(null);
    const [resultType, setResultType] = useState(null)
    
    const history = useHistory();
    if(Object.keys(contText.playerOnePokemons).length === 0){
        history.replace('/game')
    };
    
    function goToFinishPage(){
        history.push('/game/finish');
    }
    
    function defineResult(brd,plOne,plTwo ){
        let plOneCount = plOne.length;
        let plTwoCount = plTwo.length;
        console.log(plOneCount,plTwoCount)
        brd.forEach(el=>{
            if(el.card.possession === "red"){
               return plTwoCount++;
            }
            if(el.card.possession === "green"){
                return plOneCount++;
            }
        });

        return [plOneCount, plTwoCount];
    }
    useEffect(()=>{
        const startPlay = setTimeout(()=>{
            return setSide( Math.ceil(Math.random() * 2))
        },3000)
        return ()=> clearTimeout(startPlay);
    },[]);
    async function fetchData() { 
        const res = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const request = await res.json();
        setBoard(request.data);
        setSteps(request.data.length)
        const resPlayerTwo = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const requestPlayerTwo = await resPlayerTwo.json();
       contText.onPlayerTwoPokemons([...requestPlayerTwo.data])
         setPlayerTwo(()=>{
             return requestPlayerTwo.data.map(pokemon=>({
                ...pokemon,
                possession:"red"
             }))
         })
    }
    useEffect(()=>{
        
         fetchData()
    },[fetchData])

    const handleClickOnBoard = async (position)=>{
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
            if(choiceCard.player === 1) {
                console.log(choiceCard, " === PLAYER ONE ")
                setSide(2)
                setPlayerOne(prv=>prv.filter(item=> item.id !== choiceCard.id));
            }
            if(choiceCard.player === 2) {
                setSide(1);
                setPlayerTwo(prv=>prv.filter(item=>item.id !== choiceCard.id));
                
            }
            setChoiceCard(null);
            setHide(false)
            setBoard(request.data)
            setSteps(prv=>{
                const count = prv - 1;
                return count
            })
        };
    }
    function defineWinner(a){
        let result = a === 'win' ? true:false;
        console.log(result, " === result ===")
        contText.onPlayerOneResult(result);
        return setResultType(a)

    }
    useEffect(()=>{
        if(steps === 0){
            const [count1,count2] = defineResult(board,playerOne,playerTwo);
            console.log(count1,count2);
            if(count1 > count2){
                 defineWinner('win')
            }else if(count1 < count2){
                 defineWinner('lose')
            }else{
                 defineWinner('draw')
            }
            
        }
    },[steps])

    return (
        
        <div className={s.root}>
            <ArrowComponent side = {side} hide = {hide}/>
            <div onClick = {()=> goToFinishPage()}><Result type = {resultType}  /></div>
		    <div className={s.playerOne}>
            {
                    <PokemonComponent 
                        //key = {playerOne.id}
                        player = {1}
                        cards = {playerOne}
                        onClickCard = {(card)=> {side === 1 &&  setChoiceCard(card); }}
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
               //key = {playerTwo.id}
               player = {2} 
               cards = {playerTwo}
               onClickCard = {(card)=> {side === 2 && setChoiceCard(card); console.log(side) }}/>
            </div>
        </div>
    );
};

export default BoardPage;