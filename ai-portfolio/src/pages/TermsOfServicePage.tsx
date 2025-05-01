import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import '../styles/LegalPages.css';

const TermsOfServicePage: React.FC = () => {
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
    <div className="legal-page terms-of-service-page">
      <Seo 
        title="Terms of Service"
        description="Harkness AI's terms of service outlining the conditions for using our AI consulting and development services in New Zealand."
        canonical="/terms-of-service"
      />
      
      {/* Header section */}
      <section className="legal-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Terms of Service
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
              <p>Welcome to Harkness AI. These Terms of Service ("Terms", "Agreement") govern your use of our website located at https://www.harknessai.nz and the services offered by Harkness AI ("Service", "Services", "we", "us", or "our").</p>
              <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.</p>
              <p>These Terms constitute a legally binding agreement between you and Harkness AI. Please read them carefully.</p>
            </div>
            
            <div className="legal-section">
              <h2>2. Communications</h2>
              <p>By using our Service, you agree to receive communications from us, which may include newsletters, updates, and information about our services. You can opt out of these communications at any time by contacting us or using the unsubscribe options provided in our communications.</p>
            </div>
            
            <div className="legal-section">
              <h2>3. Service Description</h2>
              <p>Harkness AI provides AI consulting and development services to businesses and organizations throughout New Zealand. Our specific services include, but are not limited to:</p>
              <ul>
                <li>AI strategy consultation</li>
                <li>Custom AI solution development</li>
                <li>AI integration services</li>
                <li>AI implementation support</li>
                <li>AI training and education</li>
              </ul>
              <p>The specifics of the services provided will be outlined in separate agreements with clients.</p>
            </div>
            
            <div className="legal-section">
              <h2>4. Your Obligations</h2>
              <p>In using our Service, you agree:</p>
              <ul>
                <li>To provide accurate, current, and complete information as may be requested by us</li>
                <li>To maintain the security of your account information</li>
                <li>To notify us immediately of any unauthorized access or use of your account</li>
                <li>To use the Service in compliance with all applicable laws and regulations</li>
                <li>Not to use the Service for any illegal or unauthorized purpose</li>
                <li>Not to interfere with or disrupt the integrity or performance of the Service or third-party data contained therein</li>
              </ul>
            </div>
            
            <div className="legal-section">
              <h2>5. Intellectual Property</h2>
              <h3>Our Intellectual Property</h3>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Harkness AI and its licensors. The Service is protected by copyright, trademark, and other laws of both New Zealand and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Harkness AI.</p>
              
              <h3>Your Intellectual Property</h3>
              <p>When you provide content to us for the purpose of using our Services, you retain ownership of any intellectual property rights that you hold in that content. By providing content to us, you grant us a worldwide, royalty-free license to use, host, store, reproduce, modify, create derivative works, communicate, and publish that content for the purpose of providing and improving our services.</p>
              
              <h3>Client Work Products</h3>
              <p>Unless explicitly agreed otherwise in writing, the ownership of work products created as part of our Services will be specified in separate client agreements. Such agreements will outline the rights granted to each party regarding the AI solutions developed.</p>
            </div>
            
            <div className="legal-section">
              <h2>6. Payments and Fees</h2>
              <p>The fees for our Services will be outlined in separate agreements with clients. All fees are quoted in New Zealand Dollars (NZD) unless specified otherwise and are exclusive of Goods and Services Tax (GST), which will be added where applicable.</p>
              <p>Payment terms will be specified in client agreements but typically require payment within 14 days of invoice date. Late payments may incur additional charges and/or suspension of services.</p>
            </div>
            
            <div className="legal-section">
              <h2>7. Confidentiality</h2>
              <p>We respect the confidentiality of information shared with us by clients. We will not disclose confidential information to any third party without prior consent, except as required by law. Confidential information includes, but is not limited to, business plans, technical details, unpublished works, financial information, and any other information marked as confidential or that would reasonably be understood to be confidential.</p>
            </div>
            
            <div className="legal-section">
              <h2>8. Termination</h2>
              <p>We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
            </div>
            
            <div className="legal-section">
              <h2>9. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, in no event shall Harkness AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
              <ul>
                <li>Your access to or use of or inability to access or use the Service;</li>
                <li>Any conduct or content of any third party on the Service;</li>
                <li>Any content obtained from the Service; and</li>
                <li>Unauthorized access, use or alteration of your transmissions or content.</li>
              </ul>
              <p>Where liability cannot be excluded, our total liability to you for all damages shall not exceed the amount paid by you, if any, for using our Services over the 12 months preceding the claim.</p>
            </div>
            
            <div className="legal-section">
              <h2>10. Disclaimer</h2>
              <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
              <p>Harkness AI does not warrant that the Service will be uninterrupted, timely, secure, or error-free. The results that may be obtained from the use of the Service may not be accurate or reliable.</p>
            </div>
            
            <div className="legal-section">
              <h2>11. Indemnification</h2>
              <p>You agree to defend, indemnify and hold harmless Harkness AI and its licensees and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to legal fees), resulting from or arising out of:</p>
              <ul>
                <li>Your use and access of the Service;</li>
                <li>A breach of these Terms; or</li>
                <li>Your violation of any third-party right, including without limitation any intellectual property right, property, or privacy right.</li>
              </ul>
            </div>
            
            <div className="legal-section">
              <h2>12. Consumer Guarantees Act</h2>
              <p>If you are acquiring our Services for business purposes, you agree that the Consumer Guarantees Act 1993 (NZ) does not apply to the Services. To the extent permitted by New Zealand law, any condition, warranty, guarantee, right, remedy, or other term implied by the Consumer Guarantees Act 1993 that can be lawfully excluded is excluded for services provided for business purposes.</p>
            </div>
            
            <div className="legal-section">
              <h2>13. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of New Zealand, without regard to its conflict of law provisions.</p>
              <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
            </div>
            
            <div className="legal-section">
              <h2>14. Dispute Resolution</h2>
              <p>Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity or termination, shall first be resolved through good faith negotiation between the parties. If the dispute cannot be resolved through negotiation within 30 days, either party may refer the dispute to mediation under the Resolution Institute Mediation Rules. If the dispute is not resolved within 60 days after the referral to mediation, either party may commence legal proceedings in the courts of New Zealand.</p>
            </div>
            
            <div className="legal-section">
              <h2>15. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
              <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
            </div>
            
            <div className="legal-section">
              <h2>16. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
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

export default TermsOfServicePage; 