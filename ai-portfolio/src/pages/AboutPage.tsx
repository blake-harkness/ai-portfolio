import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="page about-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">About Harkness AI</h1>
          <p className="lead">Advanced AI Solutions Driving Business Innovation</p>
        </div>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="about-content">
            <p>
              At Harkness AI, we specialize in developing cutting-edge artificial intelligence solutions 
              that transform how businesses operate. Our expertise spans across machine learning, 
              natural language processing, and computer vision technologies.
            </p>
            <p>
              We believe in making AI accessible and practical for businesses of all sizes, 
              helping them leverage the power of artificial intelligence to drive growth, 
              improve efficiency, and stay competitive in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 