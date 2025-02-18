import Hero from '../components/Hero';
import { FaBrain, FaChartLine, FaRobot } from 'react-icons/fa';
import '../styles/HomePage.css';

const HomePage = () => {
  const aiCapabilities = [
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "Developing intelligent systems that learn and adapt from data, providing predictive insights and automation."
    },
    {
      icon: <FaRobot />,
      title: "Natural Language Processing",
      description: "Building systems that understand and process human language for improved communication and analysis."
    },
    {
      icon: <FaChartLine />,
      title: "Predictive Analytics",
      description: "Leveraging data to forecast trends and make informed business decisions."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Understanding your business needs and challenges through in-depth analysis and consultation."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Creating tailored AI solutions that align with your objectives and technical requirements."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Building and rigorously testing solutions to ensure reliability and performance."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Seamless implementation and ongoing support to ensure long-term success."
    }
  ];

  return (
    <div className="page home-page">
      <Hero />
      
      <section className="section features">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>AI Development</h3>
              <p>Building intelligent solutions using cutting-edge AI technologies and machine learning algorithms.</p>
            </div>
            <div className="feature-card">
              <h3>Web Development</h3>
              <p>Creating modern, responsive web applications with the latest frameworks and best practices.</p>
            </div>
            <div className="feature-card">
              <h3>Data Science</h3>
              <p>Transforming raw data into actionable insights through analysis and visualization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section ai-capabilities">
        <div className="container">
          <h2 className="section-title">AI Capabilities</h2>
          <div className="capabilities-grid">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <div className="icon">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <h2 className="section-title">My Process</h2>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 