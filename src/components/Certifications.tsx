import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Database, 
  Bot, 
  FileCheck, 
  List, 
  Layout, 
  Code, 
  Type 
} from 'lucide-react';

const Certifications: React.FC = () => {
  // Map icon names to actual components
  const iconMap: { [key: string]: React.ElementType } = {
    Cloud,
    Database,
    Bot,
    FileCheck,
    List,
    Layout,
    Code,
    Type,
  };

  const certifications = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      description: "Successfully completed professional certification in ServiceNow administration, covering configuration, UI customization, and workflow automation.",
      icon: "FileCheck",
      color: "from-emerald-500 to-green-600",
      url: "/servicenow-csa-certificate.pdf"
    },
    {
      title: "Google Cloud – Generative AI Virtual Internship",
      description: "Completed 10-week internship program focused on generative AI technologies and cloud implementations.",
      icon: "Cloud",
      color: "from-blue-500 to-indigo-600",
      url: "/google-cloud-generative-ai-internship.pdf"
    },
    {
      title: "Data Structures and Algorithms",
      description: "Certification on advanced DSA concepts from Infosys Springboard.",
      icon: "Database",
      color: "from-purple-500 to-violet-600",
      url: "/infosys-dsa-certificate.pdf"
    },
    {
      title: "Describe Cloud Service Types",
      description: "Microsoft certification focused on cloud computing fundamentals and service models.",
      icon: "Cloud",
      color: "from-sky-500 to-blue-600",
      url: "/microsoft-cloud-service-certificate.pdf"
    },
    {
      title: "ChatGPT for Everyone",
      description: "Certification from GUVI on utilizing AI language models effectively.",
      icon: "Bot",
      color: "from-rose-500 to-pink-600",
      url: "https://www.guvi.in/verify-certificate?id=d167LK83893h0JgG25&course=chatgptenglish"
    },
    {
      title: "Google Cloud Computing Foundations",
      description: "Google Cloud Skill Boost certification on cloud computing fundamentals.",
      icon: "Cloud",
      color: "from-blue-400 to-blue-700",
      url: "https://www.credly.com/badges/112a7ac7-3c7a-4706-a9e9-df61a94ba597"
    },
    {
      title: "Practice Arrays",
      description: "CodeChef certification on array concepts and problem-solving.",
      icon: "List",
      color: "from-yellow-500 to-amber-600",
      url: "https://www.codechef.com/certificates/public/d37c328"
    },
    {
      title: "Learn Java",
      description: "CodeChef certification covering Java fundamentals.",
      icon: "Code",
      color: "from-orange-500 to-red-600",
      url: "https://www.codechef.com/certificates/public/8df332b"
    },
    {
      title: "Practice Strings",
      description: "CodeChef certification on string manipulation and problem-solving.",
      icon: "Type",
      color: "from-pink-500 to-fuchsia-600",
      url: "https://example.com/codechef-strings-certificate"
    },
    {
      title: "Learn HTML/CSS",
      description: "CodeChef certification covering the basics of HTML and CSS for web development.",
      icon: "Layout",
      color: "from-lime-500 to-green-700",
      url: "https://example.com/codechef-html-css-certificate"
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
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon];
            return (
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
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">{cert.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-sm font-medium bg-[#80dfff]/20 border border-[#80dfff]/50 rounded-full text-white hover:bg-[#80dfff]/30 transition-all duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
