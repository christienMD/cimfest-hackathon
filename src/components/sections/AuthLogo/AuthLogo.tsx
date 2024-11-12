import { Link } from "react-router-dom";

const AuthLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-center gap-2 mb-6 md:mb-8"
    >
      <div className="p-0.5">
        <img
          src="/afro-coach-logo.png"
          alt="Afro Coach Logo"
          className="w-10 h-10 md:w-14 md:h-14"
        />
      </div>
      <span className="font-bold text-2xl">AFRO COACH</span>
    </Link>
  );
};

export default AuthLogo;
