import { FaQuoteLeft } from 'react-icons/fa';
import testimonials from '../data/testimonials';
import '../styles/TestimonialScroll.css';

const TestimonialScroll = () => {
  return (
    <div className="testimonial-scroll-container" aria-label="Testimonials from clients and users">
      <div className="testimonial-scroll-track">
        {/* Double the testimonials to create the infinite scroll effect */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card" 
            aria-label={`Testimonial from ${testimonial.author}, ${testimonial.position}`}
          >
            <FaQuoteLeft className="quote-icon" aria-hidden="true" />
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="testimonial-author">
              <div className="author-details">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialScroll; 