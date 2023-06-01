import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';
import {BsFillGrid1X2Fill} from 'react-icons/bs';
import {BsFillFileEarmarkTextFill} from 'react-icons/bs';
import {MdContactMail} from 'react-icons/md';
import { useState } from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a 
        href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
      >
        <AiFillHome size={20} onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}/>
      </a>
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        <BsPersonFill size={20} onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}/>
      </a>
      <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <BsFillGrid1X2Fill size={20} onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}/>
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          <BsFillFileEarmarkTextFill size={20} onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}/>
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <MdContactMail size={20} onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}/>
        </a>
    </nav>
  );
}

export default NavTabs;
