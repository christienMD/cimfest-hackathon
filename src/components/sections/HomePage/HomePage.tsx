import { footerData } from "@/utils/data";
import Footer from "../Footer/Footer";
import HomePageMain from "../HomePageMain/HomePageMain";
import Navbar from "../Navbar/Navbar"
import Sidemenu from "../SideMenu/SideMenu";


const HomePage = () => {
  return (
    <div className="bg-afro-base-bg w-full">
      <Navbar />
      <main className="container mx-auto flex-grow flex flex-col lg:flex-row mt-4 gap-4 px-4">
        <div className="lg:w-[240px] lg:flex-shrink-0 mt-16">
          <Sidemenu />
        </div>
        <div className="flex-grow">
          <HomePageMain />
        </div>
      </main>
      <Footer footerData={footerData} />
    </div>
  );
}

export default HomePage