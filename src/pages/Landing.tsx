import EngagedArtists from "@/components/sections/EngagedArtists/EngagedArtists";
import LandingPageHero from "@/components/sections/LandingPageHero/LandingPageHero";
import Navbar from "@/components/sections/Navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingPageHero />
      <EngagedArtists />
    </div>
  );
};

export default LandingPage;
