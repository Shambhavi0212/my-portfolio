import React from 'react';
import { Github as GitHub, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#001a29] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Vallapi Shambhavi</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Aspiring software engineer with a passion for creating innovative solutions and continuous learning.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Shambhavi0212" className="text-gray-400 hover:text-[#80dfff] transition-colors">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shambhavi0212/" className="text-gray-400 hover:text-[#80dfff] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shambhavivallapi@gmail.com" className="text-gray-400 hover:text-[#80dfff] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2">
  <li>
    <a href="#hero" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      Home
    </a>
  </li>
  <li>
    <a href="#about" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      About
    </a>
  </li>
  <li>
    <a href="#skills" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      Skills
    </a>
  </li>
  <li>
    <a href="#gallery" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      Gallery
    </a>
  </li>
  <li>
    <a href="#projects" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      Projects
    </a>
  </li>
  <li>
    <a href="#education" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      Education
    </a>
  </li>
  <li>
    <a href="#certifications" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      Certifications
    </a>
  </li>
  <li>
    <a href="#activities" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      Activities
    </a>
  </li>
  <li>
    <a href="#contact" className="text-gray-400 hover:text-[#80dfff] transition-colors">
      Contact
    </a>
  </li>
</ul>

          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Hyderabad, Telangana</li>
              <li>+91 9182065628</li>
              <li>shambhavivallapi@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Vallapi Shambhavi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;