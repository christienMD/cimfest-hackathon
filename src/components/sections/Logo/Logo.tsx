import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home" className="inline-block">
      <div className="flex items-center gap-3">
        <img src="/afro-coach-logo.png" alt="" />
        <span className="text-lg md:text-xl font-bold text-gray-900">AFRO COACH</span>
      </div>
    </Link>
  );
};

export default Logo;
