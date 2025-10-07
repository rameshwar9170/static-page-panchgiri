import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80",
      alt: "Ayurveda Herbs"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      alt: "Ayurvedic Oils"
    },
    {
      src: "https://images.unsplash.com/photo-1501183638714-7f3a2a2ab0a8?auto=format&fit=crop&w=400&q=80",
      alt: "Ayurvedic Clinic"
    }
  ];

  return (
    <section id="gallery" className="fade-section">
      <h3>Gallery</h3>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
