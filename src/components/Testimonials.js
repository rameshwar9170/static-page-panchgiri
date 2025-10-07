import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The Ayurvedic treatments at Panchgiri Ayurveda helped me regain my health naturally. Highly recommended!",
      author: "S. Patil"
    },
    {
      text: "Authentic and caring service with knowledgeable practitioners. Great experience overall.",
      author: "M. Joshi"
    },
    {
      text: "Personalized health consultation and herbal remedies made a real difference in my wellbeing.",
      author: "R. Deshmukh"
    }
  ];

  return (
    <section id="testimonials" className="fade-section">
      <h3>Testimonials</h3>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>"{testimonial.text}"</p>
            <strong>- {testimonial.author}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
