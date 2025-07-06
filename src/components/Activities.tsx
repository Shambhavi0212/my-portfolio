import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Leaf, Trophy, Users } from 'lucide-react';

const Activities: React.FC = () => {
  const activities = [
    {
      type: "Hackathon",
      title: "Vel Tech University, Chennai",
      description: "Forest detection system: sensors, smoke, fire, deforestation, image alerts",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />
    },
    {
      type: "Hackathon",
      title: "MLRIT Zignasa",
      description: "Built web solutions using the MERN stack in a 36-hour hackathon at MLRIT",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />
    },
    {
      type: "Hackathon",
      title: "BITS Pilani, Hyderabad",
      description: "React Web Technologies Hackathon (24 hours)",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />
    },
    {
      type: "Exhibition",
      title: "Project Expo: Vishesh 2K24",
      description: "Presented Skin Cancer Detection project using AI for early detection at MREC College",
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      type: "Volunteering",
      title: "Blood Donation Camp",
      description: "Donated and volunteered in a Blood Donation Camp organized at college",
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      type: "Volunteering",
      title: "Haritha Haram",
      description: "Participated in a large-scale tree plantation program promoting environmental sustainability",
      icon: <Leaf className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <section id="activities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
<h2 
  className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-teal-400 to-sky-400 bg-clip-text text-transparent"
>
  Co-curricular & Extra-curricular Activities
</h2>
          <div className="w-20 h-1 bg-[#80dfff] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            A collection of my technical and social activities that showcase my diverse interests and commitment to both professional growth and social responsibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              className="relative bg-[#002a47]/50 backdrop-blur-sm rounded-2xl border border-[#004d80]/30 overflow-hidden transition-all duration-300 hover:border-[#80dfff]/50 hover:shadow-lg hover:shadow-[#80dfff]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#001f33] p-2 rounded-lg mr-4">
                    {activity.icon}
                  </div>
                  <div>
                    <span className="text-sm text-[#80dfff] block mb-1">{activity.type}</span>
                    <h3 className="text-xl font-semibold">{activity.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300">{activity.description}</p>
              </div>
              <div className="absolute top-4 right-4">
                <Calendar className="w-5 h-5 text-gray-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 bg-[#002a47]/50 backdrop-blur-sm rounded-2xl border border-[#004d80]/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Users className="mr-2 text-[#80dfff]" /> National Service Scheme (NSS)
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Active volunteer in the National Service Scheme (NSS), participating in community service initiatives and social welfare programs.
            Through NSS, I've developed leadership skills, social awareness, and a commitment to making a positive impact on society.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;