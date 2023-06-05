import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill, BsFillGrid1X2Fill, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { MdContactMail } from 'react-icons/md';

const NavTabs = ({ currentPage, handlePageChange }) => {

  return (
    <nav>
      <a
        href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        
      >
        <AiFillHome size={20} />
      </a>
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        <BsPersonFill size={20} />
      </a>
      <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
      >
        <BsFillGrid1X2Fill size={20} />
      </a>
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      >
        <BsFillFileEarmarkTextFill size={20} />
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        <MdContactMail size={20} />
      </a>
    </nav>
  );
};

export default NavTabs;