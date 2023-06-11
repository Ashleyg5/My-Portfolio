import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs' 
import {GrMail} from 'react-icons/gr'

export default function Home() {
  return (
  <section className='container header_container' id='home'>
    <div className='text-center'>
      <header>
      <h5 className='home-small mt-5'>Hello, I'm</h5>
      <h1 className='home'>Ashley Giraldo</h1>
      <h5 className='home-small mt-4'>Fullstack Developer</h5>
      </header>
    </div>
    <div>
      <a href='#contact' className='scroll__down text-decoration-none'>Scroll Down</a>
    </div>
    <div className='header_socials'>
      <a href='https://github.com/Ashleyg5' target='_blank'><BsGithub size={20}/></a>
      <a href='https://linkedin.com/ashley-giraldo' target='_blank'><BsLinkedin size={20}/></a>
      <a href='mailto: ashleygiraldo5@hotmail.com'><GrMail size={20}/></a>
    </div>
  </section>
  );
}
