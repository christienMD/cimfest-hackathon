import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { navLinks } from '@/utils/data';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import AnnouncementAlert from '../AnnouncementAlert/AnnouncementAlert';
import GetStarted from '../GetStarted/GetStarted';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const NavigationLinks = ({
    className = 'navbar-center mb-4 md:mb-0 font-bold text-xl',
  }) => (
    <ul
      className={`flex flex-col md:flex-row space-y-2 fond-bold text-xl md:space-y-0 md:space-x-4 ${className}`}
    >
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="text-lg font-bold hover:text-gray-600 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const AuthButtons = ({ className = '' }) => (
    <div
      className={`flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 ${className}`}
    >
      <Button className=" text-white text-xl bg-afro-base-bg px-6 w-full md:w-auto ">
        <Link to="/login" className="w-full">
          Login
        </Link>
      </Button>
      <GetStarted />
    </div>
  );

  return (
    <>
      <AnnouncementAlert month="November" percentageDiscount={20} />
      <nav className="fixed top-6 left-0 right-0 bg-afro-base-bg text-white z-30 ">
        <div className="px-4 md:px-11">
          <div className="flex items-center h-16 md:h-20">
            {/* Logo */}
            {/* <div className="flex-shrink-0 font-bold">
              <h1 className="text-2xl md:text-4xl font-bold text-creator-bg-400">
                <Link to="/">AFRO TALENT</Link>
              </h1>
            </div> */}
            <Logo />

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center gap-8">
              <NavigationLinks className="space-x-8 text-xl gap-8" />
            </div>

            {/* Right Section: Auth, Cart, Profile */}
            <div className="flex items-center ml-auto space-x-4">
              {/* Desktop Auth Buttons */}

              <div className="hidden md:block">
                <AuthButtons />
              </div>
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
                  className="w-[300px] bg-afro-base-bg text-white"
                >
                  <div className="h-full flex flex-col p-6">
                    <SheetHeader className="mb-6">
                      <h2 className="text-3xl font-bold flex flex-col-1">
                        <Link to="/">AFRO COACH</Link>
                      </h2>
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
