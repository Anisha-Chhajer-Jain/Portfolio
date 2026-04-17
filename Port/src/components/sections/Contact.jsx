import React, { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
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

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_nylk21d', 
      'template_1duj31p', 
      form.current, 
      'rNvxevj4PhfeJse_P'
    )
    .then((result) => {
        setFormStatus('success');
        setIsSubmitting(false);
        e.target.reset();
        setTimeout(() => setFormStatus(null), 5000);
    }, (error) => {
        setFormStatus('error');
        setIsSubmitting(false);
        console.error(error.text);
        setTimeout(() => setFormStatus(null), 5000);
    });
  };

  return (
    <section
      id="contact"
      className="
        relative py-20 px-4 sm:px-8 lg:px-16
        bg-[var(--bg-primary)]
        overflow-hidden
        transition-colors duration-300
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
          text-[var(--text-primary)]
        "
      >
        Get In Touch
      </motion.h2>

      <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-16">
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
          <div className="relative bg-[var(--bg-secondary)] backdrop-blur-md rounded-2xl border border-[var(--border-primary)] p-6 sm:p-8 transition-all duration-500 group-hover:border-[var(--accent-primary)] shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Send a Message
            </h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 bg-[var(--bg-accent)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all duration-300 hover:border-[var(--text-secondary)]/30 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@gmail.com"
                  className="w-full px-4 py-3 bg-[var(--bg-accent)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all duration-300 hover:border-[var(--text-secondary)]/30 text-sm sm:text-base"
                />
              </div>
              
              <input
                type="text"
                name="subject"
                required
                placeholder="What about this?"
                className="w-full px-4 py-3 bg-[var(--bg-accent)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all duration-300 hover:border-[var(--text-secondary)]/30 text-sm sm:text-base"
              />
              
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell me about your message"
                className="w-full px-4 py-3 bg-[var(--bg-accent)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all duration-300 hover:border-[var(--text-secondary)]/30 resize-none text-sm sm:text-base"
              ></textarea>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn w-full px-6 py-3 bg-[var(--bg-accent)] hover:bg-[var(--accent-primary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[var(--accent-primary)]/20 flex items-center justify-center gap-2 text-[var(--text-primary)] hover:text-white disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Mail size={20} className={`group-hover/btn:rotate-12 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : ''}`} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {formStatus === 'success' && (
                <p className="text-sm font-medium text-emerald-500 text-center mt-3 animate-fade-in">
                  Message sent successfully!
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-sm font-medium text-red-500 text-center mt-3 animate-fade-in">
                  Failed to send message. Please try again.
                </p>
              )}
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
          <div className="relative bg-[var(--bg-secondary)] backdrop-blur-md rounded-2xl border border-[var(--border-primary)] p-6 sm:p-8 h-full flex flex-col transition-all duration-500 group-hover:border-cyan-500/50 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            
            <div className="flex items-center gap-3 mb-4 text-[var(--text-secondary)] hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-accent)] flex items-center justify-center flex-shrink-0 border border-[var(--border-primary)]">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <span className="font-light text-sm sm:text-base">Ahmedabad, Gujarat</span>
            </div>
            
            <div className="flex items-center gap-3 mb-6 text-[var(--text-secondary)] hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-accent)] flex items-center justify-center flex-shrink-0 border border-[var(--border-primary)]">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <span className="font-light text-sm sm:text-base break-all">anishachhajer16@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 mb-6 text-[var(--text-secondary)] hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-accent)] flex items-center justify-center flex-shrink-0 border border-[var(--border-primary)]">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <span className="font-light text-sm sm:text-base break-all">+91 94747 19009</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <a 
                href="https://github.com/Anisha-Chhajer-Jain"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-[var(--bg-accent)] hover:bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent-primary)]/20"
              >
                <Github size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300 text-[var(--text-primary)]" />
                <span className="font-medium text-sm sm:text-base text-[var(--text-primary)]">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-[var(--bg-accent)] hover:bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-blue-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300 text-[var(--text-primary)]" />
                <span className="font-medium text-sm sm:text-base text-[var(--text-primary)]">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-[var(--bg-accent)] hover:bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-sky-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300 text-[var(--text-primary)]" />
                <span className="font-medium text-sm sm:text-base text-[var(--text-primary)]">Twitter</span>
              </a>
              <a 
                href="mailto:anishachhajer16@gmail.com"
                className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-[var(--bg-accent)] hover:bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-cyan-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Mail size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300 text-[var(--text-primary)]" />
                <span className="font-medium text-sm sm:text-base text-[var(--text-primary)]">Email</span>
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