import { useState } from 'react';
import '../styles/CaseStudiesPage.css';

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
      title: "NCEA Navigator AI-Powered Tutoring",
      category: "Education AI",
      industry: "education",
      description: "Developed an intelligent tutoring system to help students navigate NCEA studies with personalized learning paths and instant feedback.",
      image: "/images/nceanav.jpg",
      technologies: ["Python", "OpenAI GPT", "React", "MongoDB"],
      results: [
        "Improved student engagement by 40%",
        "85% of students reported better understanding of subjects",
        "Reduced tutoring costs by 60% for families"
      ]
    },
    {
      id: 2,
      title: "Glow 4 Less - AI Beauty Product Analysis",
      category: "E-commerce AI",
      industry: "retail",
      description: "Created an AI-powered platform that analyzes beauty products to find more affordable alternatives with similar ingredients and effectiveness.",
      image: "/images/glow4less.jpg",
      technologies: ["Python", "Natural Language Processing", "React", "PostgreSQL"],
      results: [
        "Average customer savings of 45%",
        "90% match accuracy for product alternatives",
        "User base growth of 200% in 6 months"
      ]
    },
    {
      id: 3,
      title: "Electricity Code QnA Bot",
      category: "Natural Language Processing",
      industry: "utilities",
      description: "Built an intelligent chatbot system that answers queries about electricity codes and regulations, providing instant accurate information to technicians.",
      image: "/images/electricityrag.jpg",
      technologies: ["Python", "BERT", "FastAPI", "ElasticSearch"],
      results: [
        "95% query accuracy rate",
        "70% reduction in manual code lookup time",
        "24/7 instant access to code information"
      ]
    },
    {
      id: 4,
      title: "Seasonal Forecasting System",
      category: "Predictive Analytics",
      industry: "retail",
      description: "Implemented a machine learning system for seasonal demand forecasting, helping businesses optimize inventory and staffing levels.",
      image: "/images/sarimaxforecast.jpg",
      technologies: ["Python", "TensorFlow", "Power BI", "AWS"],
      results: [
        "85% forecast accuracy",
        "30% reduction in excess inventory",
        "25% improvement in staff scheduling efficiency"
      ]
    },
    {
      id: 5,
      title: "CNC Parts Quality Control Vision System",
      category: "Computer Vision",
      industry: "manufacturing",
      description: "Developed a computer vision system for automated quality control of CNC-manufactured parts, detecting defects in real-time.",
      image: "/images/cncvision.jpg",
      technologies: ["Python", "OpenCV", "PyTorch", "Docker"],
      results: [
        "99.5% defect detection accuracy",
        "80% reduction in manual inspection time",
        "60% decrease in defective parts reaching customers"
      ]
    },
    {
      id: 6,
      title: "Automated Invoice Processing System",
      category: "Process Automation",
      industry: "business",
      description: "Created an automated system that extracts data from invoices and logs them directly into Excel spreadsheets, eliminating manual data entry.",
      image: "/images/invoiceautomation.jpg",
      technologies: ["Python", "OCR", "Azure", "Microsoft Excel API"],
      results: [
        "95% reduction in manual data entry time",
        "99.9% accuracy in data extraction",
        "ROI achieved within 3 months"
      ]
    },
    {
      id: 7,
      title: "Internal HR Policy Chatbot",
      category: "Process Automation",
      industry: "business",
      description: "Created an automated system that extracts data from invoices and logs them directly into Excel spreadsheets, eliminating manual data entry.",
      image: "/images/hrchatbot.jpg",
      technologies: ["Python", "OCR", "Azure", "Microsoft Excel API"],
      results: [
        "95% reduction in manual data entry time",
        "99.9% accuracy in data extraction",
        "ROI achieved within 3 months"
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "David Wilson",
      position: "Head of Department",
      company: "Wellington High School",
      content: "The NCEA Navigator has transformed how our students approach their studies. The personalized learning paths have made a significant difference in student achievement.",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Lisa Chen",
      position: "Operations Manager",
      company: "Precision Parts NZ",
      content: "The computer vision system has revolutionized our quality control process. We've seen a dramatic reduction in defects and improved customer satisfaction.",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "James Thompson",
      position: "Financial Controller",
      company: "Thompson & Associates",
      content: "The automated invoice processing system has saved us countless hours of manual data entry. It's incredibly accurate and has streamlined our entire accounts payable process.",
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

      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3>AI & Machine Learning</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <h4>Deep Learning</h4>
                  <ul>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Neural Networks</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
                <div className="skill-item">
                  <h4>Natural Language Processing</h4>
                  <ul>
                    <li>BERT/GPT Models</li>
                    <li>Text Classification</li>
                    <li>Named Entity Recognition</li>
                    <li>Sentiment Analysis</li>
                  </ul>
                </div>
                <div className="skill-item">
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
            
            <div className="skills-category">
              <h3>Development & Cloud</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <h4>Frontend Development</h4>
                  <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>HTML/CSS</li>
                    <li>Modern UI/UX</li>
                  </ul>
                </div>
                <div className="skill-item">
                  <h4>Backend Development</h4>
                  <ul>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>RESTful APIs</li>
                    <li>Database Design</li>
                  </ul>
                </div>
                <div className="skill-item">
                  <h4>Cloud & DevOps</h4>
                  <ul>
                    <li>AWS Services</li>
                    <li>Docker</li>
                    <li>CI/CD</li>
                    <li>Microservices</li>
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