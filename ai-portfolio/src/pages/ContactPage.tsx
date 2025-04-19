import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/ContactPage.css';

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
            Let's Connect
          </motion.h1>
          <motion.p 
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Have a project in mind or want to explore how AI can transform your business? I'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div 
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Ready to discuss your AI project? Reach out through any of these channels and I'll get back to you promptly.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="icon-wrapper">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p><a href="mailto:blake@harknessai.nz">blake@harknessai.nz</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="icon-wrapper">
                    <FaPhone className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p><a href="tel:+640275183692">+64 027 518 3692</a></p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="icon-wrapper">
                    <FaLinkedin className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <h3>LinkedIn</h3>
                    <p><a href="https://www.linkedin.com/in/blake-harkness/" target="_blank" rel="noopener noreferrer">Blake Harkness</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="icon-wrapper">
                    <FaMapMarkerAlt className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>Christchurch, New Zealand</p>
                  </div>
                </div>
              </div>
              
              <div className="availability">
                <h3>Availability</h3>
                <p>I'm currently available for new projects and consulting engagements.</p>
                <div className="availability-indicator">
                  <div className="status-dot"></div>
                  <span className="status-text">Available for Work</span>
                </div>
              </div>
            </motion.div>
            
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
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Consultation Request">Consultation Request</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
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
              <p>I follow a structured approach that begins with a discovery call to understand your needs, followed by a proposal outlining scope, timeline, and cost. Once approved, we move into development with regular check-ins and iterations until the final delivery.</p>
            </motion.div>
            
            <motion.div className="faq-item" variants={fadeIn}>
              <h3>Do you offer ongoing support after project completion?</h3>
              <p>Yes, I offer various support packages to ensure your AI solution continues to perform optimally. This includes monitoring, updates, and further training of models as needed.</p>
            </motion.div>
            
            <motion.div className="faq-item" variants={fadeIn}>
              <h3>How do we get started?</h3>
              <p>Simply reach out through the contact form or email me directly. We'll schedule an initial consultation to discuss your project needs and determine if we're a good fit to work together.</p>
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