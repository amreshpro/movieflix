import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt,className='' }:{src:string,alt:string,className:string}) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : '/movie-placeholder.jpg'}
      alt={alt}
      className={className}
      style={{transition: 'opacity 0.5s ease-in-out' }}
    />
  );
};

export default LazyImage;