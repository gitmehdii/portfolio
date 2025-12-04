import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Application E-commerce',
      description: 'Une plateforme e-commerce moderne avec panier, paiement et gestion des stocks',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour visualiser des données en temps réel',
      category: 'web',
      technologies: ['React', 'D3.js', 'Firebase'],
      image: '📊',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Application Mobile',
      description: 'Application mobile cross-platform pour la gestion de tâches',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'API'],
      image: '📱',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Plateforme de Blog',
      description: 'CMS personnalisé avec éditeur markdown et gestion de contenu',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      image: '✍️',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'API REST',
      description: 'API robuste avec authentification JWT et documentation Swagger',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL'],
      image: '🔌',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Portfolio Designer',
      description: 'Générateur de portfolio personnalisable avec templates',
      category: 'web',
      technologies: ['React', 'CSS-in-JS', 'Vite'],
      image: '🎨',
      link: '#',
      github: '#'
    }
  ];

  const categories = ['all', 'web', 'mobile', 'backend'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Mes Projets</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'Tous' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.link} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => project.link === '#' && e.preventDefault()}
                  >
                    <span>Voir le projet</span>
                    <span className="arrow">→</span>
                  </a>
                  <a 
                    href={project.github} 
                    className="project-github" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => project.github === '#' && e.preventDefault()}
                  >
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
