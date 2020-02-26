import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Todo</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/">Todo's</a></li>
          <li><a href="/">Info</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;