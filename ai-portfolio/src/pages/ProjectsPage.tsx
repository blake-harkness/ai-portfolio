import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import '../styles/ProjectsPage.css';
import SEOHead from '../components/SEOHead';
import testimonials from '../data/testimonials';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add structured data for the projects page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'AI Projects - Harkness AI',
      'url': 'https://www.harknessai.nz/projects',
      'description': 'Explore my AI projects and case studies. View what clients across New Zealand say about my AI solutions.',
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Inventory Management",
      description: "Developed a custom AI solution for a New Zealand retail chain that optimized inventory management, reducing overstocking by 23% and stockouts by 45% while improving cash flow.",
      image: "/project-inventory.jpg",
      tags: ["Computer Vision", "Predictive Analytics", "Retail"]
    },
    {
      id: 2,
      title: "Customer Service Automation",
      description: "Created an intelligent chatbot system for a leading NZ service provider that handles 78% of customer inquiries automatically, reducing response time from 24 hours to instant.",
      image: "/project-chatbot.jpg",
      tags: ["Natural Language Processing", "Chatbots", "Customer Service"]
    },
    {
      id: 3,
      title: "Predictive Maintenance System",
      description: "Implemented an IoT and AI solution for a manufacturing company that predicts equipment failures with 94% accuracy, reducing downtime by 37% and maintenance costs by 28%.",
      image: "/project-maintenance.jpg",
      tags: ["Predictive Maintenance", "IoT", "Manufacturing"]
    },
    {
      id: 4,
      title: "AI Document Processing",
      description: "Built a document processing system for a legal firm that extracts, categorizes, and analyzes information from legal documents, reducing processing time by 85%.",
      image: "/project-document.jpg",
      tags: ["Document Processing", "Legal Tech", "OCR"]
    }
  ];

  return (
    <div className="page projects-page">
      <SEOHead 
        title="AI Projects and Testimonials | Harkness AI" 
        description="Explore successful AI projects and read what clients say about my work. Case studies of AI solutions implemented across New Zealand businesses."
        keywords="AI Projects, New Zealand AI Case Studies, AI Testimonials, AI Success Stories, AI Portfolio"
        canonicalPath="/projects"
      />
      
      <section className="hero-section">
        <div className="container">
          <h1 className="page-title">My AI Projects</h1>
          <p className="lead">
            Explore how I've helped businesses across New Zealand transform their operations with custom AI solutions
          </p>
        </div>
      </section>
      
      <section className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What People Say About Me</h2>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="author-image"
                  />
                  <div>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your AI Journey?</h2>
            <p>Let's discuss how I can help transform your business with AI</p>
            <Link to="/contact" className="button button-primary cta-button">
              Get in Touch <FaArrowRight className="icon-right" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 