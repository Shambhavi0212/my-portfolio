import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "50 Days of DSA Coding Challenge Level-1",
      description: "Completed a self-driven 50 Days of Coding Challenge focused on mastering Data Structures and Algorithms. Solved problems daily on CodeChef and LeetCode, covering topics such as arrays, strings.",
      tools: ["Java", "CodeChef", "LeetCode"],
      image : "/laptop.png",
      giturl: "https://github.com/Shambhavi0212/50-Days-of-Coding-DSA-Level-1"
    },

    {
    id: 5,
    title: "50 Days of DSA Coding Challenge Level-2",
    description: "Completed the advanced Level-2 phase of the 50 Days DSA Challenge, focusing on manipulating array data structures, algorithms, and optimization problems on CodeChef and LeetCode.",
    tools: ["Java", "CodeChef", "LeetCode"],
    image: "/laptop.png",
    giturl: "https://github.com/Shambhavi0212/50-Days-of-Coding-DSA-Level-2"
   },

    {
      id: 2,
      title: "Forest Endangered Detection System",
      description: "Developed a forest detection system using tilt, gas, and fire sensors with Arduino to detect smoke, fire, and deforestation. Captures images and triggers alerts in real-time when motion, smoke, or fire is detected.",
      tools: ["Arduino", "Tilt sensor", "Gas sensor", "Fire sensor"],
      image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
      giturl: "https://github.com/shambhavi0212"

    },
    {
      id: 3,
      title: "Skin Cancer Detection Project",
      description: "Developed an AI system for early skin cancer detection using image analysis, improving accuracy and user interface for better usability.",
      tools: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV", "Flask", "HTML", "CSS"],
      image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg",
      giturl: "https://github.com/shambhavi0212"
    },
    {
      id: 4,
      title: "Pizza Calculator Billing System",
      description: "Java based console application using core Java features for pizza billing with detailed bill summary, taxes, and discounts.",
      tools: ["Java", "JDK", "Eclipse"],
      image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
      giturl: "https://github.com/shambhavi0212"
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
