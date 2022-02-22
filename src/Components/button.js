import React from "react";
import {Link} from 'react-router-dom'
import '../CSS/button.css'

export function Button() {
    return(
        <Link to='/Contact'>
            <button className='btnn'>
               Contact
            </button>
        </Link>
    )
}