import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="Logo">
      <h1>One Calc to Compute them ALL</h1>
    </div>
    <nav>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/Quote">Quote</Link>
      </li>
    </nav>
  </header>
);

export default Header;
