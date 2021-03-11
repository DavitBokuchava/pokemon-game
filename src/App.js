import React from 'react';
//import logo from './logo.svg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import Footer from './components/footer/Footer';
import './index.css';
//import './App.css';

function App() {
  //const [urlBg, setUrlBg] = React.useState({})
  const title = 'This is title';
  const descr ='This is Description!'; 
  const colorBg = '#99FFFF';

  return (
    <div className="App">
       <Header title = { title } descr = { descr } />
        <Layout 
          title = { title } 
          descr = { descr } 
          urlBg = {bg2}  />
          <Layout 
          title = { title } 
          descr = { descr }
          colorBg = { colorBg }  />
          <Layout 
          title = { title } 
          descr = { descr }
          urlBg = {bg3}
          colorBg = { colorBg }  />
       <Footer/>
      
    </div>
  );
}

export default App;
