
import './App.css';
import Header from './components/header/Header'
import React from 'react';
import {  Routes ,Route, BrowserRouter } from 'react-router-dom';
import About from './components/header/pages/About';
import Home from './components/header/pages/Home';
import PageNotFound from './components/header/pages/Pagenotfound';
import DropdownButtonProfile from './components/header/pages/ProfilePage'

function App() {
 
  return (
    <div className="App">

 <BrowserRouter>
      <Header/>
    
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route  exact path="/about" element={<About/>} />
        <Route  exact path="/profile" element={<DropdownButtonProfile/> } />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
   
      </BrowserRouter>
    </div>
  );
}

export default App;
