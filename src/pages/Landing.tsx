import ArtistProfileCard from "@/components/cards/ArtistInfoCard/ArtistInfoCard";
import LandingPageHero from "@/components/sections/LandingPageHero/LandingPageHero";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingPageHero />
      // Example usage
      <ArtistProfileCard
        name="Nkwi Cyril"
        role="Guitarist"
        imageUrl="/artist.jpg"
        description="Lorem ipsum dolor sit amet consectetur. A gravida id sed pellentesque tortor. Facilisi ut sed sed nisi nunc quisque ac vulputate. Nibh pretium porta velit arcu"
        onLearnMore={() => console.log("Learn more clicked")}
      />
    </div>
  );
};

export default LandingPage;
