import React from 'react';
import '../CSS/Yoann.css'
import pizzaImg from '../images/pizza.png'
import feuDeBois from '../images/feuDeBois.jpeg'
import pate from '../images/pate.jpeg'
import freshI from '../images/freshI.png'
import Ripples from 'react-ripples'
import Box from '@material-ui/core/Box';
import cocktail from '../images/cocktail.jpeg'
import braise from '../images/braise.jpeg'
import spritz from '../images/spritz.jpeg'
import gin from '../images/gin.jpeg'
import gin2 from '../images/gin2.jpeg'
import NEGRONI from '../images/NEGRONI .jpeg'

export default function Yoann() {

  function ItemBoisson() {
    return (
    <div>
         <img src={cocktail} className="cokctailCards" alt="pizza" />
      <h3> AMARETTO SOUR </h3>
      <p>Amaretto, citron vert, Angostura</p>
      <Ripples className='rip'>
        <button type="button" className='btnBoisson'>
            Order
        </button>
      </Ripples>
    </div>
    );
  }

  function ItemBoisson2() {
    return (
    <div>
         <img src={spritz} className="cokctailCards" alt="pizza" />
      <h3> SPRITZ </h3>
      <p>Aperol, Prosecco, eau gazeuse.</p>
      <Ripples className='rip'>
        <button type="button" className='btnBoisson'>
            Order
        </button>
      </Ripples>
    </div>
    );
  }

  function ItemBoisson3() {
    return (
    <div>
         <img src={gin} className="cokctailCards" alt="pizza" />
      <h3> GIN TONIC </h3>
      <p>La base</p>
      <Ripples className='rip'>
        <button type="button" className='btnBoisson'>
            Order
        </button>
      </Ripples>
    </div>
    );
  }

  function ItemBoisson4() {
    return (
    <div>
         <img src={gin2} className="cokctailCards" alt="pizza" />
      <h3> GIN BASILIC </h3>
      <p>Gin, basilic, citron vert.</p>
      <Ripples className='rip'>
        <button type="button" className='btnBoisson'>
            Order
        </button>
      </Ripples>
    </div>
    );
  }

  function ItemBoisson5() {
    return (
    <div>
         <img src={NEGRONI} className="cokctailCards" alt="pizza" />
      <h3> NEGRONI</h3>
      <p>Gin, Vermouth, Campari.</p>
      <Ripples className='rip'>
        <button type="button" className='btnBoisson'>
            Order
        </button>
      </Ripples>
    </div>
    );
  }

  return (
    <div className='containBoissons'>
      <br/>
        <br/>
          <h1 className='Assortements'> Nos boisson</h1>
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: "#ffffff",}}>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <ItemBoisson > Item 1</ItemBoisson>
                </Box>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <ItemBoisson2> Item 1</ItemBoisson2>
                </Box>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <ItemBoisson3> Item 1</ItemBoisson3>
                </Box>
                <Box  className='insideBox'component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <ItemBoisson4> Item 1</ItemBoisson4>
                </Box>
                <Box  className='insideBox'component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <ItemBoisson5> Item 1</ItemBoisson5>
                </Box>
        </Box>
        </div>
  );
}