import React , {useState} from 'react';
import Navbar from './components/navbar/navbar';
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/home/home'
import Video from './Pages/video/video';
  
const App = () => {

  const [sidebar , setSidebar] = useState(true);


  return (
    <div className="App">
      <Navbar setSidebar = {setSidebar}/>
      <Routes>
        <Route path = '/' element = {<Home sidebar = {sidebar}/>}/>
        <Route path = '/video/:categoryId/:videoId' element = {<Video/>}/> 
      </Routes>
    </div>
  );
}

export default App;
