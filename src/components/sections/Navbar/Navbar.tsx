import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <div className="relative">
      {/* Purple announcement bar */}
      <div className="bg-indigo-600 px-4 py-2 text-center text-sm text-white">
        Get 20% off this November if you are a Blue subscribe
      </div>

      {/* Main navigation */}
      <nav className="bg-slate-900 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Afro Coach"
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <span className="text-lg md:text-2xl font-bold text-white">
              AFRO TALENT
            </span>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-8 font-bold text-xl">
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="/categories" className="text-white hover:text-gray-300">
              Categories
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Desktop Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="text-white bg-black hover:bg-white hover:text-slate-900 font-bold text-lg md:text-xl">
              Login
            </Button>
            <Button className="border-indigo-500 rounded-full border-2 px-4 py-2 md:px-8 md:py-6 font-bold text-lg md:text-xl">
              Get started
            </Button>
          </div>

          {/* Mobile menu sheet trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-slate-900 text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                <a
                  href="/"
                  className="text-lg font-semibold hover:text-gray-300"
                >
                  Home
                </a>
                <a
                  href="/categories"
                  className="text-lg font-semibold hover:text-gray-300"
                >
                  Categories
                </a>
                <a
                  href="/about"
                  className="text-lg font-semibold hover:text-gray-300"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-lg font-semibold hover:text-gray-300"
                >
                  Contact
                </a>
                <div className="pt-4 flex flex-col space-y-4">
                  <Button className="text-white bg-black hover:bg-white hover:text-slate-900 font-bold text-lg w-full">
                    Login
                  </Button>
                  <Button className="border-indigo-500 rounded-full border-2 px-4 py-2 font-bold text-lg w-full">
                    Get started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
