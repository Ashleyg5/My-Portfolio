import React, { useState } from 'react';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import NavTabs from './components/NavTabs'

export default function ScrollPage() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="scroll-page">
      <NavTabs
       currentPage={currentPage} handlePageChange={handlePageChange}
      />
        <Home/>
        <br />
        <br />
        <About />
        <br />
        <br />
        <Portfolio />
        <br />
        <br />
        <Resume />
        <br />
        <br />
        <Contact />
        <br />
        <br />
    </div>
  );
};

