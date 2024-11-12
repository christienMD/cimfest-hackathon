import Footer from "@/components/sections/Footer/Footer";
import Navbar from "@/components/sections/Navbar/Navbar";
import TalentHubPage from "@/components/sections/TalentHub/TalentHub";
import { footerData } from "@/utils/data";

function TalentHub() {
  return (
    <div className="">
      <Navbar showAuth={false} />
      <TalentHubPage />
      <Footer footerData={footerData} />
    </div>
  );
}

export default TalentHub;
