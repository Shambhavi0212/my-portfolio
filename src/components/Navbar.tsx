import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About Me', to: 'about' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Activities', to: 'activities' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      <div className="container mx-auto px-4">
        <nav
          className="flex items-center justify-between py-3 px-6 
            bg-[rgba(0,0,0,0.6)] backdrop-blur-md rounded-full mt-4 
            shadow-xl border border-white/10 ring-2 ring-cyan-400 shadow-cyan-500/40 transition duration-300"
        >
          {/* Logo */}
          <div className="text-white font-serif text-xl md:text-2xl italic tracking-wide">
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
                className="text-white hover:text-cyan-300 transition duration-300 cursor-pointer font-semibold"
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
              className="ml-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              Let’s Connect
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-cyan-300 transition"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'scale-100 opacity-100 max-h-[600px]' : 'scale-95 opacity-0 max-h-0'
          } overflow-hidden origin-top`}
        >
          <div className="mt-3 bg-[rgba(0,0,0,0.75)] backdrop-blur-lg rounded-3xl px-6 py-5 space-y-4 shadow-lg border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-cyan-300 text-base font-medium transition duration-300 cursor-pointer"
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
              className="block text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-md hover:shadow-cyan-400/40"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar