import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message envoyé avec succès! 🎉');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Email', icon: '📧', url: 'mailto:contact@example.com' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contactez-moi</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Discutons de votre prochain projet
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Restons en contact</h3>
            <p>
              Je suis toujours ouvert à de nouvelles opportunités et collaborations. 
              N'hésitez pas à me contacter pour discuter de vos projets!
            </p>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <strong>Localisation</strong>
                  <p>Paris, France</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">⏰</span>
                <div>
                  <strong>Disponibilité</strong>
                  <p>Lun - Ven, 9h - 18h</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Envoyer le message
              <span className="btn-icon">✉️</span>
            </button>

            {status && <div className="status-message">{status}</div>}
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Mehdi. Tous droits réservés.</p>
        <p>Fait avec ❤️ et React</p>
      </footer>
    </section>
  );
};

export default Contact;
