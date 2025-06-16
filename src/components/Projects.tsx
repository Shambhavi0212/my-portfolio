import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Forest Endangered Detection System",
      description: "Developed a forest detection system using tilt, gas, and fire sensors with Arduino to detect smoke, fire, and deforestation. Captures images and triggers alerts in real-time when motion, smoke, or fire is detected.",
      tools: ["Arduino", "Tilt sensor", "Gas sensor", "Fire sensor"],
      image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg"
    },
    {
      id: 2,
      title: "Skin Cancer Detection Project",
      description: "Developed an AI system for early skin cancer detection using image analysis, improving accuracy and user interface for better usability.",
      tools: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV", "Flask", "HTML", "CSS"],
      image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg"
    },
    {
      id: 3,
      title: "Pizza Calculator Billing System",
      description: "Java-based console application using core Java features for pizza billing with detailed bill summary, taxes, and discounts.",
      tools: ["Java", "JDK", "Eclipse"],
      image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-[#80dfff] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            A showcase of my technical skills and problem-solving abilities through various projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;