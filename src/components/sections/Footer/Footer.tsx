import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../Logo/Logo';

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterSectionProps {
  footerData: FooterSection[];
  logoRoute?: string;
}


const Footer = ({ footerData , logoRoute }: FooterSectionProps) => {
  return (
    <footer className="bg-[#2E2B4A] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="mb-12">
         <Logo route={logoRoute} />
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to=""
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="text-gray-300 mb-4 md:mb-0">© Afrocoach</div>

          {/* Social Media Links */}
          <div className="flex gap-6">
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
