import React from 'react';
import '../styles/ContactCard.css';

interface ContactCardProps {
  className?: string;
  showMap?: boolean;
}

/**
 * ContactCard component with NAP (Name, Address, Phone) markup for local SEO
 */
const ContactCard: React.FC<ContactCardProps> = ({ 
  className = '',
  showMap = true
}) => {
  return (
    <div className={`contact-card ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
      <div className="contact-card-content">
        <h3 className="contact-card-title" itemProp="name">Harkness AI</h3>
        
        <div className="contact-info">
          <div className="info-group">
            <strong>Location:</strong>
            <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Christchurch</span>,{' '}
              <span itemProp="addressRegion">Canterbury</span>,{' '}
              <span itemProp="addressCountry">New Zealand</span>
            </address>
          </div>
          
          <div className="info-group">
            <strong>Service Area:</strong>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/GeoCircle">
              <div itemProp="geoMidpoint" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="-43.5321" />
                <meta itemProp="longitude" content="172.6362" />
              </div>
              <meta itemProp="geoRadius" content="100" />
              <span>All of New Zealand</span>
            </div>
          </div>
          
          <div className="info-group">
            <strong>Email:</strong>
            <a href="mailto:blake@harknessai.nz" itemProp="email">
              blake@harknessai.nz
            </a>
          </div>
        </div>
        
        <meta itemProp="priceRange" content="$$" />
        <meta itemProp="url" content="https://www.harknessai.nz" />
      </div>
      
      {showMap && (
        <div className="contact-card-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187185.63118109268!2d172.49829286035063!3d-43.517447870846356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a0e0c6f5977%3A0x514a64434d9e56b5!2sChristchurch%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1705548753360!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Harkness AI location in Christchurch, New Zealand"
            aria-label="Google Map showing Harkness AI's location in Christchurch, New Zealand"
          />
        </div>
      )}
    </div>
  );
};

export default ContactCard; 