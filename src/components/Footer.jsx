import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Geunho Ryou. All Rights Reserved.</p>
      <div style={socialLinksStyle}>
        <a href="https://github.com/teelukira/cs601" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/geunho-ryou-767044166/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
  marginTop: '50px',
};

const socialLinksStyle = {
  marginTop: '10px',
};

const linkStyle = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
};

export default Footer;