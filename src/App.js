import React from 'react';
import HomePage from './routes/HomePage';
import GamePage from './routes/GamePage'


const App = () => { 
  const [page, setPage] = React.useState('HomePage') 

  const handlePage = (pg)=>{
    return setPage(pg)
  }

  switch (page) {
    case "HomePage":
      return <HomePage handlePage = {handlePage} />
    case "GamePage":
      return <GamePage handlePage = {handlePage} />
    default:
      return <HomePage handlePage = {handlePage} />
    }
  
}

export default App;


