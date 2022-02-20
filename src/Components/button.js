import React from "react";
import {Link} from 'react-router-dom'
import '../CSS/button.css'

export function Button() {
    return(
        <Link to='sign-up'>
            <button className='btn'>
               Un projet ?
            </button>
        </Link>
    )
}