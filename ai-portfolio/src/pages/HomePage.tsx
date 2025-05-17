import { useEffect } from 'react';
import Hero from '../components/Hero';
import { FaRobot, FaCode, FaArrowRight, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import '../styles/AboutPage.css';
import SEOHead from '../components/SEOHead';
import TestimonialScroll from '../components/TestimonialScroll';

const HomePage = () => {
  useEffect(() => {
    // Add JSON-LD structured data for better SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Blake Harkness',
      'url': 'https://www.harknessai.nz',
      'logo': 'https://www.harknessai.nz/harkness-ai-favicon.svg',
      'description': 'AI solutions provider in New Zealand. Expert AI services for businesses across Christchurch, Auckland, Wellington and NZ.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Christchurch',
        'addressCountry': 'New Zealand'
      },
      'areaServed': ['Christchurch', 'Auckland', 'Wellington', 'New Zealand'],
      'sameAs': [
        'https://www.linkedin.com/in/blake-harkness/',
        'https://www.youtube.com/@BlakeH_AI'
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      icon: <FaChalkboardTeacher />,
      title: "AI Education & Training",
      description: "I provide AI training for New Zealand businesses, organizations and individuals, helping your team build the skills needed for the future."
    },
    {
      icon: <FaRobot />,
      title: "AI Consulting",
      description: "I offer strategic guidance on implementing AI solutions and use cases that align with your business goals."
    },
    {
      icon: <FaCode />,
      title: "Custom AI Development",
      description: "I create tailored AI solutions designed to address your specific business challenges."
    }
  ];

  return (
    <div className="page home-page">
      <SEOHead 
        title="AI Solutions in New Zealand" 
        description="I provide artificial intelligence solutions in Christchurch and across New Zealand. Expert AI consulting and development services for NZ businesses."
        keywords="New Zealand AI, Christchurch AI, Auckland AI, Wellington AI, AI Consulting NZ, New Zealand AI Solutions, AI Development New Zealand"
        canonicalPath="/"
      />
      
      <Hero />
      
      <section className="section about-section">
        <div className="container">
          <div className="about-content-wrapper">
            <div className="about-grid">
              <div className="about-text">
                <h2 className="section-title">About Me</h2>
                <div className="about-description">
                  <p>
                  I'm Blake Harkness, an AI developer based in Christchurch, passionate about harnessing the transformative power of artificial intelligence to solve real business challenges for organizations across Auckland, Wellington, Christchurch, and throughout New Zealand. 
                  
                  </p>
                  <p>
                  I help businesses leverage cutting-edge technology to improve efficiency, drive growth, and stay competitive in the rapidly changing world.
                  My approach combines technical expertise with a strong focus on practical business applications catered to your needs. .
                  </p>
                </div>
              </div>
              <div className="about-image">
                <img src="/blake_photo.jpg" alt="Blake Harkness - AI Specialist" className="profile-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">My AI Services</h2>
          <div className="services-grid services-grid-two">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <TestimonialScroll pageClassName="home-page" />

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your New Zealand Business with AI?</h2>
            <p>Let's discuss how I can help you achieve your business goals in the New Zealand market.</p>
            <Link to="/contact" className="button button-primary cta-button">
              Get Started <FaArrowRight className="icon-right" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 