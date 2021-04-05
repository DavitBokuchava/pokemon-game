import React from 'react';
import { 
  useRouteMatch,
  Route,
  Switch,
  Redirect,
  useLocation } from 'react-router-dom';
import cls from 'classnames';
import HomePage from './routes/HomePage';
import GamePage from './routes/GamePage'
import ContactPage from './routes/ContactPage';
import AboutPage from './routes/AboutPage';
import MenuHeader from './components/MenuHeader';
import NotFoundPage from './routes/NotFoundPage';
import Footer from './components/Footer';
import style from './app.module.css';
import { FirebaseContext}  from './context/firebaseContext'
import FirebaseClass  from './service/firebase'



 const App = () => { 
  let match = useRouteMatch('/');
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board'
  console.log(match)
 return (
   < FirebaseContext.Provider value = {FirebaseClass}>
      <Switch>
        <Route path='/404'  component = { NotFoundPage } />
        <Route>
            <>
              <MenuHeader bgActive = {!isPadding } />
              <div className = {cls(style.wrap,{
                [style.isHomePage]: isPadding
              }) }>
              <Switch>
                <Route path = '/' exact component = { HomePage} />
                <Route path = '/game' component = { GamePage} />
                <Route path = '/about' component = { AboutPage} />
                <Route path = '/contact'  component = { ContactPage} />
                <Route   render = {()=>(
                  <Redirect to= '/404' />)
                } />
              </Switch>
              
              </div>  
              <Footer />
            </>
        </Route>
      </Switch>
      </FirebaseContext.Provider>
 )
}

export default App;




/*
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
  
*/