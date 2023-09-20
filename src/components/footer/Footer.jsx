import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Thomas YU</a>
      <ul className="permalinks">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À Propos</a></li>
        <li><a href="#experiences">Expériences</a></li>
        <li><a href="#skills">Soft Skills</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/thomas-yu92/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Whoistomiki" target="_blank"  rel="noreferrer"><BsGithub /></a>   
      </div>
      <div className="footer__copyright">
        <small>Thomas YU 2023 Tous droits réservés</small>
      </div>
    </footer>
  )
}

export default Footer
