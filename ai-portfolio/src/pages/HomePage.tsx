import Hero from '../components/Hero';
import { FaGraduationCap, FaTools } from 'react-icons/fa';
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

      <section className="section about-section">
        <div className="container">
          <div className="about-content-wrapper">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <div className="about-description">
                <p>
                Since discovering ChatGPT in late 2021, I've leveraged the power of AI to enhance both my personal and professional life. 
                From using it to search for information instead of Google to coding side projects, AI has significantly accelerated my learning and development.
                </p>
                <p>
                Currently in the early stages of my career, I am passionate about expanding my skill set and making a meaningful impact in businesses. 
                My goal is to harness the advancements in AI to improve efficiency and help intelligent people avoid unnecessary mistakes.
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