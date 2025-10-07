import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section id="contact" className="contact fade-section">
      <h3>Contact & Address</h3>
      <p><strong>Panchgiri Ayurveda</strong></p>
      <p>WALIVADE, SAHYADRI CHEM, WALIVADE, NEAR HOTEL JAIBHAWANI, CHINCHWAD ROAD, WALIVADE, MAHARASHTRA, KOLHAPUR, Pin 416119</p>
      <p>WALIVADE, MAHARASHTRA 416119</p>
      <p>Phone: 9371102470</p>
      <p>Email: panchgiriayurveda@gmail.com</p>

      <form className="newsletter" onSubmit={handleNewsletterSubmit}>
        <label htmlFor="email" style={{ fontWeight: '700' }}>
          Subscribe to our Newsletter
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Contact;
