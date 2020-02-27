import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Todo</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">Todo's</NavLink></li>
          <li><NavLink to="/about">Info</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;