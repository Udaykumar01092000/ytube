import React from 'react';
import Navbar from './components/navbar/navbar';
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video'; 
  
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/video/:categoryId/:videoId' element = {<Video/>}/> 
      </Routes>
    </div>
  );
}

export default App;
