import { useState, useRef } from 'react';
import '../styles/GuidePage.css';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import TestimonialScroll from '../components/TestimonialScroll';

const StartPage = () => {
  // Form references
  const formRef = useRef<HTMLFormElement>(null);
  
  // Contact form state
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactFormStatus, setContactFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

  // Modal states
  const [showCalculator, setShowCalculator] = useState(false);
  
  // ROI Calculator state
  const [calculatorData, setCalculatorData] = useState({
    peopleCount: 10,
    timePercentage: 15,
    aiTimePercentage: 5,
    avgSalary: 100000
  });
  
  const [calculatorResults, setCalculatorResults] = useState({
    costNow: 0,
    fteNow: 0,
    costWithAI: 0,
    fteWithAI: 0
  });

  const handleCalculatorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCalculatorData(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const calculateROI = () => {
    const { peopleCount, timePercentage, aiTimePercentage, avgSalary } = calculatorData;
    
    // Calculate FTE (Full-Time Equivalent)
    const fteNow = (peopleCount * timePercentage / 100).toFixed(1);
    const fteWithAI = (peopleCount * aiTimePercentage / 100).toFixed(1);
    
    // Calculate costs
    const costNow = Math.round(peopleCount * (timePercentage / 100) * avgSalary);
    const costWithAI = Math.round(peopleCount * (aiTimePercentage / 100) * avgSalary);
    
    setCalculatorResults({
      costNow,
      fteNow: parseFloat(fteNow),
      costWithAI,
      fteWithAI: parseFloat(fteWithAI)
    });
  };

  const handleOpenCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCalculator(true);
    calculateROI(); // Initial calculation
  };

  // Contact form handlers
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setContactFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });

      // Reset form
      setContactFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setContactFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsContactSubmitting(false);
    }
  };

  return (
    <div className="guide-container">
      <header className="guide-header">
        <div className="particles-container">
          <div className="particles"></div>
        </div>
        <h1>Blake Harkness</h1>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/blake_photo.jpg" alt="Blake Harkness" />
          </div>
          <div className="about-text">
            <h3>Hi 👋 I'm Blake</h3>
            <p>I build & teach AI and automations. With a background in Mechatronic Engineering, I've helped individuals learn about AI and built systems to solve problems for businesses.</p>
            <p>My passion is creating straightforward solutions that save time and increase revenue. I believe in making AI accessible and practical for businesses of all sizes.</p>
            <div className="social-links">
              <div className="social-link-item">
                <a href="https://www.linkedin.com/in/blake-harkness-8aaa241b2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
              <div className="social-link-item">
                <a href="https://www.youtube.com/@blake_harkness" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
                  <FaYoutube className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <h2>What People Say About Me</h2>
        </div>
        <TestimonialScroll />
      </section>

      <section className="free-resources-section">
        <h2>Free Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-image">
              <img src="/resources/prompts.svg" alt="My Current AI Tool Stack" />
            </div>
            <h3>My Current AI Tool Stack</h3>
            <p>Discover the AI tools I use daily to enhance productivity, automate tasks, and solve complex problems for businesses.</p>
            <a href="https://docs.google.com/document/d/10CyspKZHt3QSGtgc1kA3DEg_YpRBhRTQ35geQN0X4og/edit?usp=sharing" className="resource-button" target="_blank" rel="noopener noreferrer">View Tool Stack</a>
          </div>
          
          <div className="resource-card">
            <div className="resource-image">
              <img src="/resources/calculator.svg" alt="AI ROI Calculator" />
            </div>
            <h3>AI ROI Calculator</h3>
            <p>Calculate the potential return on investment when implementing AI solutions in your business workflows.</p>
            <a href="#" className="resource-button" onClick={handleOpenCalculator}>Access Calculator</a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-grid contact-form-only">
          <div className="contact-form-container">
            {contactFormStatus.submitted && contactFormStatus.success ? (
              <div className="form-success-message">
                <div className="success-icon">✓</div>
                <h4>Message Sent!</h4>
                <p>{contactFormStatus.message}</p>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactFormData.name}
                    onChange={handleContactChange}
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
                    value={contactFormData.email}
                    onChange={handleContactChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={contactFormData.subject}
                    onChange={handleContactChange}
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
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactChange}
                    required
                    rows={5}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={isContactSubmitting}
                >
                  {isContactSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {contactFormStatus.submitted && !contactFormStatus.success && (
                  <div className="submit-message error">
                    {contactFormStatus.message}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {showCalculator && (
        <div className="calculator-modal-overlay" onClick={() => setShowCalculator(false)}>
          <div className="calculator-modal" onClick={e => e.stopPropagation()}>
            <div className="calculator-header">
              <h2>AI ROI Calculator</h2>
              <button className="close-button" onClick={() => setShowCalculator(false)}></button>
            </div>
            
            <div className="calculator-intro">
              <p>Use this calculator to estimate your potential savings when implementing AI in your business processes.</p>
            </div>
            
            <div className="calculator-content">
              <div className="calculator-form">
                <h3>Your Business Details</h3>
                
                <div className="calculator-group">
                  <label htmlFor="peopleCount">
                    Number of People Involved
                    <span className="input-help">How many people will use the AI solution?</span>
                  </label>
                  <div className="range-container">
                    <input
                      type="range"
                      id="peopleCount"
                      name="peopleCount"
                      min="1"
                      max="100"
                      value={calculatorData.peopleCount}
                      onChange={handleCalculatorChange}
                      onMouseUp={calculateROI}
                      onTouchEnd={calculateROI}
                    />
                    <div className="range-value">{calculatorData.peopleCount}</div>
                  </div>
                </div>
                
                <div className="calculator-group">
                  <label htmlFor="avgSalary">
                    Average Annual Salary ($)
                    <span className="input-help">The average annual salary of your team members</span>
                  </label>
                  <input
                    type="number"
                    id="avgSalary"
                    name="avgSalary"
                    min="30000"
                    max="1000000"
                    step="5000"
                    value={calculatorData.avgSalary}
                    onChange={handleCalculatorChange}
                    onBlur={calculateROI}
                  />
                </div>
                
                <div className="calculator-group">
                  <label htmlFor="timePercentage">
                    Current Time Spent (%)
                    <span className="input-help">Percentage of time currently spent on tasks that could be automated</span>
                  </label>
                  <div className="range-container">
                    <input
                      type="range"
                      id="timePercentage"
                      name="timePercentage"
                      min="5"
                      max="100"
                      value={calculatorData.timePercentage}
                      onChange={handleCalculatorChange}
                      onMouseUp={calculateROI}
                      onTouchEnd={calculateROI}
                    />
                    <div className="range-value">{calculatorData.timePercentage}%</div>
                  </div>
                </div>
                
                <div className="calculator-group">
                  <label htmlFor="aiTimePercentage">
                    Estimated Time with AI (%)
                    <span className="input-help">Percentage of time that would be spent with AI assistance</span>
                  </label>
                  <div className="range-container">
                    <input
                      type="range"
                      id="aiTimePercentage"
                      name="aiTimePercentage"
                      min="1"
                      max={calculatorData.timePercentage}
                      value={calculatorData.aiTimePercentage}
                      onChange={handleCalculatorChange}
                      onMouseUp={calculateROI}
                      onTouchEnd={calculateROI}
                    />
                    <div className="range-value">{calculatorData.aiTimePercentage}%</div>
                  </div>
                </div>
                
                <div className="calculator-actions">
                  <button 
                    className="reset-button"
                    onClick={() => {
                      setCalculatorData({
                        peopleCount: 10,
                        timePercentage: 15,
                        aiTimePercentage: 5,
                        avgSalary: 100000
                      });
                      setTimeout(calculateROI, 0);
                    }}
                  >
                    Reset
                  </button>
                  <button 
                    className="calculate-button"
                    onClick={calculateROI}
                  >
                    Calculate
                  </button>
                </div>
              </div>
              
              <div className="calculator-results">
                <div className="results-header">
                  <h3>Your Potential Savings</h3>
                </div>
                
                <div className="results-content">
                  <div className="results-summary">
                    <div className="summary-box current">
                      <h4>Current Process</h4>
                      <div className="summary-value">
                        ${calculatorResults.costNow.toLocaleString()} / year
                      </div>
                      <div className="summary-detail">
                        FTE: {calculatorResults.fteNow}
                      </div>
                    </div>
                    
                    <div className="summary-arrow">→</div>
                    
                    <div className="summary-box ai">
                      <h4>With AI</h4>
                      <div className="summary-value">
                        ${calculatorResults.costWithAI.toLocaleString()} / year
                      </div>
                      <div className="summary-detail">
                        FTE: {calculatorResults.fteWithAI}
                      </div>
                    </div>
                    
                    <div className="summary-arrow">→</div>
                    
                    <div className="summary-box savings">
                      <h4>Potential Savings</h4>
                      <div className="summary-value highlight">
                        ${(calculatorResults.costNow - calculatorResults.costWithAI).toLocaleString()} / year
                      </div>
                      <div className="summary-detail">
                        FTE: {(calculatorResults.fteNow - calculatorResults.fteWithAI).toFixed(1)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="result-visual">
                    <h3>Cost Comparison</h3>
                    <div className="chart-container">
                      <div className="chart-columns">
                        <div 
                          className="chart-column current"
                          style={{ 
                            height: `${Math.max(10, (calculatorResults.costNow / Math.max(calculatorResults.costNow, calculatorResults.costWithAI)) * 100)}%` 
                          }}
                        >
                          <div className="column-value">
                            ${calculatorResults.costNow.toLocaleString()}
                          </div>
                          <div className="column-label">Current Process</div>
                        </div>
                        
                        <div 
                          className="chart-column ai"
                          style={{ 
                            height: `${Math.max(10, (calculatorResults.costWithAI / Math.max(calculatorResults.costNow, calculatorResults.costWithAI)) * 100)}%` 
                          }}
                        >
                          <div className="column-value">
                            ${calculatorResults.costWithAI.toLocaleString()}
                          </div>
                          <div className="column-label">With AI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="calculator-cta">
                  <p>Want to discuss how to achieve these savings in your specific business context?</p>
                  <a href="#" className="contact-cta-button" onClick={() => {
                    setShowCalculator(false);
                    const contactSection = document.querySelector('.contact-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartPage; 