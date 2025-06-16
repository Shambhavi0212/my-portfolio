import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Java", "Python"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Technologies",
      skills: ["DBMS"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Others",
      skills: ["Data Structures", "Algorithms", "OOPs Concepts"],
      color: "from-amber-500 to-orange-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-[#80dfff] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            A diverse set of technical skills acquired through education, projects, and continuous learning.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-[#002a47]/50 backdrop-blur-sm rounded-2xl border border-[#004d80]/30 overflow-hidden"
              variants={item}
            >
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-[#001f33] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">OOPs Concepts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Classes & Objects", "Encapsulation", "Abstraction", "Inheritance", "Polymorphism"].map((concept, index) => (
              <motion.div
                key={index}
                className="bg-[#001f33]/80 backdrop-blur-sm p-4 rounded-xl border border-[#004d80]/30 text-center hover:border-[#80dfff]/50 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-[#80dfff] font-medium">{concept}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {["Eclipse", "Visual Studio Code", "Arduino", "TensorFlow", "Flask", "Git"].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-[#001f33]/80 backdrop-blur-sm p-4 rounded-xl border border-[#004d80]/30 text-center hover:border-[#80dfff]/50 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;