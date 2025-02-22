import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/ContactPage.css';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'service_00loe13', // Replace with your EmailJS service ID
        'template_gnfda74', // Replace with your EmailJS template ID
        formRef.current,
        'ZDtqDbMMEJiYHLoox' // Replace with your EmailJS public key
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please try again.' 
      });
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/blake-harkness/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/blake-harkness',
      label: 'GitHub'
    },
    {
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@BlakeHarknessTech',
      label: 'Youtube'
    }
  ];

  return (
    <div className="page contact-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="lead">Let's discuss how we can work together</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-items">
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div className="info-item-content">
                    <h3>Email</h3>
                    <p>blake.ac.harkness@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div className="info-item-content">
                    <h3>Location</h3>
                    <p>Christchurch, New Zealand</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div className="info-item-content">
                    <h3>Phone</h3>
                    <p>027 518 3692</p>
                  </div>
                </div>
                <div className="info-item social-item">
                  <h3>Social</h3>
                  <div className="social-links">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="social-link"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status.submitting}
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
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={status.submitting}
                  />
                </div>

                {status.error && (
                  <div className="error-message">
                    {status.error}
                  </div>
                )}

                {status.submitted && (
                  <div className="success-message">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 