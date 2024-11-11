import React from 'react';

interface ArtistProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  onLearnMore?: () => void;
  className?: string;
}

const ArtistProfileCard = ({
  name,
  role,
  imageUrl,
  description,
  onLearnMore,
  className = ''
}: ArtistProfileCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden max-w-sm ${className}`}>
      {/* Image Container */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500">{role}</span>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          {description}
        </p>

        <button
          onClick={onLearnMore}
          className="w-full py-2 bg-purple-400 hover:bg-purple-500 text-white rounded-md transition-colors duration-200"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ArtistProfileCard;