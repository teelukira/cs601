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

        {/* Resume Download Button */}
        <div className="download-resume">
          <a 
            href="/resume_ghryou_241209.pdf" /* Replace with the actual path to your resume PDF */
            download="Resume.pdf" /* Suggested file name for download */
            className="download-button"
          >
            Download Resume
          </a>
        </div>
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