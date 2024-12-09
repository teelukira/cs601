import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/interests" style={{ color: '#fff', textDecoration: 'none' }}>Interests</Link></li>
        <li><Link to="/resume" style={{ color: '#fff', textDecoration: 'none' }}>Resume</Link></li>
        <li><Link to="/gallery" style={{ color: '#fff', textDecoration: 'none' }}>Gallery</Link></li>
        <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;