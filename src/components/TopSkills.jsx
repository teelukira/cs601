import React from 'react';

function TopSkills() {
  const skills = ['Network Routing&Switching', 'MPLS VPN', 'Python', 'Java', 'Ansible'];

  return (
    <div className="section top-skills">
      <h2>Top Skills</h2>
      <ul>
      {skills.map((exp, index) => (
        <li key={index}>
          <span>{exp}</span>
        </li>
      ))}
    </ul>
    </div>
);
}
export default TopSkills;