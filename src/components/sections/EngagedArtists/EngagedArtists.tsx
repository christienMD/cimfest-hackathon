import ArtistInfoCard from "@/components/cards/ArtistInfoCard/ArtistInfoCard";


// Define the artist data type
interface Artist {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

// Sample artist data
const artists: Artist[] = [
  {
    id: "1",
    name: "Nkwi Cyril",
    role: "Guitarist",
    imageUrl: "/artist.jpg", // Using placeholder for demo
    description:
      "Lorem ipsum dolor sit amet consectetur. A gravida id sed pellentesque tortor. Facilisi ut sed sed nisi nunc quisque ac vulputate. Nibh pretium porta velit arcu",
  },
  {
    id: "2",
    name: "Nkwi Cyril",
    role: "Guitarist",
    imageUrl: "/artist.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. A gravida id sed pellentesque tortor. Facilisi ut sed sed nisi nunc quisque ac vulputate. Nibh pretium porta velit arcu",
  },
  {
    id: "3",
    name: "Nkwi Cyril",
    role: "Guitarist",
    imageUrl: "/artist.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. A gravida id sed pellentesque tortor. Facilisi ut sed sed nisi nunc quisque ac vulputate. Nibh pretium porta velit arcu",
  },
];


const EngagedArtists = () => {
  return (
    <section className="w-full bg-[#333057] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="heading2">
            See the most <span className="font-bold">engaged artist</span>
          </h2>
        </div>

        {/* Artists Grid - with reduced card sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-6 max-w-6xl mx-auto">
          {artists.map((artist) => (
            <div key={artist.id} className="flex justify-center">
              <ArtistInfoCard
                name={artist.name}
                role={artist.role}
                imageUrl={artist.imageUrl}
                description={artist.description}
                onLearnMore={() =>
                  console.log(`Learn more about ${artist.name}`)
                }
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagedArtists;