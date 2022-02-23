import React from 'react'
import '../CSS/projet.css'
import pizzaImg from '../images/pizza.png'
import Ripples from 'react-ripples'
import Box from '@material-ui/core/Box';


export default function Projet() {

  function Item() {
    return (
    <div>
      <img src={pizzaImg} className="pizzaCards" alt="pizza" />
      <h3> LA MARGHERITA </h3>
      <p>Sauce tomate San Marzano AOP, <br/>mozza fior di latte, <br/>basilic frais, huile d’olive</p>
    </div>
    );
  }

  function Item2() {
    return (
    <div>
      <img src={pizzaImg} className="pizzaCards" alt="pizza" />
      <h3> LA MARINARA </h3>
      <p>Sauce tomate San Marzano AOP, ail, <br/> basilic frais, origan, huile d olive</p>
    </div>
    );
  }

  function Item3() {
    return (
    <div>
      <img src={pizzaImg} className="pizzaCards" alt="pizza" />
      <h3> LA MELANCHOIS </h3>
      <p>Sauce tomate San Marzano AOP,anchois,<br/> câpres, olives, basilic frais,<br/> huile d’olive</p>
    </div>
    );
  }

  function Item4() {
    return (
    <div>
      <img src={pizzaImg} className="pizzaCards" alt="pizza" />
      <h3> LA BUFALLA BILL </h3>
      <p>Sauce tomate San Marzano AOP,mozza di Bufala,<br/> basilic frais, huile d’olive</p>
    </div>
    );
  }

  function Item5() {
    return (
    <div>
      <img src={pizzaImg} className="pizzaCards" alt="pizza" />
      <h3> LA PUISSANCE 4 </h3>
      <p>Gorgonzola, Tallegio, mozzaFior di Latte, <br/> parmesan, basilic frais, huile dolive </p>
    </div>
    );
  }

  function Item6() {
    return (
    <div>
      <img src={pizzaImg} className="pizzaCards" alt="pizza" />
      <h3> LA CALORE </h3>
      <p>Sauce tomate SanMarzano AOP, salamipiccante,<br/> fior di latte, basilic frais, huile d'olive</p>
    </div>
    );
  }

  function Item7() {
    return (
    <div>
      <img src={pizzaImg} className="pizzaCards" alt="pizza" />
      <h3> LA VEGETA (RIEN) </h3>
      <p>Sauce tomate SanMarzano AOP, légumesdu jour,<br/> fior di latte diAgerola, basilic frais,<br/>huile d'olive</p>
    </div>
    );
  }

    return(
        <div className='containCards'>
            <br/>
        <br/>
        <h1 className='pizzas'> Nos pizzas</h1>
      <Box sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: '#ffffff',}}>
               <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <Item> Item 1</Item>
                </Box>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <Item2> Item 1</Item2>
                </Box>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <Item3> Item 1</Item3>
                </Box>
                <Box  className='insideBox'component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <Item4> Item 1</Item4>
                </Box>
                <Box  className='insideBox'component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <Item5> Item 1</Item5>
                </Box>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <Item6> Item 1</Item6>
                </Box>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px' }}>
                    <Item7> Item 1</Item7>
                </Box>
      </Box>
      <br/> <br/>
      </div>
    )
}