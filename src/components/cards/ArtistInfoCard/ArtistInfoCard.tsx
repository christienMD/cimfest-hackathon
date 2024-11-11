
interface Props {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  onLearnMore?: () => void;
  className?: string;
}

const ArtistInfoCard = ({
  name,
  role,
  imageUrl,
  description,
  onLearnMore,
  className = "",
}: Props) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {/* Image Container - reduced height */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container - reduced padding */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500">{role}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <button
          onClick={onLearnMore}
          className="w-full py-2 bg-purple-400 hover:bg-purple-500 text-white rounded-md transition-colors duration-200 text-sm"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ArtistInfoCard;
