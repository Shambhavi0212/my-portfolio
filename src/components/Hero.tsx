import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-24 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative z-10">

        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-[350px] h-[350px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[rgba(128,223,255,0.8)] shadow-[0_0_20px_8px_rgba(2,187,254,0.7)]">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 md:pl-24 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[#80dfff] font-medium mb-2">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Vallapi Shambhavi
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
            Aspiring Software Engineer
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
            A passionate computer science student with a strong foundation in Java, frontend technologies, 
            and problem-solving skills. Experienced in collaborative projects and hackathons, 
            showcasing leadership and creativity.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a
              href="/resume.pdf"
              download
              className="bg-transparent hover:bg-white/10 border border-white/30 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 cursor-pointer inline-flex items-center justify-center"
            >
              Download Resume
            </a>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-transparent hover:bg-white/10 border border-white/30 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 cursor-pointer inline-flex items-center justify-center"
            >
              View Projects
            </Link>
          </div>

          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://www.github.com/shambhavi0212/" className="text-white hover:text-[#80dfff] transition-colors">
              <GitHub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shambhavi0212/" className="text-white hover:text-[#80dfff] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vallapishambhavi@gmail.com" className="text-white hover:text-[#80dfff] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span className="text-sm text-gray-400 mb-2 group-hover:text-white transition-colors">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-[#80dfff]" size={20} />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
