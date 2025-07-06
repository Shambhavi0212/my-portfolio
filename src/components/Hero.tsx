import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-24 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative z-10">

        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-[350px] h-[350px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_30px_6px_rgba(10,105,238,0.4)]">
              <img 
                src="/profile.jpg" 
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
            <Typewriter
              words={['Vallapi Shambhavi']}
              cursor={showCursor}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              loop={1}
              onTypeDone={() => setShowCursor(false)}  // Hides cursor after done
            />
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-sky-400 mb-6">
            Aspiring Software Engineer
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
            A passionate computer science student with a strong foundation in Java, frontend technologies, 
            and problem-solving skills. Experienced in collaborative projects and hackathons, 
            showcasing leadership and creativity.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a
              href="/Vallapi_Shambhavi_Resume.pdf"
              download
              className="bg-transparent hover:bg-cyan-500/10 border border-cyan-400 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md shadow-cyan-500/30"
            >
              Download Resume
            </a>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-transparent hover:bg-cyan-500/10 border border-cyan-400 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md shadow-cyan-500/30"
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
            <a href="mailto:shambhavivallapi@gmail.com" className="text-white hover:text-[#80dfff] transition-colors">
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
