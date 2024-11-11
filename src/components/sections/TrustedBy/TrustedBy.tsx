import React from 'react';

import CIMFEST from '../../../../public/images/cimfest.png';
import BLUE from '../../../../public/images/blue.png';
import G2G from '../../../../public/images/g2g.jpg';
import ALPHA_BETTER from '../../../../public/images/alpha_better.jpeg';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => (
  <div className="flex items-center justify-center p-4 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]">
    <div className="relative w-full aspect-[3/2]">
      <img
        src={src}
        alt={alt}
        className="object-contain hover:opacity-80 transition-opacity duration-300"
        sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
      />
    </div>
  </div>
);

const TrustedBy: React.FC = () => {
  const logos = [
    { src: CIMFEST, alt: 'Cameroon International Music Festival' },
    { src: BLUE, alt: 'blue' },
    { src: G2G, alt: 'g2g' },
    { src: ALPHA_BETTER, alt: 'alpha_better_records' },
  ];

  return (
    <section className="bg-afro-base-bg text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <h2 className="heading ">Trusted by</h2>

          {/* Logo Grid */}
          <div className="w-full overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center justify-items-center">
              {logos.map((logo, index) => (
                <Logo key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
