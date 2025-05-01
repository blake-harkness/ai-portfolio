import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import '../styles/LegalPages.css';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="legal-page privacy-policy-page">
      <Seo 
        title="Privacy Policy"
        description="Harkness AI's privacy policy explaining how we collect, use and protect your personal information in accordance with New Zealand law."
        canonical="/privacy-policy"
      />
      
      {/* Header section */}
      <section className="legal-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p 
            className="legal-date"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Last Updated: {new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
        </div>
      </section>
      
      {/* Content section */}
      <section className="legal-content">
        <div className="container">
          <motion.div 
            className="legal-container"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="legal-section">
              <h2>1. Introduction</h2>
              <p>At Harkness AI ("we", "our", or "us"), we are committed to protecting your personal information and your right to privacy in accordance with the Privacy Act 2020 (NZ) and other applicable New Zealand laws. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://www.harknessai.nz or engage with our services.</p>
              <p>By using our services, you agree to the collection and use of information in accordance with this policy. We encourage you to read this Privacy Policy carefully to understand our practices regarding your personal information.</p>
            </div>
            
            <div className="legal-section">
              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, and business information when you contact us or use our services.</li>
                <li><strong>Communications:</strong> Records of your interactions with us including emails, form submissions, and other correspondence.</li>
                <li><strong>Service Usage Information:</strong> Information about how you use our services and website.</li>
              </ul>
              
              <h3>Technical Information</h3>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul>
                <li><strong>Device Information:</strong> Type of device, operating system, browser type and version.</li>
                <li><strong>Log Data:</strong> Internet Protocol (IP) address, browser type, pages visited, time and date of your visit, time spent on those pages, and other diagnostic data.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
              </ul>
            </div>
            
            <div className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To fulfill any other purpose for which you provide it</li>
                <li>To communicate with you about our services, updates, and other information you request</li>
              </ul>
            </div>
            
            <div className="legal-section">
              <h2>4. Legal Basis for Processing</h2>
              <p>Under the Privacy Act 2020 (NZ), we collect and process your personal information based on the following lawful grounds:</p>
              <ul>
                <li>Your consent</li>
                <li>Performance of a contract when we provide services you request</li>
                <li>Compliance with a legal obligation</li>
                <li>Our legitimate interests, provided these do not override your fundamental rights and freedoms</li>
              </ul>
            </div>
            
            <div className="legal-section">
              <h2>5. Disclosure of Your Information</h2>
              <p>We may disclose your personal information in the following situations:</p>
              <ul>
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
              </ul>
            </div>
            
            <div className="legal-section">
              <h2>6. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security of your data.</p>
            </div>
            
            <div className="legal-section">
              <h2>7. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than New Zealand. These countries may have data protection rules that are different from New Zealand. By submitting your information to us, you consent to such transfers. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.</p>
            </div>
            
            <div className="legal-section">
              <h2>8. Data Retention</h2>
              <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy or to comply with our legal obligations. When we no longer need your personal data, we will securely delete or anonymize it.</p>
            </div>
            
            <div className="legal-section">
              <h2>9. Your Privacy Rights</h2>
              <p>Under the Privacy Act 2020 (NZ), you have the following rights:</p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to correct any inaccurate or incomplete personal information</li>
                <li>The right to request deletion of your personal information in certain circumstances</li>
                <li>The right to restrict or object to our processing of your personal information</li>
                <li>The right to be informed about the collection and use of your personal information</li>
                <li>The right to lodge a complaint with the Privacy Commissioner</li>
              </ul>
              <p>To exercise your privacy rights, please contact us using the details provided in the "Contact Us" section.</p>
            </div>
            
            <div className="legal-section">
              <h2>10. Children's Privacy</h2>
              <p>Our services are not intended for use by children under the age of 16. We do not knowingly collect personally identifiable information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
            </div>
            
            <div className="legal-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
            </div>
            
            <div className="legal-section">
              <h2>12. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
              <p>
                Harkness AI<br />
                Email: <a href="mailto:blake@harknessai.nz">blake@harknessai.nz</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage; 