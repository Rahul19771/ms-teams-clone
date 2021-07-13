import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.css';

function Header() {
  return (

    <header class="header-login-signup">
      
      <div class="header-limiter">
        
        {/* logo */}
        
        {/* <img src={logo} alt="" /> */}

        <h1><a href="/">MS Teams Clone </a></h1>

        <nav>
          <Link to="/">Home</Link>
          <a class="selected"><Link to="/">Features</Link></a>
        </nav>

        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>

      </div>

    </header>
  );
}

export default Header;