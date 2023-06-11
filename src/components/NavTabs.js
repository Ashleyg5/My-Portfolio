import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill, BsFillGrid1X2Fill, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { MdContactMail } from 'react-icons/md';

const NavTabs = ({ currentPage, handlePageChange }) => {

  return (
    <nav>
      <a
        href="#home"
      >
        <AiFillHome 
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        size={20} />
      </a>
      <a
        href="#about"
      >
        <BsPersonFill 
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        size={20} />
      </a>
      <a
        href="#portfolio"
      >
        <BsFillGrid1X2Fill
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
        size={20} />
      </a>
      <a
        href="#resume"
      >
        <BsFillFileEarmarkTextFill
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
        size={20} />
      </a>
      <a
        href="#contact"
      >
        <MdContactMail
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
        size={20} />
      </a>
    </nav>
  );
};

export default NavTabs;