import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/blake-harkness-b1a6b0293/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/BlakeHarkness',
      label: 'GitHub'
    }
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Contact</h3>
            <div className="footer-contact-info">
              <p>
                <FaEnvelope className="footer-icon" />
                blake.ac.harkness@gmail.com
              </p>
              <p>
                <FaPhone className="footer-icon" />
                027 518 3692
              </p>
              <p>
                <FaMapMarkerAlt className="footer-icon" />
                Christchurch, New Zealand
              </p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Blake Harkness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 