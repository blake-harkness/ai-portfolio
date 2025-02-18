import { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add fade-in animation class after component mounts
    setTimeout(() => {
      heroRef.current?.classList.add('visible');
    }, 100);
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="name">Blake Harkness</span>
          <span className="title">AI Engineer & Developer</span>
        </h1>
        
        <p className="hero-tagline">
          Innovative AI Solutions for a Digital Future
        </p>
        
        <div className="cta-container">
          <a href="case-studies" className="cta-button primary">
            View My Projects
          </a>
          <a href="contact" className="cta-button secondary">
            Get in Touch
          </a>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="overlay"></div>
      </div>
    </section>
  );
};

export default Hero; 