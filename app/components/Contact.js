"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMessageSquare } from "react-icons/fi";

const ContactOption = ({ icon, label, value, href, delay, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-4 p-6 rounded-xl bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 hover:border-${color}-500/50 hover:bg-zinc-800/90 transition-all shadow-lg hover:shadow-xl hover:shadow-${color}-500/20`}
    >
      <div className={`p-3 rounded-full bg-${color}-900/40 text-${color}-400 border border-${color}-700/40`}>{icon}</div>
      <div>
        <h4 className="font-medium text-lg text-zinc-100">{label}</h4>
        <p className="text-zinc-400">{value}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);
    
    setTimeout(() => {
      window.location.href = `mailto:haiderahmad352@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Contact from ${formData.name}`
      )}&body=${encodeURIComponent(formData.message)}`;
      setIsSubmitting(false);
      setFeedback("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFeedback(null), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-zinc-200">Get in Touch</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">Reach out for collaborations or questions.</p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-6">
          <ContactOption icon={<FiMail size={24} />} label="Email" value="haiderahmad352@gmail.com" href="mailto:haiderahmad352@gmail.com" delay={0.1} color="blue" />
          <ContactOption icon={<FiMessageSquare size={24} />} label="WhatsApp" value="+92 303 7287953" href="https://wa.me/+923037287953" delay={0.2} color="green" />
          <ContactOption icon={<FiGithub size={24} />} label="GitHub" value="haider-9" href="https://github.com/haider-9" delay={0.3} color="purple" />
          <ContactOption icon={<FiLinkedin size={24} />} label="LinkedIn" value="Connect with me" href="https://www.linkedin.com/in/haider-ahmad-439317164/" delay={0.4} color="blue" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 bg-zinc-800/60 p-8 rounded-2xl shadow-xl border border-zinc-700/50"
        >
          <h3 className="text-2xl font-semibold text-zinc-100">Send a Message</h3>
          {feedback === "success" && <p className="text-green-400">Message sent successfully!</p>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white" required />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white" rows="5" required />
            <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>{isSubmitting ? "Sending..." : "Send Message"}</motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
