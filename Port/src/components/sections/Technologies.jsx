
// import { motion } from "framer-motion";
// import { Code, Database, Layout, Wrench, Figma } from "lucide-react";

// /* -------------------- DATA (STATIC) -------------------- */
// const skills = [
//   {
//     category: "Languages",
//     details: "JavaScript, C, C++",
//     icon: <Code className="w-7 h-7" />,
//     gradient: "from-yellow-500 to-orange-500",
//     icons: [
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/javascript.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/c.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/c++.png",
//     ],
//   },
//   {
//     category: "Frontend Development",
//     details: "React, HTML5, CSS3",
//     icon: <Layout className="w-7 h-7" />,
//     gradient: "from-blue-500 to-cyan-500",
//     icons: [
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/react.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/html.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/css.png",
//     ],
//   },
//   {
//     category: "Backend Development",
//     details: "Node.js, Express, MongoDB",
//     icon: <Database className="w-7 h-7" />,
//     gradient: "from-green-500 to-emerald-500",
//     icons: [
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/node_js.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/express.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/mongodb.png",
//     ],
//   },
//   {
//     category: "Tools",
//     details: "Git, GitHub, Postman, VS Code",
//     icon: <Wrench className="w-7 h-7" />,
//     gradient: "from-gray-400 to-slate-500",
//     icons: [
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/git.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/github.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/postman.png",
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/visual_studio_code.png",
//     ],
//   },
//   {
//     category: "Design",
//     details: "Figma, UI/UX",
//     icon: <Figma className="w-7 h-7" />,
//     gradient: "from-pink-500 to-rose-500",
//     icons: [
//       "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/figma.png",
//     ],
//   },
// ];

// /* -------------------- ANIMATIONS -------------------- */
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// /* -------------------- COMPONENT -------------------- */
// const Skills = () => {
//   return (
//     <section
//       id="skills-section"
//       className="
//         relative py-20 px-4 sm:px-8 lg:px-16
//         bg-gradient-to-b from-gray-900 to-black
//       "
//       aria-labelledby="skills-heading"
//     >
//       {/* Heading */}
//       <motion.h2
//         id="skills-heading"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="
//           text-center text-4xl sm:text-5xl font-bold mb-4
//           bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
//           bg-clip-text text-transparent
//         "
//       >
//         Skills & Expertise
//       </motion.h2>

//       <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
//         Technologies and tools I actively work with and enjoy building things in.
//       </p>

//       {/* Cards */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-80px" }}
//         className="
//           max-w-7xl mx-auto
//           grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
//           gap-8
//         "
//       >
//         {skills.map((skill) => (
//           <motion.div
//             key={skill.category}
//             variants={cardVariants}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             whileHover={{ y: -6 }}
//             className="
//               relative p-6 rounded-2xl
//               bg-gray-900/60 backdrop-blur-md
//               border border-gray-800
//               overflow-hidden
//             "
//           >
//             {/* Hover glow */}
//             <div
//               className={`
//                 absolute inset-0 opacity-0 group-hover:opacity-20
//                 bg-gradient-to-br ${skill.gradient}
//                 transition-opacity duration-500
//               `}
//             />

//             {/* Header */}
//             <div className="relative z-10 flex items-center gap-4 mb-6">
//               <div
//                 className={`
//                   p-4 rounded-xl
//                   bg-gradient-to-br ${skill.gradient}
//                   text-white shadow-lg
//                 `}
//               >
//                 {skill.icon}
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold text-white">
//                   {skill.category}
//                 </h3>
//                 <p className="text-gray-400 text-sm">{skill.details}</p>
//               </div>
//             </div>

//             {/* Tech Icons */}
//             <div className="grid grid-cols-4 gap-4">
//               {skill.icons.map((src, i) => (
//                 <motion.img
//                   key={i}
//                   src={src}
//                   loading="lazy"
//                   alt={`${skill.category} icon`}
//                   className="
//                     w-15 h-15 p-2
//                     bg-white/10 rounded-xl
//                     backdrop-blur-sm
//                   "
//                   whileHover={{ scale: 1.15, rotate: 4 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Layout, Wrench, Figma, X } from "lucide-react";
import { useState } from "react";

