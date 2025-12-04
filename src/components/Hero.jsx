import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Bonjour, je suis <span className="highlight">Mehdi</span>
          </h1>
          <p className="hero-subtitle">Développeur Full Stack</p>
          <p className="hero-description">
            Je crée des applications web modernes et performantes avec passion et créativité
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('projects')}
            >
              Voir mes projets
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('contact')}
            >
              Me contacter
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="tech-icon">⚛️</span>
            <span className="tech-name">React</span>
          </div>
          <div className="floating-card card-2">
            <span className="tech-icon">📱</span>
            <span className="tech-name">Responsive</span>
          </div>
          <div className="floating-card card-3">
            <span className="tech-icon">🚀</span>
            <span className="tech-name">Performance</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
