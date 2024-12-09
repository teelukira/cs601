import React from 'react';
import Contact from './Contact';
import TopSkills from './TopSkills';
import Certifications from './Certifications';
import Experience from './Experience';
import Education from './Education';

function Resume() {
  return (
    <div className="resume-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Contact />
        <TopSkills />
        <Certifications />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default Resume;