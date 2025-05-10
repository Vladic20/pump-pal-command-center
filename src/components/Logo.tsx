
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-success to-success/70 flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-dark"></div>
      </div>
      <span className="font-bold text-xl">PumpPal</span>
    </div>
  );
};

export default Logo;
