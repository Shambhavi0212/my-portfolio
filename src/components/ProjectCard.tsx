import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div 
        className="bg-[#002a47]/50 backdrop-blur-sm rounded-2xl border border-[#004d80]/30 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-[#80dfff]/50 hover:shadow-lg hover:shadow-[#80dfff]/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f33] to-transparent opacity-70"></div>
          
          <div className="absolute top-4 right-4">
            <div className="relative overflow-hidden">
              <motion.div
                className="w-10 h-10 bg-[#001f33]/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer border border-[#004d80]/50 hover:border-[#80dfff]/70 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <ArrowUpRight size={18} className="text-[#80dfff]" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#80dfff] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            {project.description}
          </p>
          
          <div className="mt-auto">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Technologies Used</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.slice(0, 4).map((tool, i) => (
                <span key={i} className="px-2 py-1 bg-[#001f33] rounded-full text-xs">
                  {tool}
                </span>
              ))}
              {project.tools.length > 4 && (
                <span className="px-2 py-1 bg-[#001f33] rounded-full text-xs">
                  +{project.tools.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;