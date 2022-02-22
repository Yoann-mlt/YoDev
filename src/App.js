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
import Contact from './Pages/contact'
import './CSS/App.css'



function App() {

  return (
    <div style={{
      backgroundColor: "#2a2a2a",
    }}>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/boissons' exact element={<Yoann/>} />
          <Route path='/propos' exact element={<CV/>} />
          <Route path='/Pizza' exact element={<Projet/>} />
          <Route path='/Contact' exact element={<Contact/>} />
        </Routes>
   </BrowserRouter>
   </div>
  );
};

export default App;