import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {currentYear} Blake Harkness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 