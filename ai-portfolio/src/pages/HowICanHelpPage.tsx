import '../styles/HowICanHelpPage.css';
import { FaGraduationCap, FaTools } from 'react-icons/fa';

const HowICanHelpPage = () => {
  const services = [
    {
      icon: <FaGraduationCap />,
      title: "Educating",
      description: "Empowering your team with AI knowledge and best practices to drive innovation from within."
    },
    {
      icon: <FaTools />,
      title: "Building",
      description: "Developing custom AI solutions that automate processes and drive business growth."
    }
  ];

  return (
    <div className="page how-i-can-help-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">How I Can Help</h1>
          <p className="lead">Transforming businesses through AI innovation</p>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <div className="impact-content">
            <h2>The Impact of AI on Business</h2>
            <div className="tech-evolution">
              <h3>Time Recovery Through AI</h3>
              <blockquote>
                "According to a McKinsey report, employees spend 1.8 hours every day on average searching and gathering information."
              </blockquote>
            </div>
            <div className="tech-evolution">
              <h3>The Technology Imperative</h3>
              <blockquote>
               "Ignoring AI in business today is like refusing to use electricity or computers in the past. While others streamline, innovate, and grow, those who resist will be left struggling to keep up."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <h2>My Services</h2>
          <div className="services-grid services-grid-two">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section consultation-section">
        <div className="container">
          <div className="consultation-offer">
            <h2 className="section-title">Free AI Strategy Session</h2>
            <p className="consultation-subtitle">Discover How AI Can Transform Your Business</p>
            
            <div className="consultation-value">
              <div className="value-item">
                <span className="value-number">30</span>
                <span className="value-label">Minute Strategy Session</span>
              </div>
              <div className="value-item">
                <span className="value-number">100%</span>
                <span className="value-label">Free Session</span>
              </div>
              <div className="value-item">
                <span className="value-number">3+</span>
                <span className="value-label">Custom AI Suggestions</span>
              </div>
            </div>

            <div className="consultation-steps">
              <div className="step">
                <div className="step-icon">1</div>
                <h3>Discovery Session</h3>
                <p>In-depth discussion about your business challenges and objectives</p>
              </div>
              <div className="step">
                <div className="step-icon">2</div>
                <h3>Solution Planning</h3>
                <p>Identify the best AI solutions for your specific needs</p>
              </div>
              <div className="step">
                <div className="step-icon">3</div>
                <h3>Customised AI Report</h3>
                <p>Detailed outline of potential AI tools for the best ROI</p>
              </div>
            </div>

            <div className="consultation-benefits">
              <h3>What You'll Get</h3>
              <ul className="benefits-list">
                <li>Custom AI solution recommendations</li>
                <li>Implementation cost analysis</li>
                <li>ROI projections</li>
                <li>Technical feasibility assessment</li>
              </ul>
            </div>
            
            <div className="cta-container">
              <a href="/contact" className="cta-button">Schedule Your Free Session</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowICanHelpPage; 