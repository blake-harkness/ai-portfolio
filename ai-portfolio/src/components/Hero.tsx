import { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI Solutions in New Zealand';
  const typingSpeed = 80;
  
  useEffect(() => {
    // Add fade-in animation class after component mounts
    setTimeout(() => {
      heroRef.current?.classList.add('visible');
    }, 100);
    
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="name">Harkness<span className="ai-accent">AI</span></span>
          <span className="title">{typedText}<span className="cursor">|</span></span>
        </h1>
        
        <p className="hero-tagline">
          Based in Christchurch, I help businesses across New Zealand transform their operations with custom AI solutions
        </p>
        
        <div className="cta-container">
          <a href="how-i-can-help" className="button button-primary">
            My AI Services
          </a>
          <a href="contact" className="button button-secondary">
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="overlay"></div>
        <div className="particles-container">
          <div className="particles"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 