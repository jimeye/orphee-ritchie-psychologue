import React from 'react';
import Image from 'next/image';
import Logo from './Logo';

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
}

const HeroSlider: React.FC<HeroProps> = ({
  image,
  title,
  subtitle,
  ctaText,
  ctaLink = "https://www.doctolib.fr/psychologue/saint-jean-de-luz/orphee-ritchie"
}) => {
  return (
    <div className="relative h-[110vh] w-full overflow-hidden -mt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full md:items-center items-start -mt-20 md:mt-0">
        <Logo />
      </div>


    </div>
  );
};

export default HeroSlider; 