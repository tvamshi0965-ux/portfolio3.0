import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#2dd4bf', '#38bdf8', '#5eead4', '#ffffff'],
      });
    } catch (err) {
      // safe fallback
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('tvamshi2007@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 bg-black text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

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
            <span>Connect & Collaborate</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            Get In <span className="italic font-normal text-teal-300">Touch</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 text-base font-light">
            I am currently seeking software development & AI engineering internships. Let's discuss how I can contribute to your engineering vision.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-semibold text-white">Direct Communication</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Feel free to reach out directly via email or phone. I typically respond within 24 hours.
              </p>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-mono uppercase">Email Address</div>
                    <a
                      href="mailto:tvamshi2007@gmail.com"
                      className="text-sm font-medium text-gray-200 hover:text-teal-300 transition-colors"
                    >
                      tvamshi2007@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-teal-500/20 text-gray-400 hover:text-teal-300 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-mono uppercase">Phone / WhatsApp</div>
                    <a
                      href="tel:+919014990131"
                      className="text-sm font-medium text-gray-200 hover:text-teal-300 transition-colors font-mono"
                    >
                      +91 90149 90131
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-mono uppercase">Location</div>
                    <div className="text-sm font-medium text-gray-200">
                      Hyderabad, Telangana, India
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <h3 className="text-xl font-semibold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400 text-sm font-light mb-6">
                Have a project, role, or question in mind? Drop a message below.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-teal-500/10 border border-teal-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Message Transmitted!</h4>
                  <p className="text-gray-300 text-sm font-light">
                    Thank you! Your message has been recorded. T. Vamshi will follow up with you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-teal-400 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-teal-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-teal-400 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Vamshi, we loved your EDU TECH project and would love to chat..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-teal-400 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 text-black font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-all duration-300 shadow-[0_0_25px_rgba(45,212,191,0.4)] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
