import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Network Engineer',
      company: 'SKTelecom',
      duration: '2017 - Present',
      location: 'Jung-gu, Seoul, Korea',
      description: 'Worked as an engineer in wireline networks for a telecommunications company, operating LTE and 5G services over carrier-grade IP networks, MPLS VPNs, and MULTICAST VPNs.'
    },
    {
      role: 'Intern',
      company: 'POSCO',
      duration: 'July 2016 - August 2016 (2 months)',
      location: 'Pohang, Gyeongsangbuk-do, Korea',
      description: 'Worked as an intern, took basic steelmaking courses and assisted with clerical duties in the EMC department.'
    }
  ];

  return (
    <div className="section experience">
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <strong>{exp.role}</strong> - {exp.company} ({exp.duration}) {exp.location}
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;