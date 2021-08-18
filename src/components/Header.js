import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="flex">
    <div className="Logo">
      <h1>One Calc to Compute them ALL</h1>
    </div>
    <nav className="flex">
      <li>
        <Link to="/">Home</Link>
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
