import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {DiGithubFull} from 'react-icons/di';
import {GrHeroku} from 'react-icons/gr';

export default function Portfolio() {
  return (
  <section className='container portfolio'>
    <div className='mt-5 mb-5'>
    <h5 className='mb-0 mt-5 text-center'>View my</h5>
      <h1 className='mt-0 mb-5 text-center'>Portfolio & Projects</h1>
      <div className='portfolio-container'>
        <article className='doad portfolio-items'>
          <h3>Date on a Dime</h3>
          <a href='https://github.com/Jamesgit22/Date-on-a-Dime' target='_blank'><BsGithub size={25} className='portfolio-icons me-3'/></a>
          <a href='https://jamesgit22.github.io/Date-on-a-Dime/' target='_blank'><DiGithubFull size={25} className='portfolio-icons'/></a>
        </article>
        <article className='eventease portfolio-items'>
          <h3>Event Ease</h3>
          <a href='https://github.com/keelyybug/Event-Ease' target='_blank'><BsGithub size={25} className='portfolio-icons me-3'/></a>
          <a href='https://event-ease.herokuapp.com/' target='_blank'><GrHeroku size={25} className='portfolio-icons'/></a>
        </article>
        <article className='weather portfolio-items'>
          <h3>Weather App</h3>
          <a href='https://github.com/Ashleyg5/Weather-Forecast' target='_blank'><BsGithub size={25} className='portfolio-icons me-3'/></a>
          <a href='https://ashleyg5.github.io/Weather-Forecast/' target='_blank'><DiGithubFull size={25} className='portfolio-icons'/></a>
        </article>
        <article className='note portfolio-items'>
          <h3>Note Taker</h3>
          <a href='https://github.com/Ashleyg5/NoteTaker' target='_blank'><BsGithub size={25} className='portfolio-icons me-3'/></a>
          <a href='https://shielded-bastion-45810.herokuapp.com/' target='_blank'><GrHeroku size={25} className='portfolio-icons'/></a>
        </article>
        <article className='pwa portfolio-items'>
          <h3>PWA Text Editor</h3>
          <a href='https://github.com/Ashleyg5/PWA-Text-Editor' target='_blank'><BsGithub size={25} className='portfolio-icons me-3'/></a>
          <a href='https://just-another-text-editor.herokuapp.com/' target='_blank'><GrHeroku size={25} className='portfolio-icons'/></a>
        </article>
        <article className='social portfolio-items'>
          <h3>Social Network <br/> Back-end</h3>
          <a href='https://github.com/Ashleyg5/Social-Network' target='_blank'><BsGithub size={25} className='portfolio-icons me-3'/></a>
          <a href='https://drive.google.com/file/d/1_56HtjfN1ohTcQvb8es8jD64DEur1WbV/view' target='_blank'><DiGithubFull size={25} className='portfolio-icons'/></a>
        </article>
      </div>
    </div>
  </section>
  );
}
