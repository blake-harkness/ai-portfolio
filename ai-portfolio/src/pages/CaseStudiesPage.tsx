import { useState } from 'react';
import '../styles/CaseStudiesPage.css';

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'finance', label: 'Finance' },
    { value: 'retail', label: 'Retail' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Platform",
      category: "Machine Learning",
      industry: "retail",
      description: "Developed an intelligent customer service platform that reduced response times by 60% using NLP.",
      image: "/images/case-study-1.jpg",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      results: [
        "60% reduction in response time",
        "85% customer satisfaction rate",
        "40% cost reduction in customer service operations"
      ]
    },
    {
      id: 2,
      title: "Computer Vision for Quality Control",
      category: "Computer Vision",
      industry: "manufacturing",
      description: "Implemented a computer vision system for manufacturing quality control, achieving 99.9% accuracy.",
      image: "/images/case-study-2.jpg",
      technologies: ["PyTorch", "OpenCV", "Docker", "Azure"],
      results: [
        "99.9% defect detection accuracy",
        "75% reduction in manual inspection time",
        "50% decrease in defective products"
      ]
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      category: "Data Science",
      industry: "finance",
      description: "Created a predictive analytics dashboard for business intelligence, improving decision-making efficiency.",
      image: "/images/case-study-3.jpg",
      technologies: ["Python", "Scikit-learn", "D3.js", "PostgreSQL"],
      results: [
        "30% improvement in forecast accuracy",
        "25% increase in revenue",
        "40% reduction in inventory costs"
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, HealthTech Solutions",
      company: "HealthTech Solutions",
      content: "Working with this team was transformative for our business. The AI solutions they implemented exceeded our expectations and delivered real value to our customers.",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Innovation",
      company: "Global Manufacturing Corp",
      content: "The computer vision system revolutionized our quality control process. The attention to detail and technical expertise were outstanding.",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Head of Digital Transformation",
      company: "FinTech Innovations",
      content: "The predictive analytics dashboard they built has become an essential tool for our decision-making process. Highly recommended!",
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
          <h1 className="page-title">Case Studies</h1>
          <p className="lead">Exploring real-world applications of AI and machine learning</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="industry-filter">
            <label htmlFor="industry-select">Filter by Industry:</label>
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
            {filteredCaseStudies.map(study => (
              <article key={study.id} className="case-study-card">
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
                  
                  <a href="#" className="read-more-btn">
                    View Full Case Study
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
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <p>{testimonial.content}</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.position}</p>
                    <p className="company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage; 