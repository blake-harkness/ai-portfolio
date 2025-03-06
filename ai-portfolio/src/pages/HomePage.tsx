import Hero from '../components/Hero';
import { FaRobot, FaCode, FaQuoteLeft, FaArrowRight, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import '../styles/AboutPage.css';

const HomePage = () => {
  const services = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Teaching",
      description: "Expert-led training and education in AI technologies, helping your team build the skills needed for the future."
    },
    {
      icon: <FaRobot />,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions that align with your business goals and enhance operational efficiency."
    },
    {
      icon: <FaCode />,
      title: "Custom AI Development",
      description: "Tailored AI solutions designed to address your specific business challenges and drive innovation."
    }
  ];

  const testimonials = [
    {
      quote: "This could be your success story. Book a free consultation to discuss how AI can transform your business.",
      author: "Your Name Here",
      position: "Book a Free Session"
    },
    {
      quote: "Ready to leverage AI for your business? Let's explore how we can create innovative solutions tailored to your needs.",
      author: "Future Client",
      position: "Schedule a Consultation"
    },
    {
      quote: "Join our growing list of successful AI implementations. Start your journey towards AI-driven business transformation today.",
      author: "Next Success Story",
      position: "Contact Now"
    }
  ];

  return (
    <div className="page home-page">
      <Hero />
      
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid services-grid-two">
            {services.map((service, index) => (
              <div key={index} className={`service-card card float float-delay-${index + 1}`}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Success Stories</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <blockquote className="testimonial-quote">
                  {testimonial.quote}
                </blockquote>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="about-content-wrapper">
            <div className="about-text">
              <h2 className="section-title">About Harkness AI</h2>
              <div className="about-description">
                <p>
                At Harkness AI, we're passionate about harnessing the transformative power of artificial intelligence to solve real business challenges. 
                Since our founding, we've been at the forefront of AI innovation, helping businesses leverage cutting-edge technology to improve efficiency, 
                drive growth, and stay competitive in an increasingly digital landscape.
                </p>
                <p>
                Our approach combines deep technical expertise with a strong focus on practical business applications. We believe that AI should be 
                accessible and beneficial to organizations of all sizes, which is why we offer scalable solutions that can be tailored to meet your 
                specific needs and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Let's discuss how our AI solutions can help you achieve your business goals.</p>
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