import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#80dfff] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300">
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#001f33] p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-[#80dfff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:vallapishambhavi@gmail.com" className="text-white hover:text-[#80dfff] transition-colors">
                    vallapishambhavi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#001f33] p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-[#80dfff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a href="tel:+919182065628" className="text-white hover:text-[#80dfff] transition-colors">
                    +91 91820 65628
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#001f33] p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-[#80dfff]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-white">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Shambhavi0212" 
                  className="w-12 h-12 bg-[#001f33] rounded-full flex items-center justify-center hover:bg-[#80dfff]/20 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vallapishambhavi/" 
                  className="w-12 h-12 bg-[#001f33] rounded-full flex items-center justify-center hover:bg-[#80dfff]/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#001f33]/80 border border-[#004d80]/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#80dfff]/50 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#001f33]/80 border border-[#004d80]/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#80dfff]/50 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-[#001f33]/80 border border-[#004d80]/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#80dfff]/50 focus:border-transparent"
                  placeholder="Job Opportunity"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-[#001f33]/80 border border-[#004d80]/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#80dfff]/50 focus:border-transparent resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-[#004d80] to-[#0077b6] hover:from-[#0077b6] hover:to-[#004d80] text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-[1.02]">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;