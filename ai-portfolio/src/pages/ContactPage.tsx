import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/ContactPage.css';
import SEOHead from '../components/SEOHead';

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Add structured data for the contact page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Harkness AI Contact',
      'url': 'https://www.harknessai.nz/contact',
      'description': 'Contact Blake Harkness for AI solutions in New Zealand - based in Christchurch and serving clients across Auckland, Wellington, and nationwide.',
      'areaServed': ['New Zealand', 'Christchurch', 'Auckland', 'Wellington'],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="contact-page">
      <SEOHead 
        title="Contact Me for AI Solutions in New Zealand" 
        description="Contact Blake Harkness for AI solutions in Christchurch and across New Zealand. Specialized AI consulting and development services for NZ businesses."
        keywords="Contact AI New Zealand, Christchurch AI Contact, Auckland AI Services, Wellington AI Consulting, New Zealand AI Development"
        canonicalPath="/contact"
      />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="particles-container">
          <div className="particles"></div>
        </div>
        <div className="overlay"></div>
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Have a project in mind or want to explore how AI can transform your business? I provide AI services across New Zealand from my base in Christchurch.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid-full">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Send Me a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="form-success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {formStatus.submitted && !formStatus.success && (
                    <div className="error-message">
                      {formStatus.message}
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about working with me</p>
          </motion.div>
          
          <motion.div 
            className="faq-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div className="faq-item" variants={fadeIn}>
              <h3>What is your typical process for new projects?</h3>
              <p>I follow a structured approach that begins with a discovery call to understand your needs, followed by a proposal outlining scope, timeline, and cost. Once approved, I move into development with regular check-ins and iterations until the final delivery.</p>
            </motion.div>
            
            <motion.div className="faq-item" variants={fadeIn}>
              <h3>Do you offer ongoing support after project completion?</h3>
              <p>Yes, I offer support  to ensure your AI solution continues to perform optimally. This includes monitoring, updates, and further development as needed.</p>
            </motion.div>
            
            <motion.div className="faq-item" variants={fadeIn}>
              <h3>How do we get started?</h3>
              <p>Simply reach out through the contact form above. I'll schedule an initial consultation to discuss your project needs and determine if we're a good fit to work together.</p>
            </motion.div>
            
            <motion.div className="faq-item" variants={fadeIn}>
              <h3>What information should I prepare for our first meeting?</h3>
              <p>It's helpful to have a clear idea of your business challenge, any existing solutions you've tried, and your goals for implementing AI. Don't worry if you don't have all the details - I can help guide the discovery process.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 