import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import testimonials from '../data/testimonials';
import '../styles/TestimonialCarousel.css';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: number | null = null;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel-inner">
        <div className="testimonial-carousel-quote">
          <FaQuoteLeft className="quote-icon" />
          <p className="testimonial-text">{testimonials[activeIndex].quote}</p>
          <div className="testimonial-author">
            <div className="author-details">
              <h4>{testimonials[activeIndex].author}</h4>
              <p>{testimonials[activeIndex].position}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="carousel-controls">
        <button 
          className="carousel-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className="carousel-btn next-btn"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 