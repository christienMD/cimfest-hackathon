import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { navLinks } from "@/utils/data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import AnnouncementAlert from "../AnnouncementAlert/AnnouncementAlert";
import GetStarted from "../GetStarted/GetStarted";
import Logo from "../Logo/Logo";
import { UserProfile } from "../UserProfile/UserProfile";

interface Props {
  showAuth?: boolean;
  logoRoute?: string;
}


const Navbar = ({ showAuth = true , logoRoute }: Props) => {
  const NavigationLinks = ({
    className = "navbar-center mb-4 md:mb-0 font-bold text-xl",
  }) => (
    <ul
      className={`flex flex-col md:flex-row space-y-2 fond-medium text-lg md:space-y-0 md:space-x-4 ${className}`}
    >
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link to={link.to} className="text-lg font-bold relative group">
            <span className="relative">
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#411294] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );

  const AuthButtons = ({ className = "" }) => (
    <div
      className={`flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 ${className}`}
    >
      <button
        className="group relative h-[46px] w-full sm:w-[140px] text-base font-medium"
        style={{
          padding: "3px",
          background: "linear-gradient(90deg, #411294 0%, #9C64FF 100%)",
          borderRadius: "20px",
        }}
      >
        <Link to="/login" className="w-full">
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#411294] to-[#9C64FF] opacity-0 group-hover:opacity-20 transition-opacity" />
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-[#323052] to-[#411294] text-white rounded-[17px] font-bold">
            Login
          </div>
        </Link>
      </button>
      <GetStarted />
    </div>
  );

  return (
    <>
      <AnnouncementAlert month="October" percentageDiscount={20} />
      <nav className="fixed top-6 left-0 right-0 bg-afro-base-bg text-white z-30">
        <div className="px-4 md:px-11">
          <div className="flex items-center h-16 md:h-20">
            <Logo route={logoRoute}/>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center gap-8">
              <NavigationLinks className="space-x-8 text-xl gap-8" />
            </div>

            {/* Right Section: Auth, Cart, Profile */}
            <div className="flex items-center ml-auto space-x-4">
              {/* Desktop Auth Buttons */}
              {showAuth && (
                <div className="hidden md:block">
                  <AuthButtons />
                </div>
              )}

              {!showAuth && <UserProfile />}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <MenuIcon className="h-8 w-8" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] bg-afro-base-bg text-white border-0 shadow-none"
                >
                  <div className="h-full flex flex-col p-6">
                    <SheetHeader className="mb-6">
                      <Logo />
                    </SheetHeader>

                    <div className="flex flex-col flex-1">
                      <NavigationLinks className="space-y-4 mb-8" />
                      <div className="mt-auto">
                        {/* Conditional rendering in mobile menu */}
                        <AuthButtons />
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
