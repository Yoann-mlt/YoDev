import React, { useState } from 'react';
import { Button } from './button';
import {
  Link
} from "react-router-dom";
import '../CSS/navbar.css';
import Dropdown from './dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Yoann's Pizzas
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='/Pizza'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pizzas
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/boissons'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Boissons
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/propos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              A propos de nous
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;