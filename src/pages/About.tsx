import AboutPage from "@/components/AboutPage/AboutPage"
import Footer from "@/components/sections/Footer/Footer"
import Navbar from "@/components/sections/Navbar/Navbar"
import { footerData } from "@/utils/data"

const About = () => {
  return (
    <>
    <Navbar />
    <AboutPage />
    <Footer footerData={footerData} />
    </>
  )
}

export default About