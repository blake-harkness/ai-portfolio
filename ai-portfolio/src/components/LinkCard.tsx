import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LinkCard.css';

// Add type definition for gtag
declare global {
  interface Window {
    gtag: (
      command: string, 
      action: string, 
      params: {
        event_category?: string;
        event_label?: string;
        transport_type?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * LinkCard component for handling internal and external links with proper SEO attributes
 * Automatically adds noopener and noreferrer to external links and tracks outbound clicks
 */
const LinkCard: React.FC<LinkCardProps> = ({ 
  href, 
  title, 
  description, 
  icon,
  className = '',
  onClick
}) => {
  const isExternal = href.startsWith('http') || href.startsWith('//');
  
  // Track outbound clicks for analytics
  const handleClick = () => {
    if (isExternal) {
      // Track outbound click with GA4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'outbound',
          event_label: href,
          transport_type: 'beacon'
        });
      }
    }
    
    if (onClick) onClick();
  };
  
  const cardContent = (
    <>
      {icon && <div className="link-card-icon">{icon}</div>}
      <div className="link-card-content">
        <h3 className="link-card-title">{title}</h3>
        {description && <p className="link-card-description">{description}</p>}
      </div>
    </>
  );
  
  return isExternal ? (
    <a 
      href={href}
      className={`link-card ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={`${title} (opens in a new tab)`}
    >
      {cardContent}
    </a>
  ) : (
    <Link
      to={href}
      className={`link-card ${className}`}
      onClick={handleClick}
      aria-label={title}
    >
      {cardContent}
    </Link>
  );
};

export default LinkCard; 