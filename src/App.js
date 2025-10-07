import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'gallery', 'testimonials', 'contact'];
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      
      // Show/hide back to top button
      setShowBackToTop(scrollPos > 300);
      
      // Update active section
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          if (section.offsetTop <= scrollPos + 100 && 
              section.offsetTop + section.offsetHeight > scrollPos + 100) {
            setActiveSection(id);
          }
        }
      });

      // Add visible class to sections in viewport
      document.querySelectorAll('.fade-section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85;
        if (isInViewport) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header />
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
    </div>
  );
}

export default App;
