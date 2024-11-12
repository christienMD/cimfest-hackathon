import ContactUs from '@/components/sections/ContactUs/ContactUs';
import Footer from '@/components/sections/Footer/Footer';
import Navbar from '@/components/sections/Navbar/Navbar';
import { footerData } from '@/utils/data';

const Contact = () => {
  return (
    <div className="bg-afro-base-bg">
      <Navbar />
      <ContactUs />
      <Footer footerData={footerData} />
    </div>
  );
};

export default Contact;
