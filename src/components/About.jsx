import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Cpu, Award, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-teal-400" />,
      title: "Education",
      subtitle: "B.Tech in Computer Science & Engineering",
      detail: "Brilliant Grammar School Educational Society's Group of Institutions",
      period: "Expected 2027",
    },
    {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "Full-Stack Development",
      subtitle: "React.js, Python, Django & Cloud",
      detail: "Building production-grade web applications from concept to deployment.",
      period: "2+ Years Project Experience",
    },
    {
      icon: <Cpu className="w-5 h-5 text-teal-300" />,
      title: "AI Integration",
      subtitle: "LLM-Integrated Applications & APIs",
      detail: "Leveraging generative AI and external APIs for smart automated workflows.",
      period: "Modern AI Stack",
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-300" />,
      title: "Algorithmic Problem Solving",
      subtitle: "LeetCode & Competitive DSA",
      detail: "Specialized in graph theory, coordinate compression, and union-find algorithms.",
      period: "Consistent Practice",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-dark-950 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <span>Engineering Profile</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            About <span className="italic font-normal text-teal-300">T. Vamshi</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-500" />
              
              <div className="flex items-center gap-5 mb-6">
                <img
                  src="/profile.jpg"
                  alt="T. Vamshi"
                  className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl border border-teal-500/30 object-cover object-top shadow-[0_0_24px_rgba(20,184,166,0.12)]"
                />
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
                  Build-First Software Developer
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed font-light text-base sm:text-lg">
                I am a final-year Computer Science student specializing in full-stack web development and AI-integrated applications. With a <span className="text-teal-300 font-medium">build-first approach</span>, I have hands-on experience shipping complete, production-ready platforms — ranging from React-based web systems with live multi-language code execution to responsive portfolios.
              </p>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base pt-2">
                My technical philosophy blends rigorous algorithmic problem-solving with elegant user interfaces. I am actively seeking a <span className="text-white font-medium">Software Development / AI Engineering internship</span> to apply and elevate these capabilities in a high-impact engineering team.
              </p>

              {/* Quick Contact & Details Pills */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="truncate">tvamshi2007@gmail.com</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>+91 90149 90131</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Open for Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Milestones / Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-teal-500/40 backdrop-blur-xl transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(20,184,166,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-teal-400 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                  <p className="text-teal-300 text-xs font-mono mb-2">{item.subtitle}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.detail}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>{item.period}</span>
                  <span className="text-teal-400">✦</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
