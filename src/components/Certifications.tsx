import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Database, Bot, FileCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      description: "Successfully completed professional certification in ServiceNow administration, covering configuration, UI customization, and workflow automation.",
      icon: <FileCheck className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Google Cloud – Generative AI Virtual Internship",
      description: "Completed 10-week internship program focused on generative AI technologies and cloud implementations.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Data Structures and Algorithms",
      description: "Certification on advanced DSA concepts from Infosys Springboard.",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Describe Cloud Service Types",
      description: "Microsoft certification focused on cloud computing fundamentals and service models.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-sky-500 to-blue-600"
    },
    {
      title: "ChatGPT for Everyone",
      description: "Certification from GUVI on utilizing AI language models effectively.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Certifications</h2>
          <div className="w-20 h-1 bg-[#80dfff] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Professional certifications that enhance my technical expertise and validate my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#002a47]/50 backdrop-blur-sm rounded-2xl border border-[#004d80]/30 overflow-hidden h-full transition-all duration-300 hover:border-[#80dfff]/50 hover:shadow-lg hover:shadow-[#80dfff]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`bg-gradient-to-r ${cert.color} p-4 flex justify-between items-center`}>
                <h3 className="font-bold text-lg text-white">Certification</h3>
                <div className="bg-white/20 p-2 rounded-lg">
                  {cert.icon}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-white">{cert.title}</h4>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#" className="inline-flex items-center px-6 py-3 bg-[#80dfff]/20 border border-[#80dfff]/50 rounded-full text-white hover:bg-[#80dfff]/30 transition-all duration-300">
            <Award className="mr-2 h-5 w-5" /> View All Certifications
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;