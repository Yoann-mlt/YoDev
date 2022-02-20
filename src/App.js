import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/home'
import Navbar from './Components/navbar'
import Yoann from './Pages/Yoann'
import CV from './Pages/CV'
import Projet from './Pages/projet'
import './CSS/App.css'



function App() {

  return (
    <div style={{
      backgroundColor: "#252525",
    }}>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Yoann' exact element={<Yoann/>} />
          <Route path='/CV' exact element={<CV/>} />
          <Route path='/Projet' exact element={<Projet/>} />
        </Routes>
   </BrowserRouter>
   </div>
  );
};

export default App;