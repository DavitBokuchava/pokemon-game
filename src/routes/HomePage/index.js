import React from 'react';
import { cards } from '../../cards/index';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import st from'./style.module.css';
import PockemonCard from '../../components/PockemonCard';

function HomePage({handlePage}) { 
  const [newCards,setCards] = React.useState([...cards])
  const  title = 'This is title'
  const colorBg = '#99FFFF';
  function addActiveTocard(id){

    return setCards(prev=>([...prev.filter(el=>{
      if(el.id === id){
           el['isActive'] = el.hasOwnProperty("isActive")   ? !el['isActive'] : true;
        }
        return true;
      }
    )]));
  }
  return (
    <>
        
       <Header title = { title} descr = 'This is Description!' handlePage = {handlePage} />
        <Layout 
          title = { title } 
          urlBg = { bg2 }  >
            <p>In the game two players face off against one another, 
              one side playing as "blue", the other as "red" on a 3x3 grid.
              Each player has five cards in a hand and the aim is to capture the opponent's cards 
              by turning them into the player's own color of red or blue.</p>
          </Layout>
          <Layout 
          title = "Cards" 
          colorBg = { colorBg } 
           >
            <div className = {st.flex}>
              {
                newCards.map((item)=>< PockemonCard 
                  onClick = {()=>console.log("avoooeeee")}
                  key = {item.id} 
                  name = {item.name} 
                  img = {item.img} 
                  id = {item.id} 
                  type = {item.type} 
                  values =  {item.values}
                  addActiveTocard = { addActiveTocard }
                  isActive = {!!item.isActive === true ? item.isActive : ''} />)
              }
            </div>
          </Layout>
          <Layout 
          title = {title}
          urlBg = {bg3} >
            <p>To win, a majority of the total ten cards played 
              (including the one card that is not placed on the board)
               must be of the player's card color. To do this, the player 
               must capture cards by placing a card adjacent to an opponent's card 
               whereupon the 'ranks' of the sides where the two cards touch will be compared. 
               If the rank of the opponent's card is higher than the player's card, 
               the player's card will be captured and turned into the opponent's color. 
              If the player's rank is higher, the opponent's card will be captured and changed into 
              the player's color instead. </p>
          </Layout>
       
      
    </>
  );
}

export default HomePage;


//     let arr = [];
//     newCards.map(el=>{
         
//       return el.id === id ? arr.push({...a,el['isActive'] : el.hasOwnProperty("isActive")   ? !el['isActive'] : true}) :arr.push(a);
//     })
//  //console.log(arr)
//    return setCards([...arr]);