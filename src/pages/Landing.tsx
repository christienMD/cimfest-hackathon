import ActiveCoaches from "@/components/sections/ActiveCoaches/ActiveCoaches";
import EngagedArtists from "@/components/sections/EngagedArtists/EngagedArtists";
import LandingPageHero from "@/components/sections/LandingPageHero/LandingPageHero";
import Navbar from "@/components/sections/Navbar/Navbar";
import HowItWork from '@/components/sections/HowItWork/HowItWork';
import Footer from '@/components/sections/Footer/Footer'; // Import your custom Footer
import { faqs, footerData } from '@/utils/data';
import FaqsComponent from '@/components/sections/Faqs/Faqs';
import TrustedBy from "@/components/sections/TrustedBy/TrustedBy";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingPageHero />
      <TrustedBy />
      <EngagedArtists />
      <ActiveCoaches />
      <div className="bg-afro-base-bg text-white py-12 px-2">
        <HowItWork />
      </div>

      <div className="bg-afro-base-bg">
        <FaqsComponent faqs={faqs} />
      </div>

      <div className="bg-afro-base-bg text-white py-12 px-2">
        <Footer footerData={footerData} />
      </div>
      <EngagedArtists />
      <ActiveCoaches />
      <div className="bg-afro-base-bg text-white py-12 px-2">
        <HowItWork />
      </div>

      <div className="bg-afro-base-bg">
        <FaqsComponent faqs={faqs} />
      </div>

      <div className="bg-afro-base-bg text-white py-12 px-2">
        <Footer footerData={footerData} />
      </div>
    </div>
  );
};

export default LandingPage;