/* -------------------- DATA (STATIC) -------------------- */
const skills = [
  {
    category: "Languages",
    details: "JavaScript, C, C++",
    description: "Proficient in building dynamic web applications with JavaScript, system programming with C, and object-oriented development with C++. Strong understanding of memory management, data structures, and algorithms.",
    icon: <Code className="w-7 h-7" />,
    gradient: "from-yellow-500 to-orange-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/javascript.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/c.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/c++.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/java.png",
      
    ],
  },
  {
    category: "Frontend Development",
    details: "React, HTML5, CSS3",
    description: "Expert in creating responsive and interactive user interfaces using React components, hooks, and state management. Skilled in building accessible web applications with modern HTML5 semantics and CSS3 animations including Flexbox and Grid layouts.",
    icon: <Layout className="w-7 h-7" />,
    gradient: "from-blue-500 to-cyan-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/react.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/html.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/css.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/redux.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/tailwind_css.png",
    ],
  },
  {
    category: "Backend Development",
    details: "Node.js, Express, MongoDB",
    description: "Experience building RESTful APIs and server-side applications with Node.js and Express. Proficient in database design, CRUD operations, and data modeling with MongoDB. Understanding of authentication, authorization, and error handling.",
    icon: <Database className="w-7 h-7" />,
    gradient: "from-green-500 to-emerald-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/node_js.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/express.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/mongodb.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/rest.png",
    ],
  },
  {
    category: "Tools",
    details: "Git, GitHub, Postman, VS Code",
    description: "Version control expertise with Git and GitHub including branching strategies, pull requests, and collaboration workflows. API testing and documentation with Postman. Efficient development environment setup with VS Code extensions and debugging tools.",
    icon: <Wrench className="w-7 h-7" />,
    gradient: "from-gray-400 to-slate-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/git.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/github.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/postman.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/visual_studio_code.png",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    ],
  },
  {
    category: "Design",
    details: "Figma, UI/UX, Canva",
    description: "Ability to create wireframes, prototypes, and high-fidelity designs using Figma. Understanding of user-centered design principles, color theory, typography, and responsive design patterns. Collaboration with developers for design implementation.",
    icon: <Figma className="w-7 h-7" />,
    gradient: "from-pink-500 to-rose-500",
    icons: [
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/figma.png",
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/canva.png",
    ],
  },
];

/* -------------------- ANIMATIONS -------------------- */
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

const popupVariants = {
  initial: { opacity: 0, scale: 0.8, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 10 },
};

/* -------------------- COMPONENT -------------------- */
const Skills = () => {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <section
      id="skills-section"
      className="
        relative py-20 px-4 sm:px-8 lg:px-16
        bg-gradient-to-b from-gray-900 to-black
      "
      aria-labelledby="skills-heading"
    >
      {/* Heading */}
      <motion.h2
        id="skills-heading"
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
        Skills & Expertise
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Technologies and tools I actively work with and enjoy building things in.
      </p>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
          gap-8
        "
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            onHoverStart={() => setActivePopup(index)}
            onHoverEnd={() => setActivePopup(null)}
            className="
              relative p-6 rounded-2xl
              bg-gray-900/60 backdrop-blur-md
              border border-gray-800
              overflow-visible
              cursor-pointer
            "
          >
            {/* Hover glow */}
            <div
              className={`
                absolute inset-0 opacity-0 group-hover:opacity-20
                bg-gradient-to-br ${skill.gradient}
                transition-opacity duration-500
              `}
            />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div
                className={`
                  p-4 rounded-xl
                  bg-gradient-to-br ${skill.gradient}
                  text-white shadow-lg
                `}
              >
                {skill.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.category}
                </h3>
                <p className="text-gray-400 text-sm">{skill.details}</p>
              </div>
            </div>

            {/* Tech Icons */}
            <div className="grid grid-cols-4 gap-4">
              {skill.icons.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  loading="lazy"
                  alt={`${skill.category} icon`}
                  className="
                    w-15 h-15 p-2
                    bg-white/10 rounded-xl
                    backdrop-blur-sm
                  "
                  whileHover={{ scale: 1.15, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </div>

            {/* Popup Description */}
            <AnimatePresence>
              {activePopup === index && (
                <motion.div
                  variants={popupVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="
                    absolute z-50
                    bottom-full left-1/2 -translate-x-1/2
                    mb-4 w-80
                    pointer-events-none
                  "
                >
                  <div className="relative">
                    {/* Popup arrow */}
                    <div
                      className="
                        absolute -bottom-2 left-1/2 -translate-x-1/2
                        w-4 h-4 rotate-45
                        bg-gradient-to-br from-gray-800 to-gray-900
                      "
                    />
                    
                    {/* Popup content */}
                    <div
                      className="
                        relative z-10
                        bg-gradient-to-br from-gray-800 to-gray-900
                        rounded-xl p-4
                        border border-gray-700
                        shadow-2xl
                      "
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-semibold text-sm">
                          {skill.category}
                        </h4>
                        <button
                          onClick={() => setActivePopup(null)}
                          className="
                            text-gray-400 hover:text-white
                            transition-colors duration-200
                            pointer-events-auto
                          "
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {skill.description}
                      </p>
                      
                      {/* Progress bar animation */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className={`
                          mt-3 h-0.5 rounded-full
                          bg-gradient-to-r ${skill.gradient}
                          origin-left
                        `}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Instruction hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="
          text-center text-gray-500 text-sm mt-12
          flex items-center justify-center gap-2
        "
      >
        <span className="inline-block animate-pulse">✨</span>
        Hover over any skill card to see detailed description
        <span className="inline-block animate-pulse">✨</span>
      </motion.p>
    </section>
  );
};

export default Skills;