import React from 'react';
import CTA from './CTA';
import HeaderNetworks from './HeaderNetworks';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Bonjour, je suis</h2>
        <h1>Thomas YU</h1>
        <h3 className="text-light">Développeur Web Full-Stack Junior</h3>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderNetworks/>
      </div>
    </header>
  );
};

export default Header;