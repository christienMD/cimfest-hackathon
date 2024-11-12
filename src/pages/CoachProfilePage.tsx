import CoachProfile from '@/components/sections/CoachProfile/CoachProfile';
import Footer from '@/components/sections/Footer/Footer';
import Navbar from '@/components/sections/Navbar/Navbar';
import { footerData } from '@/utils/data';

function CoachProfilePage() {
  return (
    <div>
      <Navbar showAuth={false} />
      <CoachProfile />
      <Footer footerData={footerData} />
    </div>
  );
}

export default CoachProfilePage;
