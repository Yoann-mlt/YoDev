import React from 'react'
import '../CSS/CV.css'
import pizzaImg from '../images/pizza.png'
import four from '../images/four.png'
import pate from '../images/pate.jpeg'
import freshI from '../images/freshI.png'
import Ripples from 'react-ripples'
import Box from '@material-ui/core/Box';
import cocktail from '../images/cocktail.jpeg'
import spritz from '../images/spritz.jpeg'
import gin from '../images/gin.jpeg'
import gin2 from '../images/gin2.jpeg'
import NEGRONI from '../images/NEGRONI .jpeg'


export default function CV() {
    return(
        <div className='containHistory'>
        <br/>
        <br/>

       <h1 className='Assortements'> Qui sommes nous ?</h1>
       <Box sx={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: "#ffffff",}}>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px',  width:'1000px', height:'350px', backgroundColor:'#fff' }}>
                <div className='cook'>
                <img src={four} className="feuDeBois" alt="pizzaCards" />
                  <p className='TexteBlack'> <h3>Sonata, pourquoi Sonata?</h3> Parce qu’on a la musique dans la peau, <span className='valeur'> nous adorons la musique </span>, et nous sommes des <span className='valeur'> passionnés de la pizza </span>. Nous avons chacun de notre côté parcourue le monde a la recherche de la meilleure pizza, pour finalement se résoudre a ouvrir nos propres pizzerias, nous utilisons uniquement <span className='valeur'> des produits frais et de qualité </span>, choisie avec patience et amour!
                  Ce qui nous a amenés a ce projet fou en qui personne ne croyait, c’est notre détermination, on ne s’arrête jamais de s’améliorer, on apprend encore tous les jours et nous avons encore un long chemin à parcourir.</p>
                  </div>
                </Box>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px', width:'1000px', height:'350px', backgroundColor:'#fff' }}>
                <div className='freshFarine'>
                          <p className='TexteBlack'> <h3>L'idée du restaurant</h3>Nous avons été amené a rencontrer plusieurs <span className='valeur'> grands chefs pizzaiolos </span> qui on sut nous faire confiance. Ils ont on sut nous transmettre <span className='valeur'> leur savoir-faire </span> sans douter de nos compétences et de notre motivation. À force de remise en question c’est ce qui fait de SONATA ce qu’il est devenu aujourd’hui:  <span className='valeur'>une réussite fidèle au code de la  traditionnelle pizza napolitaine </span> avec une ambiance chaleureuse et amicale.
                  ‍
                  À très vite dans nos restaurants.</p>
                            <img src={pate} className="feuDeBois" alt="pizzaCards" />
                          </div>
                </Box>
                <Box className='insideBox' component="span" sx={{ p: 2, border: '1px solid #222', margin:'10px', width:'1000px', height:'350px', backgroundColor:'#fff' }}>
                <div className='cook'>
                  <img src={freshI} className="Ingredient" alt="pizzaCards" />
                  <p className='TexteBlack'><h3>La qualité des ingrédients</h3>Tous nos fromages sont <span className='valeur'> certifiés AOP </span>
        Notre huile d'olive est produite aux pieds des Alpilles en Provence</p>
                </div>
                </Box>
        </Box>
      </div>
    )
}