import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <button
      className="group relative h-[46px] w-full sm:w-[140px] text-base font-medium"
      style={{
        padding: "3px",
        background: "linear-gradient(90deg, #411294 0%, #9C64FF 100%)",
        borderRadius: "20px",
      }}
    >
      <Link to="/login">
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#411294] to-[#9C64FF] opacity-0 group-hover:opacity-20 transition-opacity" />
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-[#323052] to-[#411294] text-white rounded-[17px]">
          Sign Up
        </div>
      </Link>
    </button>
  );
};

export default GetStarted;
