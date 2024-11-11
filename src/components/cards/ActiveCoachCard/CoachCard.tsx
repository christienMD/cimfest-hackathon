interface ActiveCoachCardProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  onLearnMore?: () => void;
  className?: string;
}

const CoachCard = ({
  name,
  role,
  imageUrl,
  description,
  onLearnMore,
  className = "",
}: ActiveCoachCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full ${className}`}
    >
      {/* Image Container - significantly reduced height on mobile */}
      <div className="w-full h-44 sm:h-auto sm:aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-[#2F2F2F] mb-1">{name}</h3>
          <span className="text-sm text-[#6B7280] font-medium inline-block line-clamp-1">
            {role}
          </span>
        </div>

        <p className="text-[#4B5563] text-sm mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        <button
          onClick={onLearnMore}
          className="w-full py-2.5 bg-[#D4BBFF] hover:bg-[#C4A2FF] text-[#411294] hover:opacity-90 rounded-full transition-colors duration-200 text-sm font-medium mt-auto"
        >
          see profile
        </button>
      </div>
    </div>
  );
};

export default CoachCard;
