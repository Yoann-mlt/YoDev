import React from 'react'
import '../CSS/contact.css'


export default function CV() {
    return(
        <div className='containContactt'>
            <br/>
            <br/>
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
    )
}