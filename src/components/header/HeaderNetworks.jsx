import React from 'react';

import './header.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const HeaderNetworks = () => {
  return (
    <div className="header__networks">
      <a href="https://www.linkedin.com/in/thomas-yu92/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Whoistomiki" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/+33664028866" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
    </div>
  );
};

export default HeaderNetworks;
