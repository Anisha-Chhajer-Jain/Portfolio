
import React from 'react';
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="py-12 px-4 sm:px-6 relative bg-[var(--bg-primary)]" id="about">
      <Helmet>
        <title>Anisha Chhajer</title>
        <meta name="description" content="Software Engineer with experience in web
         development and programming." />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 sm:mb-16 tracking-wide text-[var(--text-primary)]">
          About <span className="font-bold text-[var(--accent-primary)]">Me</span>
        </h2>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <div className="relative bg-[var(--bg-secondary)] backdrop-blur-sm rounded-3xl p-6 sm:p-12 border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-500 shadow-xl">
            <p className="text-[var(--text-primary)] font-normal leading-normal text-base sm:text-lg mb-6">
              I'm <span className="text-[var(--accent-primary)] font-semibold">Anisha Chhajer</span>, a developer skilled in HTML, CSS, Git & Github, C/C++,
              JavaScript, Figma, React, Node.js, and Java. I focus on building experiences that feel intuitive and polished,
              crafting responsive interfaces across devices & paying close attention to layout, interaction, & performance.
            </p>
            <p className="text-[var(--text-primary)] font-normal leading-normal text-base sm:text-lg">
              I place a strong emphasis on clean, well-structured, and maintainable code, ensuring clarity, consistency, and long-term scalability
              across applications. I focus on translating ideas into high-performance, thoughtful system design and efficient implementation.
            </p>
            <br />
            <p className="text-[var(--text-primary)] font-normal leading-normal text-base sm:text-lg">

              On the backend, I enjoy designing and implementing robust business logic, optimizing data flow, and building scalable
              architectures that are easy to maintain and extend. I prioritize best practices, performance optimization,
              and code readability, with simple, elegant design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}