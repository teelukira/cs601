import React from 'react';

function Education() {
  const education = [
    {
      degree: 'Electrical and Electronic Engineering',
      school: 'University of Sungkyunkwan',
      duration: '2011 - 2017'
    },
    {
      degree: 'MS-CIS',
      school: 'Boston University MET',
      duration: '2022 - Present'
    }
  ];

  return (
    <div className="section education">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> - {edu.school} ({edu.duration})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;