import React from 'react';

interface LogoProps {
  name?: string;
  profession?: string;
  location?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  name = "ORPHEE RITCHIE",
  profession = "PSYCHOLOGUE", 
  location = "SAINT JEAN DE LUZ",
  className = ""
}) => {
  return (
    <div className={`text-center flex flex-col items-center justify-center ${className}`}>
      {/* Ligne 1 - Nom */}
      <div className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide mb-4 font-tinos text-center" style={{ fontSize: 'calc(1.15 * 1.5 * 1.5rem)' }}>
        {name}
      </div>
      
      {/* Ligne 2 - Profession */}
      <div className="text-lg md:text-xl font-semibold text-menu-normal tracking-wider mb-3 font-tinos text-center" style={{ letterSpacing: '0.7em', fontSize: 'calc(1.15 * 1.3 * 1.125rem)' }}>
        {profession}
      </div>
      
      {/* Ligne 3 - Localisation */}
      <div className="text-sm md:text-base font-medium text-gray-600 tracking-wide font-tinos text-center" style={{ letterSpacing: '0.47em', fontSize: 'calc(1.15 * 1.22 * 1rem)' }}>
        {location}
      </div>
    </div>
  );
};

export default Logo; 