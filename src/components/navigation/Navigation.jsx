import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdBriefcase } from 'react-icons/io';
import { BiMessageSquareDetail } from 'react-icons/bi';
import {ImFolderOpen} from 'react-icons/im';
import {GiLifeBuoy} from 'react-icons/gi';

import './navigation.css';

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experiences" onClick={()=> setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><GiLifeBuoy /></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><IoMdBriefcase /></a>
      <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><ImFolderOpen /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navigation;
