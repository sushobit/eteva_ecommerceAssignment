import React, { useState } from 'react';
import './index.css'; 

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">GADWATCH</a>
      <nav className={isNavOpen ? 'nav open' : 'nav'}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/aboutus">About US</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleNav}>
        <div className={isNavOpen ? 'icon open' : 'icon'}></div>
      </div>
    </header>
  );
};

export default Header;
