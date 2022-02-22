import React from 'react'
import '../CSS/home.css'
import pizzaImg from '../images/pizza.png'
import feuDeBois from '../images/feuDeBois.jpeg'
import pate from '../images/pate.jpeg'
import freshI from '../images/freshI.png'
import Ripples from 'react-ripples'
import Box from '@material-ui/core/Box';
import cocktail from '../images/cocktail.jpeg'
import spritz from '../images/spritz.jpeg'
import gin from '../images/gin.jpeg'
import gin2 from '../images/gin2.jpeg'
import NEGRONI from '../images/NEGRONI .jpeg'





export default function Home() {

    function Item() {
        return (
        <div>
          <img src={pizzaImg} className="pizzaCards" alt="pizza" />
          <h3> LA MARGHERITA </h3>
          <p>Sauce tomate San Marzano AOP, <br/>mozza fior di latte, <br/>basilic frais, huile d’olive</p>
          <Ripples className='rip'>
            <button type="button" className="btnBoisson">
                Order
            </button>
          </Ripples>
        </div>
        );
      }

      function Item2() {
        return (
        <div>
          <img src={pizzaImg} className="pizzaCards" alt="pizza" />
          <h3> LA MARINARA </h3>
          <p>Sauce tomate San Marzano AOP, ail, <br/> basilic frais, origan, huile d olive</p>
          <Ripples className='rip'>
            <button type="button" className="btnBoisson">
                Order
            </button>
          </Ripples>
        </div>
        );
      }

      function Item3() {
        return (
        <div>
          <img src={pizzaImg} className="pizzaCards" alt="pizza" />
          <h3> LA MELANCHOIS </h3>
          <p>Sauce tomate San Marzano AOP,anchois,<br/> câpres, olives, basilic frais,<br/> huile d’olive</p>
          <Ripples className='rip'>
            <button type="button" className="btnBoisson">
                Order
            </button>
          </Ripples>
        </div>
        );
      }

      function Item4() {
        return (
        <div>
          <img src={pizzaImg} className="pizzaCards" alt="pizza" />
          <h3> LA BUFALLA BILL </h3>
          <p>Sauce tomate San Marzano AOP,mozza di Bufala,<br/> basilic frais, huile d’olive</p>
          <Ripples className='rip'>
            <button type="button" className="btnBoisson">
                Order
            </button>
          </Ripples>
        </div>
        );
      }

      function Item5() {
        return (
        <div>
          <img src={pizzaImg} className="pizzaCards" alt="pizza" />
          <h3> LA PUISSANCE 4 </h3>
          <p>Gorgonzola, Tallegio, mozzaFior di Latte, <br/> parmesan, basilic frais, huile dolive </p>
          <Ripples className='rip'>
            <button type="button" className="btnBoisson">
                Order
            </button>
          </Ripples>
        </div>
        );
      }

      function Item6() {
        return (
        <div>
          <img src={pizzaImg} className="pizzaCards" alt="pizza" />
          <h3> LA CALORE </h3>
          <p>Sauce tomate SanMarzano AOP, salamipiccante,<br/> fior di latte, basilic frais, huile d'olive</p>
          <Ripples className='rip'>
            <button type="button" className="btnBoisson">
                Order
            </button>
          </Ripples>
        </div>
        );
      }

      function Item7() {
        return (
        <div>
          <img src={pizzaImg} className="pizzaCards" alt="pizza" />
          <h3> LA VEGETA (RIEN) </h3>
          <p>Sauce tomate SanMarzano AOP, légumesdu jour,<br/> fior di latte diAgerola, basilic frais,<br/>huile d'olive</p>
          <Ripples className='rip'>
            <button type="button" className="btnBoisson">
                Order
            </button>
          </Ripples>
        </div>
        );
      }



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
        <div className="App">
          <header className="App-header">
            <img src={pizzaImg} className="App-logo" alt="logo" />
            <h1 className='title'>La Pizza de YOANN</h1>
            <Ripples>
              <button type="button" className="btnBoisson">
                Choose your pizza
              </button>
            </Ripples>
          </header>
          <div className='containCards'>
          <h1 className='Assortements'> Nos pizzas</h1>
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


        <div className='containBoissons'>
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

        <div className='containHistory'>
          <br/>
          <br/>
         <h1 className='Assortements'> Qui sommes nous ?</h1>
          <div className='cook'>
          <img src={feuDeBois} className="feuDeBois" alt="pizzaCards" />
          <p className='TexteBlack'>Sonata, pourquoi Sonata? Parce qu’on a la musique dans la peau, nous adorons la musique, et nous sommes des passionnés de la pizza. Nous avons chacun de notre côté parcourue le monde a la recherche de la meilleure pizza, pour finalement se résoudre a ouvrir nos propres pizzerias, nous utilisons uniquement des produits frais et de qualité, choisie avec patience et amour!

Ce qui nous a amenés a ce projet fou en qui personne ne croyait, c’est notre détermination, on ne s’arrête jamais de s’améliorer, on apprend encore tous les jours et nous avons encore un long chemin à parcourir.</p>
        </div>
        <div className='freshFarine'>
        <p className='TexteBlack'>Nous avons été amené a rencontrer plusieurs grands chefs pizzaiolos qui on sut nous faire confiance. Ils ont on sut nous transmettre leur savoir-faire sans douter de nos compétences et de notre motivation. À force de remise en question c’est ce qui fait de SONATA ce qu’il est devenu aujourd’hui: une réussite fidèle au code de la  traditionnelle pizza napolitaine avec une ambiance chaleureuse et amicale.
‍
À très vite dans nos restaurants.</p>
          <img src={pate} className="feuDeBois" alt="pizzaCards" />
        </div>
        <div className='cook'>
          <img src={freshI} className="Ingredient" alt="pizzaCards" />
          <p className='TexteBlack'>Tous nos fromages sont certifiés AOP
Notre huile d'olive est produite aux pieds des Alpilles en Provence</p>
        </div>
        </div>
        <div className='containContact'>
          <h1> Nous contacter </h1>
          <br/> <br/>
          <div className='form'>

          <form className='form'>
            <label >
                Prenom :
                <input  className='formLabel'type="text" name="name" />
            </label>
            <br/> <br/>
            <label>
                Nom :   
                <input  className='formLabel'type="text" name="name" />
            </label>
            <br/> <br/>
            <label>
                mail : 
                <input className='formLabel' type="text" name="name" />
            </label>
            <br/> <br/>
            <label>
                commande : 
            <textarea className='formLabel'></textarea>
            </label>
            <br/> <br/>
            <input type="submit" value="Envoyer" />
            </form>

          </div>
          <br/>
          <br></br>
        </div>
        <div className='footer'>
        <h2>Made with love by Yoann</h2>
        </div>
        </div>
      );
}