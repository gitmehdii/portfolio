import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '📜' },
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Git', level: 85, icon: '🔀' },
    { name: 'TypeScript', level: 75, icon: '📘' },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">À Propos</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Développeur Passionné</h3>
            <p>
              Je suis un développeur full stack passionné par la création d'applications web 
              modernes et performantes. Avec une forte expertise en React et les technologies 
              web modernes, je transforme des idées en solutions numériques élégantes.
            </p>
            <p>
              Mon approche du développement combine créativité, attention aux détails et 
              meilleures pratiques pour créer des expériences utilisateur exceptionnelles.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projets réalisés</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction client</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Compétences</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
