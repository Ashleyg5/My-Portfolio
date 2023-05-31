import React from 'react';
import CV from '../../assets/CV.pdf'
import CVimg from '../../assets/CV.jpg'

export default function Resume() {
  return (
  <section className='container'>
    <div className='text-center'>
      <h1 className='mt-3 mb-4'>Resume</h1>
    </div>
    <div className='d-flex flex-column'>
      <img src={CVimg} alt="CV" width="600" height="700"></img>
    <div className='m-3'>
      <a href={CV} download className='btn me-4'>Download CV</a>
      <a type='link' target='_blank' href='https://drive.google.com/file/d/1gorcsnL-mn8nn8PssvGzg5pclXD7ErCW/view?usp=drive_link' className='btn'>View CV</a>
      </div>
    </div>
  </section>
  );
}
