import Hero from '../components/Hero';
import { FaGraduationCap, FaLightbulb, FaTools } from 'react-icons/fa';
import '../styles/HomePage.css';
import '../styles/AboutPage.css';

const HomePage = () => {
  const services = [
    {
      icon: <FaGraduationCap />,
      title: "Educating",
      description: "Empowering your team with AI knowledge and best practices to drive innovation from within."
    },
    {
      icon: <FaLightbulb />,
      title: "Consulting",
      description: "Strategic guidance on implementing AI solutions that align with your business objectives."
    },
    {
      icon: <FaTools />,
      title: "Building",
      description: "Developing custom AI solutions that automate processes and drive business growth."
    }
  ];

  return (
    <div className="page home-page">
      <Hero />
      
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">My Services</h2>
          <div className="services-grid">
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

      <section className="section about-section">
        <div className="container">
          <div className="about-content-wrapper">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <div className="about-description">
                <p>
                  As an AI Engineer and Developer, I specialize in creating innovative solutions that 
                  bridge the gap between cutting-edge AI technology and real-world business needs. 
                  With a strong foundation in both artificial intelligence and software development, I
                  help businesses leverage the power of AI to drive growth and efficiency.
                </p>
                <p>
                  My approach combines technical expertise with practical business understanding, ensuring that 
                  every solution not only employs advanced technology but also delivers tangible value. Whether it's 
                  developing intelligent automation systems, implementing machine learning models, or creating 
                  AI-powered applications, I focus on delivering results that make a real difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 