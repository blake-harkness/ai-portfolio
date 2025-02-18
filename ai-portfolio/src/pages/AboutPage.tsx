import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="page about-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          <p className="lead">Passionate AI Engineer with a drive for innovation</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>My Journey</h2>
              <p>
                With over [X] years of experience in AI and software development,
                I've dedicated my career to creating intelligent solutions that solve
                real-world problems. My journey began with a deep fascination for
                technology and its potential to transform lives.
              </p>
              <p>
                I specialize in machine learning, deep learning, and full-stack
                development, combining technical expertise with a keen eye for user
                experience and business value.
              </p>
            </div>

            <div className="skills-section">
              <h2>Skills & Expertise</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>AI & Machine Learning</h3>
                  <ul>
                    <li>TensorFlow / PyTorch</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                    <li>Deep Learning</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Web Development</h3>
                  <ul>
                    <li>React / TypeScript</li>
                    <li>Node.js / Python</li>
                    <li>RESTful APIs</li>
                    <li>Cloud Services (AWS/GCP)</li>
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

export default AboutPage; 