import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './ProtfolioContainer/Home/Home';
import Project from './Project/Project';
import React, { Component }  from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path = '*' element='404 please back the Home Page'></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
