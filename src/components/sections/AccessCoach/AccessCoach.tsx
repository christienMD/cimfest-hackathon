import React from 'react';
import GetStarted from '../GetStarted/GetStarted';

const CoachImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="group relative">
    <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 overflow-hidden rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="absolute inset-0 rounded-full ring-2 ring-white/20 transition-opacity duration-300 group-hover:ring-white/40" />
    </div>
  </div>
);

const AccessCoach: React.FC = () => {
  const coaches = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoINL9-nDvDKPEdPajQggv0J5UjoeoEE54lg&s',
      alt: 'Musician with guitar',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkms98_i4pd9NVZvjkHFk0PrufZQsNvvHuJA&s',
      alt: 'Guitar close-up',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjDrNk_WWoV65FhzYz5mfcMIQeIQivTvorA&s',
      alt: 'Microphone',
    },
    {
      src: '/images/indira.jpeg',
      alt: 'Microphone',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#2A2853]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Images */}
          <div className="w-full md:w-2/5 p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-lg mx-auto">
              {coaches.map((coach, index) => (
                <CoachImage key={index} src={coach.src} alt={coach.alt} />
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-3/5 flex flex-col justify-center p-6 sm:p-8 md:p-12 text-white">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Access to coaches
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                Get personalized feedback from our experts. Learn from
                practitioners in the field.
              </p>

              {/* Optional CTA Button */}
              <div className="mt-8">
                <GetStarted />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessCoach;
