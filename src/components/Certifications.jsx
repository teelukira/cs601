import React from 'react';

function Certifications() {
  const certifications = [
    'CCIE Enterprise Infrastructure #63100',
    'Azure Fundamentals #H528-8455',
    'Azure Administrator Associate #H550-0601',
    'Huawei Certification Routing&Switching Carrer IP #01020010844780765761121302',
  ];

  return (
    <div className="section certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;