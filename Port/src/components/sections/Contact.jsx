import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from "framer-motion";

export default function Contact() {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="
        relative py-20 px-4 sm:px-8 lg:px-16
        bg-gradient-to-b from-gray-900 to-black
        overflow-hidden
      "
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          text-center text-4xl sm:text-5xl font-bold mb-4
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
          bg-clip-text text-transparent
        "
      >
        Get In Touch
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Have a project in mind or just want to chat? I'd love to hear from you!
      </p>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="
          max-w-6xl mx-auto
          grid lg:grid-cols-2
          gap-8
        "
      >
        {/* Contact Form */}
        <motion.div
          variants={cardVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
          <div className="relative bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 p-6 sm:p-8 transition-all duration-500 group-hover:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Send a Message
            </h3>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-gray-600 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="your.email@gmail.com"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-gray-600 text-sm sm:text-base"
                />
              </div>
              
              <input
                type="text"
                placeholder="What about this?"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-gray-600 text-sm sm:text-base"
              />
              
              <textarea
                rows="6"
                placeholder="Tell me about your message"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-gray-600 resize-none text-sm sm:text-base"
              ></textarea>
              
              <button
                type="submit"
                className="group/btn w-full px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-purple-500 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2 text-white"
              >
                <Mail size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          variants={cardVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
          <div className="relative bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 p-6 sm:p-8 h-full flex flex-col transition-all duration-500 group-hover:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            
            <div className="flex items-center gap-3 mb-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0 border border-gray-700">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <span className="font-light text-sm sm:text-base">Ahmedabad, Gujarat</span>
            </div>
            
            <div className="flex items-center gap-3 mb-6 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0 border border-gray-700">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <span className="font-light text-sm sm:text-base break-all">anishachhajer16@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 mb-6 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0 border border-gray-700">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <span className="font-light text-sm sm:text-base break-all">+91 94747 19009</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <a 
                href="https://github.com/Anisha-Chhajer-Jain"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-purple-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Github size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                <span className="font-medium text-sm sm:text-base text-white">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                <span className="font-medium text-sm sm:text-base text-white">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-sky-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                <span className="font-medium text-sm sm:text-base text-white">Twitter</span>
              </a>
              <a 
                href="mailto:anishachhajer16@gmail.com"
                className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Mail size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                <span className="font-medium text-sm sm:text-base text-white">Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Corner accents - matching Skills component */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600/30 hidden lg:block" />
    </section>
  );
}