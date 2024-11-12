import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home" className="inline-block">
      <div className="flex items-center gap-1">
        <img src="/afro-coach-logo.png" alt="" />
        <span className="text-lg md:text-xl font-bold text-white">AFRO COACH</span>
      </div>
    </Link>
  );
};

export default Logo;
