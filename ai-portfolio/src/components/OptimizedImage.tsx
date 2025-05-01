import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
}

/**
 * This component wraps Next.js Image component but works in our current React setup
 * When migrating to Next.js, replace this with actual Next.js Image component
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '100vw',
  style,
  onLoad,
}) => {
  // Create srcSet for webp/avif formats
  const generateSrcSet = (format: string) => {
    const baseSrc = src.startsWith('/') ? src : `/${src}`;
    const srcWithoutExt = baseSrc.substring(0, baseSrc.lastIndexOf('.')) || baseSrc;
    
    return [
      `${srcWithoutExt}.${format}?w=640 640w`,
      `${srcWithoutExt}.${format}?w=750 750w`,
      `${srcWithoutExt}.${format}?w=828 828w`,
      `${srcWithoutExt}.${format}?w=1080 1080w`,
      `${srcWithoutExt}.${format}?w=1200 1200w`,
      `${srcWithoutExt}.${format}?w=1920 1920w`,
      `${srcWithoutExt}.${format}?w=2048 2048w`,
    ].join(', ');
  };

  return (
    <picture>
      {/* AVIF format */}
      <source
        type="image/avif"
        srcSet={generateSrcSet('avif')}
        sizes={sizes}
      />
      
      {/* WebP format */}
      <source
        type="image/webp"
        srcSet={generateSrcSet('webp')}
        sizes={sizes}
      />
      
      {/* Original image as fallback */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
        style={{
          objectFit: 'cover',
          ...style,
        }}
        onLoad={onLoad}
      />
    </picture>
  );
};

export default OptimizedImage; 