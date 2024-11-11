import ActiveCoaches from "@/components/sections/ActiveCoaches/ActiveCoaches";
import EngagedArtists from "@/components/sections/EngagedArtists/EngagedArtists";
import LandingPageHero from "@/components/sections/LandingPageHero/LandingPageHero";
import Navbar from "@/components/sections/Navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingPageHero />
      <EngagedArtists />
      <ActiveCoaches />
    </div>
  );
};

export default LandingPage;
