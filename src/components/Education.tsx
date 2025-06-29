import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "St. Peter's Engineering College, Hyderabad - JNTUH",
      period: "2022 – 2026",
      score: "CGPA: 9.64 till 2nd Year",
      icon: <BookOpen className="w-6 h-6 text-[#80dfff]" />
    },
    {
      degree: "Intermediate (MPC) - TSBIE",
      institution: "Bhagyarathi Junior College, Telangana",
      period: "2022",
      score: "CGPA: 9.75",
      icon: <BookOpen className="w-6 h-6 text-[#80dfff]" />
    },
    {
      degree: "SSC",
      institution: "Z.P.H.S Suraram Colony, Hyderabad",
      period: "2020",
      score: "CGPA: 10.00",
      icon: <BookOpen className="w-6 h-6 text-[#80dfff]" />
    }
  ];

  const achievements = [
    "Java Certification – Earned from HackerRank for proficiency in core Java concepts",
    "Topper Medallist – 1st and 2nd years for academic excellence",
    "Poster Presentation Winner – 3rd place at college tech fest for India's Space Triumph: A New Era of Technology and Innovation"
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-[#80dfff] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            My academic journey and key achievements that have shaped my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Education Timeline</h3>
            <div className="space-y-8 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#80dfff] via-[#004d80] to-transparent h-full"></div>
              
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-[#001f33] rounded-full border-4 border-[#002a47] z-10">
                    {item.icon}
                  </div>
                  <div className="ml-6">
                    <div className="p-4 bg-[#002a47]/50 backdrop-blur-sm rounded-xl border border-[#004d80]/30">
                      <div className="text-sm text-[#80dfff] mb-1">{item.period}</div>
                      <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                      <p className="text-gray-300 mb-1">{item.institution}</p>
                      <div className="text-white font-medium">{item.score}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 text-[#80dfff]" /> Achievements
            </h3>
            <motion.div 
              className="bg-[#002a47]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#004d80]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#80dfff] mt-2 mr-3"></span>
                    <span className="text-gray-300">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;