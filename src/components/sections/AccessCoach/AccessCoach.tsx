import React from 'react';

const AccessCoach: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden  bg-[#2A2853] md:flex-row">
      {/* Left side - Images */}
      <div className="flex flex-wrap gap-4 p-6 md:w-1/3 md:flex-col md:justify-center md:items-center md:p-8 justify-center items-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-32 md:w-32">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoINL9-nDvDKPEdPajQggv0J5UjoeoEE54lg&s"
            alt="Musician with guitar"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-32 md:w-32">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkms98_i4pd9NVZvjkHFk0PrufZQsNvvHuJA&s"
            alt="Guitar close-up"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-32 md:w-32">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjDrNk_WWoV65FhzYz5mfcMIQeIQivTvorA&s"
            alt="Microphone"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-32 md:w-32">
          <img
            src="/images/indira.jpeg"
            alt="Microphone"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex flex-1 flex-col justify-center p-6 text-white md:p-12">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
          Access to coaches
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl">
          Get personalized feedback from our experts. Learn from practitioners
          in the field.
        </p>
      </div>
    </div>
  );
};

export default AccessCoach;
