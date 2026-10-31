import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, GraduationCap, Briefcase, Award, Code, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-dark-900 border border-teal-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] overflow-y-auto text-gray-200"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase text-teal-400 tracking-wider">
                Official Curriculum Vitae
              </span>
              <h2 className="text-2xl font-serif text-white font-semibold">T. VAMSHI</h2>
              <p className="text-xs text-gray-400 font-mono">Final-Year B.Tech Student — Computer Science & Engineering</p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download="T_Vamshi_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_15px_rgba(45,212,191,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-6 pt-6 text-sm">
            
            {/* Contact Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pb-4 border-b border-white/5">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-teal-400" /> Hyderabad, Telangana</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-teal-400" /> tvamshi2007@gmail.com</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-teal-400" /> +91 90149 90131</span>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-300 mb-2">Summary</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Final-year Computer Science student with a build-first approach to software development, specializing in full-stack web development and AI-integrated applications. Experienced in shipping complete, production-ready projects — from React-based platforms with live code execution to responsive portfolio sites — using modern JavaScript frameworks, Python, and cloud deployment. Seeking a Software Development / AI Engineering internship to apply and grow these skills in a real-world engineering environment.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-300 mb-2">Education</h3>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-white">B.Tech, Computer Science & Engineering</h4>
                  <p className="text-gray-400 text-xs">Brilliant Grammar School Educational Society's Group of Institutions</p>
                </div>
                <span className="text-xs font-mono text-teal-400">Expected 2027</span>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-300 mb-2">Projects</h3>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white">EDU TECH — Placement Preparation Quiz Platform</h4>
                  <span className="text-xs font-mono text-teal-400">Production</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-300 text-xs font-light">
                  <li>Built a feature-rich React + Vite web application for placement preparation, including user authentication, daily quizzes, and live leaderboards.</li>
                  <li>Integrated the Piston API to support real, multi-language code execution and scored assessments directly within the platform.</li>
                  <li>Iteratively refined the app from a static landing page into a fully interactive product and deployed it to production on Vercel.</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-300 mb-2">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-teal-400 font-mono block mb-1">Languages & Frameworks:</span>
                  <span className="text-gray-300">JavaScript, React.js, Python, Django, HTML5, CSS3</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-teal-400 font-mono block mb-1">Tools & Platforms:</span>
                  <span className="text-gray-300">Git, GitHub, VS Code, Vercel, REST APIs</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-teal-400 font-mono block mb-1">Concepts:</span>
                  <span className="text-gray-300">DSA, Full-Stack Web Development, API Integration, LLM Applications</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-teal-400 font-mono block mb-1">Soft Skills:</span>
                  <span className="text-gray-300">Teamwork, Time Management, Problem Solving, Communication</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-300 mb-2">Achievements & Practice</h3>
              <ul className="list-disc list-inside space-y-1.5 text-gray-300 text-xs font-light">
                <li>Solve algorithmic problems on LeetCode regularly, with a focus on writing concise, efficient solutions (e.g., coordinate compression and union-find techniques for graph problems).</li>
                <li>Completed technical learning programs and hands-on project-based internships in web development.</li>
              </ul>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-gray-500">Document authenticated & verified</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-teal-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Open raw PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
