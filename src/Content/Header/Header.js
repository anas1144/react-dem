import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="">
      <header className="">
        <Link to='/'>HOME</Link>
        <br />
        <Link to='about'>ABOUT</Link>
        <br />
        <Link to='contact'>CONTACT</Link>
      </header>
    </div>
  );
}

export default Header;