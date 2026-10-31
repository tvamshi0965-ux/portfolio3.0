import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Sparkles, CheckCircle, Play, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 'edutech',
      title: 'EDU TECH — Placement Preparation Quiz Platform',
      badge: 'Flagship Production App',
      category: 'Full-Stack & Cloud',
      period: 'Shipped to Production',
      description:
        'A comprehensive placement preparation web application featuring automated multi-language code execution, daily interactive quizzes, user authentication, and real-time leaderboards.',
      highlights: [
        'Built with React + Vite, delivering ultra-fast hot module replacement and sub-second load times.',
        'Integrated Piston API for real-time remote compilation and execution of multiple programming languages (Python, C++, Java, JS).',
        'Engineered live leaderboard system with automated score tallying and daily streak tracking.',
        'Successfully deployed to production on Vercel with continuous integration.',
      ],
      tags: ['React.js', 'Vite', 'Piston API', 'JavaScript (ES6+)', 'Vercel', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://vercel.app',
      demoCode: `// Sample Piston API code execution payload
async function executeSubmission(language, sourceCode) {
  const response = await fetch('https://emkc.org/api/v2/piston/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      language: language,
      version: '*',
      files: [{ content: sourceCode }]
    })
  });
  return await response.json();
}`,
    },
    {
      id: 'realtime-chat',
      title: 'Real-Time Full-Stack Collaboration & Chat Platform',
      badge: 'Real-Time Systems',
      category: 'WebSockets & Backend',
      period: 'Featured Project',
      description:
        'High-performance full-stack real-time messaging application with room management, persistent sessions, active typing notifications, and instant socket state sync.',
      highlights: [
        'Architected bi-directional WebSocket communication for instant messaging with zero perceivable latency.',
        'Implemented secure user authentication and persistent message storage.',
        'Designed modular frontend with responsive design and audio feedback.',
      ],
      tags: ['React', 'Node.js', 'Express', 'Socket.IO', 'Tailwind CSS', 'REST APIs'],
      github: 'https://github.com',
      live: 'https://github.com',
      demoCode: `// Real-time socket event distribution
io.on('connection', (socket) => {
  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    io.to(roomId).emit('user_joined', { userId: socket.id });
  });
});`,
    },
    {
      id: 'ai-assessor',
      title: 'LLM-Integrated Algorithmic Practice Companion',
      badge: 'AI & Data Structures',
      category: 'AI Engineering',
      period: 'Active Development',
      description:
        'Intelligent DSA mentor utilizing LLM APIs to provide context-aware hints, coordinate compression explanations, and Big-O complexity analysis without spoiling full solutions.',
      highlights: [
        'Integrated Large Language Model APIs with structured prompt guards for educational hinting.',
        'Specialized test suites for graph problems, coordinate compression, and disjoint set union.',
        'Automated code quality evaluation with Python AST analysis.',
      ],
      tags: ['Python', 'Django', 'LLM APIs', 'DSA', 'REST APIs', 'Vite'],
      github: 'https://github.com',
      live: 'https://github.com',
      demoCode: `def analyze_complexity(source_code: str):
    # LLM-guided AST parser for Big-O analysis
    prompt = f"Analyze time/space complexity for: {source_code}"
    return llm_client.generate(prompt=prompt)`,
    },
  ];

  return (
    <section id="projects" className="relative py-28 bg-dark-950 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Highlights</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            Featured <span className="italic font-normal text-teal-300">Projects</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 text-base font-light">
            Real software systems engineered with a build-first approach, modern UI, and robust backend integrations.
          </p>
        </div>

        {/* Featured Project Showcase (Interactive Split View) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Project Selector Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                  activeProject === idx
                    ? 'bg-white/[0.04] border-teal-400 shadow-[0_0_25px_rgba(20,184,166,0.25)]'
                    : 'bg-white/[0.01] border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-teal-400 uppercase tracking-wider">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-500">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-white tracking-wide mb-1">{proj.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{proj.description}</p>
              </button>
            ))}
          </div>

          {/* Right: Detailed Card with Code / Architecture Preview */}
          <div className="lg:col-span-8">
            <motion.div
              key={projects[activeProject].id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-teal-500/30 backdrop-blur-xl relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono border border-teal-500/20">
                      {projects[activeProject].category}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {projects[activeProject].period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-white font-semibold">
                    {projects[activeProject].title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-teal-400 text-gray-200 hover:text-teal-300 transition-all"
                    title="View Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={projects[activeProject].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed my-6 font-light">
                {projects[activeProject].description}
              </p>

              {/* Key Architectural Highlights */}
              <div className="mb-6 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-teal-300 mb-3">
                  Key Engineering Deliverables:
                </h4>
                {projects[activeProject].highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-light">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Code Snippet Preview */}
              <div className="mb-6 rounded-xl bg-black/70 border border-teal-500/20 p-4 font-mono text-xs overflow-x-auto text-teal-300/90 shadow-inner">
                <div className="flex items-center justify-between text-gray-500 pb-2 mb-2 border-b border-white/5 text-[11px]">
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <Terminal className="w-3.5 h-3.5 text-teal-400" />
                    Core Implementation Snippet
                  </span>
                  <span>ES6 / TypeScript</span>
                </div>
                <pre>
                  <code>{projects[activeProject].demoCode}</code>
                </pre>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {projects[activeProject].tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
