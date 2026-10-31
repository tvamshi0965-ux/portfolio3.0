import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Terminal, 
  BrainCircuit, 
  CheckCircle2, 
  Sparkles, 
  Workflow, 
  Flame 
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Languages & Frameworks' },
    { id: 'tools', label: 'Tools & Cloud' },
    { id: 'concepts', label: 'Engineering Concepts' },
  ];

  const skillGroups = [
    {
      category: 'languages',
      title: 'Languages & Frameworks',
      icon: <Code2 className="w-5 h-5 text-teal-400" />,
      skills: [
        { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: 'Modern Async, DOM, Engine Optimization', tag: 'Core Web' },
        { name: 'React.js', level: 'Advanced', highlight: 'Hooks, Vite, Context, Custom Architectures', tag: 'Frontend' },
        { name: 'Python', level: 'Proficient', highlight: 'Algorithms, Data Structures, Automation', tag: 'Backend & AI' },
        { name: 'Django', level: 'Intermediate', highlight: 'MVC, ORM, Auth, REST Frameworks', tag: 'Backend' },
        { name: 'HTML5 & CSS3', level: 'Advanced', highlight: 'Responsive Design, Semantic UI, Animations', tag: 'Foundation' },
      ],
    },
    {
      category: 'tools',
      title: 'Tools & Platforms',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', highlight: 'Version Control, Branching, PR Workflows', tag: 'DevOps' },
        { name: 'Vercel', level: 'Proficient', highlight: 'Automated CI/CD, Production Serverless', tag: 'Cloud' },
        { name: 'VS Code', level: 'Expert', highlight: 'Debugging, Extensions, Terminal Workflow', tag: 'IDE' },
        { name: 'REST APIs', level: 'Advanced', highlight: 'Endpoint Design, Piston API, Third-Party SDKs', tag: 'Networking' },
      ],
    },
    {
      category: 'concepts',
      title: 'Concepts & Architecture',
      icon: <BrainCircuit className="w-5 h-5 text-teal-300" />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Strong', highlight: 'Coordinate Compression, Union-Find, Graphs', tag: 'DSA' },
        { name: 'Full-Stack Web Dev', level: 'Advanced', highlight: 'End-to-End Product Lifecycle & UX', tag: 'System' },
        { name: 'LLM-Integrated Applications', level: 'Emerging', highlight: 'Prompt Engineering, AI-Driven Workflows', tag: 'AI/GenAI' },
        { name: 'API Integration', level: 'Advanced', highlight: 'Code Execution Engines, JSON Schema', tag: 'Integration' },
      ],
    },
  ];

  const softSkills = [
    'Algorithmic Problem Solving',
    'Clear Technical Communication',
    'Agile Team Collaboration',
    'Self-Motivated Continuous Learning',
    'Disciplined Time Management',
    'Production-First Mindset',
  ];

  return (
    <section id="skills" className="relative py-28 bg-black text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            Skills & <span className="italic font-normal text-teal-300">Expertise</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 text-base font-light">
            Proven technologies and algorithms honed through real-world platform builds and intensive LeetCode practice.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.3)]'
                  : 'bg-white/[0.03] text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups
            .filter((group) => activeCategory === 'all' || group.category === activeCategory)
            .map((group, groupIdx) => (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-teal-500/40 backdrop-blur-xl transition-all duration-300 group hover:shadow-[0_15px_35px_rgba(20,184,166,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 group-hover:border-teal-400 transition-colors">
                        {group.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white tracking-wide">{group.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-teal-500/30 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 font-light">{skill.highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-teal-400/80">
                  <span>Verified Competency</span>
                  <span>100%</span>
                </div>
              </motion.div>
            ))}
        </div>

        {/* LeetCode & Problem Solving Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-teal-950/40 via-dark-900 to-blue-950/40 border border-teal-500/30 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-full bg-teal-500/10 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-mono uppercase tracking-widest">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>LeetCode & Algorithmic Practice</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">
                Concise, Optimized Solutions to Complex Graph & Coordinate Problems
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Regularly solving algorithmic challenges with special attention to runtime efficiency and memory constraints. Experienced with coordinate compression, Disjoint Set Union (Union-Find) for connected components, and tree/graph traversals.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="p-3.5 rounded-xl bg-black/60 border border-teal-500/30 text-center">
                <div className="text-2xl font-mono font-bold text-teal-300">Graph Theory</div>
                <div className="text-[11px] text-gray-400 font-mono">Union-Find & Compression</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/60 border border-teal-500/30 text-center">
                <div className="text-2xl font-mono font-bold text-cyan-300">Build-First</div>
                <div className="text-[11px] text-gray-400 font-mono">Production Integration</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Soft Skills Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {softSkills.map((s, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-xs text-gray-300 font-mono hover:border-teal-500/40 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>{s}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
