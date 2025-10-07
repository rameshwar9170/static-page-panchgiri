import React from 'react';

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav id="navbar">
      {navItems.map(item => (
        <a 
          key={item.id}
          href={`#${item.id}`} 
          className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
