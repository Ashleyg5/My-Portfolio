import React from 'react';
import CV from '../../assets/CV.pdf'
import {FiCheckCircle} from 'react-icons/fi'

export default function Resume() {
  return (
    <section className='container resume'>
      <div className='text-center'>
      <h5 className='mb-0 mt-5 text-center'>View my</h5>
        <h1 className='mt-0 mb-4'>Resume & Skills</h1>
      </div>
      <div>
        <div className='col text-center mb-5'>
          <a type='link' target='_blank' href='https://drive.google.com/file/d/1gorcsnL-mn8nn8PssvGzg5pclXD7ErCW/view?usp=drive_link' className='btn me-4'>View CV</a>
          <a href={CV} download className='btn'>Download CV</a>
        </div>
        <div className='col container skills-container text-center'>
          <div className='frontend'>
            <h4 className='resumeheadtxt'>Front-end Development</h4>
            <div className='resume-content'>
              <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>HTML</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>CSS</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>JavaScript</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>React</h4>
                <small className='resumetxtsm'>Intermediate</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>Bootstrap</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>Bulma</h4>
                <small className='resumetxtsm'>Basic</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>Tailwind</h4>
                <small className='resumetxtsm'>Basic</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>Testing/Jest</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
            </div>
          </div>
          <div className='backend mb-3'>
            <h4 className='resumeheadtxt'>Back-end Development</h4>
            <div className='resume-content'>
              <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>J-Query</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>Express</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>React</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>Node</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>MongoDB</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>MERN</h4>
                <small className='resumetxtsm'>Intermediate</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>SQL</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
                <article>
                <FiCheckCircle className='checks'/>
                <h4 className='resumetxt'>Git</h4>
                <small className='resumetxtsm'>Experienced</small>
                </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
