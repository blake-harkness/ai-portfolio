import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <span className="logo-text">Harkness<span className="logo-accent">AI</span></span>
            </Link>
            <p className="footer-tagline">Advanced AI Solutions for Business</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/how-i-can-help">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/blake-harkness/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/@BlakeH_AI" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="mailto:blake@harknessai.nz" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Harkness AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 