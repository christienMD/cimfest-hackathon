import ArtistProfile from '@/components/sections/ArtistProfile/ArtistProfile';
import Footer from '@/components/sections/Footer/Footer';
import Navbar from '@/components/sections/Navbar/Navbar';
import { footerData } from '@/utils/data';

function ArtistProfilePage() {
  return (
    <div>
      <Navbar showAuth={false} />
      <ArtistProfile />
      <Footer footerData={footerData} />
    </div>
  );
}

export default ArtistProfilePage;
