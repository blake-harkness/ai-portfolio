import { useState, useRef } from 'react';
import '../styles/GuidePage.css';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const GuidePage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  
  // Form references
  const formRef = useRef<HTMLFormElement>(null);
  const subscribeFormRef = useRef<HTMLFormElement>(null);
  
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

  // ROI Calculator state
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    peopleCount: 50,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      if (!subscribeFormRef.current) return;
      
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        subscribeFormRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitMessage('Thanks for subscribing! Check your inbox soon.');
      setMessageType('success');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitMessage('Failed to subscribe. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
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
        <h1>Blake | AI Guides</h1>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/blake_photo.jpg" alt="Blake Harkness" />
          </div>
          <div className="about-text">
            <h3>Hi 👋 I'm Blake</h3>
            <p>I build & teach AI automations. With a background in Mechatronic Engineering, I've helped individuals learn about AI and built systems to solve problems for businesses.</p>
            <p>My passion is creating straightforward solutions that save time and increase revenue. I believe in making AI accessible and practical for businesses of all sizes.</p>
            <div className="social-links">
              <div className="social-link-item">
                <a href="https://www.linkedin.com/in/blake-harkness/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
              <div className="social-link-item">
                <a href="https://www.youtube.com/@BlakeH_AI" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="free-resources-section">
        <h2>Free Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-image">
              <img src="/resources/prompts.svg" alt="Top 50 Useful Prompts" />
            </div>
            <h3>Top 50 Useful Prompts</h3>
            <p>A curated collection of proven prompts to get the most out of ChatGPT, Claude, and other AI assistants for business tasks.</p>
            <a href="#" className="resource-button">Download</a>
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

      <section className="resources-section">
        <h2>Level Up Your AI Skills</h2>
        <div className="resources-content">
          <div className="resource-text">
            <h3>FREE AI Starter Kit: Checklist + Tools Guide</h3>
            <p>Stay ahead of the curve. Get curated AI news, step-by-step automation guides, and productivity hacks you won't find anywhere else.</p>
            <ul className="benefits-list">
              <li>Decode the latest AI news & understand what matters</li>
              <li>Master useful automations with step-by-step guides</li>
              <li>Gain early access to cutting-edge AI tools & resources</li>
              <li>Boost your productivity with practical AI tips (personal & professional)</li>
              <li>Get exclusive insights from my AI projects & experiments</li>
            </ul>
          </div>
          <div className="subscribe-form">
            <form ref={subscribeFormRef} onSubmit={handleSubmit}>
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                disabled={isSubmitting}
              />
              <input
                type="hidden"
                name="to_name"
                value="Blake"
              />
              <input
                type="hidden"
                name="from_name"
                value={email.split('@')[0] || 'Subscriber'}
              />
              <input
                type="hidden"
                name="message"
                value="New subscription to AI guides and newsletter"
              />
              <input
                type="hidden"
                name="reply_to"
                value={email}
              />
              <input
                type="hidden"
                name="subject"
                value="New AI Guide Subscription"
              />
              <button 
                type="submit" 
                className="subscribe-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
              {submitMessage && (
                <div className={`submit-message ${messageType}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>What People Are Saying</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <p>"Nice work Blake. A great demo of how simple it is these days to get underway with chatbots. Could be a very useful supplement to lawyers' websites or to provide clients with access to internal knowledge bases."</p>
            <div className="reviewer">— Mark Donovan</div>
          </div>
          <div className="review-card">
            <p>"Super cool demo, Blake — I love how you broke this down so fast and clean."</p>
            <div className="reviewer">— Zach Ross</div>
          </div>
          <div className="review-card">
            <p>"Hey Blake, thanks for sharing this, really helpful for my son doing NCEA1..."</p>
            <div className="reviewer">— Zac Pullen</div>
          </div>
          <div className="review-card">
            <p>"Finding alternative products with Glow4Less has helped me save money. It was easy as to use."</p>
            <div className="reviewer">— Dannielle Innes</div>
          </div>
          <div className="review-card">
            <p>"Seeing how quick you can build a useful chatbot has really opened my eyes, thank you!"</p>
            <div className="reviewer">— Dave Thompson</div>
          </div>
          <div className="review-card">
            <p>"Amazing man I love these kind of tutorials"</p>
            <div className="reviewer">— Shoaib Hussain</div>
          </div>
        </div>
      </section>

      <section id="contact-section" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-grid contact-form-only">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            
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
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactChange}
                    required
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="contact-submit-button"
                  disabled={isContactSubmitting}
                >
                  {isContactSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      {showCalculator && (
        <div className="calculator-modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowCalculator(false)}>
          <div className="calculator-modal">
            <div className="calculator-header">
              <h2>AI ROI Calculator</h2>
              <button 
                className="close-button" 
                onClick={() => setShowCalculator(false)}
                aria-label="Close calculator"
              >
                {/* Empty button - X is added via CSS */}
              </button>
            </div>
            
            <div className="calculator-intro">
              <p>Calculate the potential cost savings and revenue opportunities when implementing AI in your business. Adjust the sliders below to see how AI could impact your bottom line.</p>
            </div>
            
            <div className="calculator-content">
              <div className="calculator-form">
                <h3>Business Information</h3>
                
                <div className="calculator-group">
                  <label htmlFor="peopleCount">
                    How many people carry out this task now?
                    <span className="input-help">Number of staff involved</span>
                  </label>
                  <input 
                    type="number" 
                    id="peopleCount" 
                    name="peopleCount"
                    value={calculatorData.peopleCount}
                    onChange={handleCalculatorChange}
                    min="1"
                  />
                </div>
                
                <div className="calculator-group">
                  <label htmlFor="timePercentage">
                    % of time spent on this task currently
                    <span className="input-help">What percentage of their workday is spent on this task?</span>
                  </label>
                  <div className="range-container">
                    <input 
                      type="range" 
                      id="timePercentage" 
                      name="timePercentage"
                      min="1" 
                      max="100"
                      value={calculatorData.timePercentage}
                      onChange={(e) => {
                        handleCalculatorChange(e);
                        calculateROI();
                      }}
                    />
                    <span className="range-value">{calculatorData.timePercentage}%</span>
                  </div>
                </div>
                
                <div className="calculator-group">
                  <label htmlFor="aiTimePercentage">
                    % of time needed with AI assistance
                    <span className="input-help">How much time would be required after implementing AI?</span>
                  </label>
                  <div className="range-container">
                    <input 
                      type="range" 
                      id="aiTimePercentage" 
                      name="aiTimePercentage"
                      min="1" 
                      max={calculatorData.timePercentage}
                      value={calculatorData.aiTimePercentage}
                      onChange={(e) => {
                        handleCalculatorChange(e);
                        calculateROI();
                      }}
                    />
                    <span className="range-value">{calculatorData.aiTimePercentage}%</span>
                  </div>
                </div>
                
                <h3>Financial Information</h3>
                
                <div className="calculator-group">
                  <label htmlFor="avgSalary">
                    Average annual salary
                    <span className="input-help">Average salary of staff performing this task</span>
                  </label>
                  <div className="range-container">
                    <input 
                      type="range" 
                      id="avgSalary" 
                      name="avgSalary"
                      min="30000" 
                      max="200000" 
                      step="1000"
                      value={calculatorData.avgSalary}
                      onChange={(e) => {
                        handleCalculatorChange(e);
                        calculateROI();
                      }}
                    />
                    <span className="range-value">${calculatorData.avgSalary.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="calculator-actions">
                  <button 
                    className="reset-button"
                    onClick={() => {
                      setCalculatorData({
                        peopleCount: 50,
                        timePercentage: 15,
                        aiTimePercentage: 5,
                        avgSalary: 100000
                      });
                      setTimeout(calculateROI, 0);
                    }}
                  >
                    Reset Values
                  </button>
                  
                  <button 
                    className="calculate-button"
                    onClick={calculateROI}
                  >
                    Recalculate
                  </button>
                </div>
              </div>
              
              <div className="calculator-results">
                <div className="results-summary">
                  <div className="result-box">
                    <h3>Cost per year now</h3>
                    <div className="result-amount">${calculatorResults.costNow.toLocaleString()}</div>
                    <div className="result-fte">{calculatorResults.fteNow} FTE</div>
                  </div>
                  
                  <div className="result-box highlight">
                    <h3>Cost per year with AI</h3>
                    <div className="result-amount">${calculatorResults.costWithAI.toLocaleString()}</div>
                    <div className="result-fte">{calculatorResults.fteWithAI} FTE</div>
                  </div>
                  
                  <div className="savings-summary">
                    <h3>Annual Savings</h3>
                    <div className="savings-amount">${(calculatorResults.costNow - calculatorResults.costWithAI).toLocaleString()}</div>
                    <div className="savings-percent">
                      {calculatorResults.costNow ? Math.round((1 - calculatorResults.costWithAI / calculatorResults.costNow) * 100) : 0}% reduction
                    </div>
                  </div>
                </div>
                
                <div className="result-visual">
                  <h3>Cost Comparison</h3>
                  <div className="chart-container">
                    <div className="chart-columns">
                      <div className="chart-column current" style={{ height: `${calculatorResults.costNow ? 100 : 0}%` }}>
                        <div className="column-label">Without AI</div>
                        <div className="column-value">${calculatorResults.costNow.toLocaleString()}</div>
                      </div>
                      <div className="chart-column ai" style={{ height: `${calculatorResults.costNow ? (calculatorResults.costWithAI / calculatorResults.costNow) * 100 : 0}%` }}>
                        <div className="column-label">With AI</div>
                        <div className="column-value">${calculatorResults.costWithAI.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="calculator-cta">
                  <p>Want to discuss how AI can reduce costs in your specific business case?</p>
                  <a href="#contact-section" onClick={() => setShowCalculator(false)} className="contact-cta-button">Contact Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="guide-footer">
        <p>&copy; {new Date().getFullYear()} HarknessAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GuidePage; 