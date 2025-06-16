import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const strengthItems = [
    {
      icon: <Code className="w-8 h-8 text-[#80dfff]" />,
      title: 'Problem Solving',
      description: 'Strong programming knowledge in Java with a good grasp of OOP concepts and algorithms.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#80dfff]" />,
      title: 'Team Collaboration & Leadership',
      description: 'Led teams and contributed actively in hackathons and workshops, showing good teamwork and leadership skills.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#80dfff]" />,
      title: 'Quick Learner & Adaptable',
      description: 'Completed diverse technical certifications including cloud technologies and AI internships.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#80dfff]" />,
      title: 'Social Responsibility',
      description: 'Active participation in NSS and community service programs, showing leadership beyond academics.'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#80dfff] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Aspiring Software Engineer with a strong foundation in Java, frontend technologies (HTML, CSS, JavaScript), 
            and problem-solving skills. Knowledgeable in OOPs, DSA, and experienced in collaborative projects and hackathons, 
            showcasing leadership and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {strengthItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#002a47]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#004d80]/30 transition-all duration-300 hover:border-[#80dfff]/50 hover:bg-[#002a47]/80 hover:shadow-lg hover:shadow-[#80dfff]/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }
              }}
            >
              <div className="flex flex-col h-full">
                <div className="bg-[#001f33] p-3 rounded-full w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 bg-[#002a47]/50 backdrop-blur-sm rounded-2xl border border-[#004d80]/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
          <p className="text-gray-300">
            Aspiring Software Engineer with a strong foundation in Java, frontend technologies (HTML, CSS, JavaScript), 
            and problem-solving skills. Knowledgeable in OOPs, DSA, and experienced in collaborative projects and hackathons, 
            showcasing leadership and creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;