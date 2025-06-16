import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About Me', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Activities', to: 'activities' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3 px-6 bg-[rgba(0,0,0,0.6)] backdrop-blur-md rounded-full mt-4 shadow-lg">
          {/* Logo */}
          <div className="text-white font-bold text-lg md:text-xl whitespace-nowrap">
            Vallapi Shambhavi
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-[#80dfff] transition duration-300 cursor-pointer font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="ml-4 bg-[#004d80] text-white px-5 py-2 rounded-full hover:bg-[#0077b6] transition duration-300"
            >
              Let’s Connect
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-2 bg-[rgba(0,0,0,0.6)] backdrop-blur-md rounded-2xl px-6 py-4 space-y-3 shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-[#80dfff] text-base font-medium transition duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#004d80] text-white text-center px-5 py-2 rounded-full hover:bg-[#0077b6] transition duration-300"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
