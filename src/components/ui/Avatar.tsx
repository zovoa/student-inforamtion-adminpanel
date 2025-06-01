import React, { useState } from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md',
  className = ''
}) => {
  const [error, setError] = useState(false);
  
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  const handleError = () => {
    setError(true);
  };

  // Get initials from the alt text (assuming alt is the name)
  const getInitials = () => {
    const parts = alt.split(' ');
    if (parts.length === 1) return parts[0].charAt(0);
    return parts[0].charAt(0) + parts[parts.length - 1].charAt(0);
  };

  return error ? (
    <div 
      className={`${sizeClasses[size]} rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 flex items-center justify-center font-medium ${className}`}
      aria-label={alt}
    >
      {getInitials()}
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={`${sizeClasses[size]} rounded-full object-cover shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    />
  );
};

export default Avatar;