import React from 'react';

const Services = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80",
      title: "Ayurvedic Massage",
      description: "Relax and rejuvenate with traditional herbal massage therapies tailored to your constitution."
    },
    {
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
      title: "Herbal Medicine",
      description: "Natural herbal formulations prepared as per classic Ayurvedic principles to support healing."
    },
    {
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80",
      title: "Health Consultation",
      description: "Personalized Ayurvedic health consultation for diet, lifestyle, and treatment plans."
    }
  ];

  return (
    <section id="services" className="fade-section">
      <h3>Our Services</h3>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
