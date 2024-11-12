import Footer from "@/components/sections/Footer/Footer";
import Navbar from "@/components/sections/Navbar/Navbar";
import AIQuestionsPage from "@/components/sections/Questions/AIQuestionsPage";
import { footerData } from "@/utils/data";

const AIQuestions = () => {
  return (
    <div>
      <Navbar logoRoute="/" />
      <AIQuestionsPage />
      <Footer logoRoute="/" footerData={footerData} />
    </div>
  );
};

export default AIQuestions;
