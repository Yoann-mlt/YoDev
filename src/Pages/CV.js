import React from 'react'
import '../CSS/CV.css'
import pizzaImg from '../images/pizza.png'
import feuDeBois from '../images/feuDeBois.jpeg'
import pate from '../images/pate.jpeg'
import freshI from '../images/freshI.png'
import Ripples from 'react-ripples'
import Box from '@material-ui/core/Box';
import cocktail from '../images/cocktail.jpeg'
import braise from '../images/braise.jpeg'


export default function CV() {
    return(
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
    )
}