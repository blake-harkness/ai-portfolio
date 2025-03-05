import { useState } from 'react';
import { FaQuoteLeft, FaFilter } from 'react-icons/fa';
import '../styles/CaseStudiesPage.css';
import glow4less from '/src/images/glow4less.png';
import nceanav from '/src/images/nceanav.jpg';
import cnc from '/src/images/cnc.png';
import tenancy from '/src/images/tenancy.jpg';
import hr from '/src/images/hr.jpg';
import quote2 from '/src/images/quote2.jpg';

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'education', label: 'Education' },
    { value: 'retail', label: 'Retail' },
    { value: 'utilities', label: 'Utilities' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'business', label: 'Business Solutions' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "NCEA Navigator - AI Powered Tutoring",
      category: "Education AI",
      industry: "education",
      description: "Developed an intelligent tutoring system to help students navigate NCEA studies with personalized learning paths and instant feedback.",
      image: nceanav,
      link: "https://ncea-navigator.vercel.app/",
      technologies: ["OpenAI API", "React", "Supabase", "NLP"],
      results: [
        "Generates additional external questions",
        "Provides instant feedback on students answers"
      ]
    },
    {
      id: 2,
      title: "Glow 4 Less - AI Beauty Product Analysis",
      category: "E-commerce AI",
      industry: "retail",
      description: "Created an AI-powered platform that users upload photos of beauty products to find more affordable alternatives with similar ingredients and effectiveness.",
      image: glow4less,
      link: "https://www.glow4less.nz/",
      technologies: ["OpenAI API", "React", "Supabase", "NLP"],
      results: [
        "Estimated average customer saving of $50",
        "90% match accuracy for product alternatives"
      ]
    },
    {
      id: 3,
      title: "Tenancy Mate - NZ Law Chatbot",
      category: "Natural Language Processing",
      industry: "utilities",
      description: "Built an intelligent chatbot system that answers queries about NZ tenancy regulations, providing instant accurate information to users.",
      image: tenancy,
      link: "https://tenancymatenz.zapier.app/",
      technologies: ["OpenAI API", "Zapier", "RAG", "NLP"],
      results: [
        "95% query accuracy rate",
        "User friendly instant access to tenancy law in NZ"
      ]
    },
    {
      id: 5,
      title: "CNC Parts Quality Control Vision System",
      category: "Computer Vision",
      industry: "manufacturing",
      description: "Developed a computer vision system for automated quality control of CNC-manufactured parts, detecting defects in real-time.",
      image: cnc,
      link: "blakeharkness.com",
      technologies: ["Python", "OpenCV", "Tensorflow"],
      results: [
        "99.5% defect detection accuracy",
        "Significant reduction in manual inspection time"
      ]
    },
    {
      id: 7,
      title: "HR Assistant - AI Powered QnA Chatbot",
      category: "Process Automation",
      industry: "business",
      description: "Created an automated system that extracts data from invoices and logs them directly into Excel spreadsheets, eliminating manual data entry.",
      image: hr,
      link: "https://hrassistant.zapier.app/",
      technologies: ["OpenAI API", "Zapier", "RAG", "NLP"],
      results: [
        "98% reduction in manual data entry time",
        "User friendly access to internal HR policy documents "
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "N/A",
      position: "N/A",
      company: "N/A",
      content: "This could be you, book a free session",
      image: "/images/testimonial-3.jpg"
    },
    {
      id: 2,
      name: "Dannielle Innes",
      position: "University Student",
      company: "N/A",
      content: "As a student, finding alternative products with Glow4Less has helped me save money. It was easy as to use.",
      image: quote2
    },
    {
      id: 3,
      name: "N/A",
      position: "N/A",
      company: "N/A",
      content: "This could be you, book a free session",
      image: "/images/testimonial-3.jpg"
    }
  ];

  const filteredCaseStudies = selectedIndustry === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="page case-studies-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">Our AI Solutions</h1>
          <p className="lead">Innovative applications of artificial intelligence solving real business challenges</p>
        </div>
        <div className="hero-background">
          <div className="overlay"></div>
          <div className="particles-container">
            <div className="particles"></div>
          </div>
        </div>
      </section>

      <section className="section filter-section">
        <div className="container">
          <div className="industry-filter">
            <div className="filter-label">
              <FaFilter className="filter-icon" />
              <label htmlFor="industry-select">Filter by Industry:</label>
            </div>
            <select
              id="industry-select"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="industry-select"
            >
              {industries.map(industry => (
                <option key={industry.value} value={industry.value}>
                  {industry.label}
                </option>
              ))}
            </select>
          </div>

          <div className="case-studies-grid">
            {filteredCaseStudies.map((study, index) => (
              <article key={study.id} className={`case-study-card card float float-delay-${index % 3 + 1}`}>
                <div className="case-study-image">
                  <img src={study.image} alt={study.title} />
                  <span className="category-tag">{study.category}</span>
                </div>
                
                <div className="case-study-content">
                  <h2>{study.title}</h2>
                  <p>{study.description}</p>
                  
                  <div className="technologies">
                    <h3>Technologies Used</h3>
                    <ul className="tech-list">
                      {study.technologies.map(tech => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="results">
                    <h3>Key Results</h3>
                    <ul className="results-list">
                      {study.results.map(result => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href={study.link} target="_blank" rel="noopener noreferrer" className="button button-primary view-project-btn">
                    View Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`testimonial-card card float float-delay-${index + 1}`}>
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <blockquote className="testimonial-quote">
                  {testimonial.content}
                </blockquote>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  {testimonial.company !== "N/A" && <p className="company">{testimonial.company}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Our AI Expertise</h2>
          <div className="skills-container">
            <div className="skills-category">
              <div className="skills-grid">
                <div className="skill-item card">
                  <h4>Deep Learning</h4>
                  <ul>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Neural Networks</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
                <div className="skill-item card">
                  <h4>Large Language Models</h4>
                  <ul>
                    <li>GPT Models</li>
                    <li>Retrieval Augmented Generation</li>
                    <li>Natural Language Processing</li>
                    <li>Sentiment Analysis</li>
                  </ul>
                </div>
                <div className="skill-item card">
                  <h4>Machine Learning</h4>
                  <ul>
                    <li>Scikit-learn</li>
                    <li>Statistical Analysis</li>
                    <li>Feature Engineering</li>
                    <li>Model Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage; 