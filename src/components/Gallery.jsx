import React from 'react';

function Gallery() {
  const images = [
    '/images/redhat.jpg',
    '/images/freshman.jpg',
    '/images/snowman.jpg',
  ];

  return (
    <section id="gallery" style={{ padding: '50px' }}>
      <h2>Photo Gallery</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index + 1}`} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;