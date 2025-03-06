import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaLightbulb, FaRobot, FaCode, FaChartLine, FaPen, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/HowICanHelpPage.css';

const HowICanHelpPage: React.FC = () => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      id: 1,
      title: "AI Strategy Consulting",
      icon: <FaLightbulb className="service-icon" />,
      description: "Develop a comprehensive AI strategy tailored to your business needs. I'll help you identify opportunities, assess feasibility, and create a roadmap for AI implementation.",
      benefits: [
        "Custom AI roadmap aligned with business goals",
        "Competitive analysis and market positioning",
        "Risk assessment and mitigation strategies",
        "ROI projections and success metrics"
      ],
      cta: "Schedule a Strategy Session"
    },
    {
      id: 2,
      title: "Conversational AI Development",
      icon: <FaRobot className="service-icon" />,
      description: "Create sophisticated AI chatbots and virtual assistants that engage your customers naturally. From simple FAQ bots to complex conversational agents, I'll build solutions that enhance user experience.",
      benefits: [
        "Natural language understanding and generation",
        "Seamless integration with existing platforms",
        "Continuous learning and improvement",
        "Multi-channel deployment (web, mobile, messaging)"
      ],
      cta: "Explore Conversational AI"
    },
    {
      id: 3,
      title: "Custom AI Solution Development",
      icon: <FaCode className="service-icon" />,
      description: "Transform your ideas into powerful AI applications. I specialize in developing custom AI solutions that solve specific business problems and create competitive advantages.",
      benefits: [
        "End-to-end development from concept to deployment",
        "Integration with existing systems and workflows",
        "Scalable architecture for future growth",
        "Comprehensive documentation and knowledge transfer"
      ],
      cta: "Start Your AI Project"
    },
    {
      id: 4,
      title: "AI-Powered Analytics",
      icon: <FaChartLine className="service-icon" />,
      description: "Unlock the power of your data with AI-driven analytics. I'll help you implement predictive models, recommendation systems, and data visualization tools that drive better decision-making.",
      benefits: [
        "Predictive analytics and forecasting",
        "Customer segmentation and targeting",
        "Anomaly detection and risk management",
        "Interactive dashboards and visualizations"
      ],
      cta: "Leverage Your Data"
    },
    {
      id: 5,
      title: "Content Creation",
      icon: <FaPen className="service-icon" />,
      description: "Generate high-quality, engaging content at scale with AI. From marketing copy to technical documentation, I'll help you create compelling content that resonates with your audience.",
      benefits: [
        "AI-powered content generation",
        "SEO-optimized writing",
        "Multilingual content support",
        "Consistent brand voice and messaging"
      ],
      cta: "Create Content"
    },
    {
      id: 6,
      title: "AI Automation",
      icon: <FaCogs className="service-icon" />,
      description: "Streamline your business processes with intelligent automation solutions. From workflow automation to smart document processing, I'll help you reduce manual tasks and increase operational efficiency.",
      benefits: [
        "Intelligent process automation",
        "Document processing and data extraction",
        "Workflow optimization",
        "Integration with existing tools and systems"
      ],
      cta: "Automate with AI"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin with a thorough consultation to understand your business, challenges, and goals. This helps me identify how AI can create the most value for your organization."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on our discovery, I develop a tailored AI strategy that outlines the approach, technologies, timeline, and expected outcomes for your project."
    },
    {
      number: "03",
      title: "Development",
      description: "My iterative development process ensures you're involved at every stage. I build, test, and refine the AI solution to meet your specific requirements."
    },
    {
      number: "04",
      title: "Implementation",
      description: "I carefully deploy the AI solution into your environment, ensuring seamless integration with existing systems and providing comprehensive training for your team."
    },
    {
      number: "05",
      title: "Optimization",
      description: "AI solutions improve over time. I provide ongoing support to monitor performance, gather feedback, and continuously enhance your AI capabilities."
    }
  ];

  return (
    <div className="how-i-can-help-page">
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
            AI Solutions for Your Business
          </motion.h1>
          <motion.p 
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Transforming businesses through innovative AI solutions that drive growth, efficiency, and competitive advantage.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2>How I Can Help</h2>
            <p>Specialized AI services designed to address your unique business challenges</p>
          </motion.div>

          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                className="service-card"
                variants={fadeIn}
              >
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="benefits">
                  <h4>Key Benefits</h4>
                  <ul>
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>
                        <FaCheck className="check-icon" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="cta-button">
                  {service.cta} <FaArrowRight className="arrow-icon" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2>My Process</h2>
            <p>A structured approach to delivering successful AI solutions</p>
          </motion.div>

          <motion.div 
            className="process-timeline"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="process-step"
                variants={fadeIn}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Let's discuss how my AI solutions can address your specific challenges and drive meaningful results.</p>
            <Link to="/contact" className="primary-button">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowICanHelpPage; 