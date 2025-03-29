"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiGithub, FiLinkedin, FiMessageSquare } from "react-icons/fi"

const ContactOption = ({ icon, label, value, href, delay, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-4 p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-${color}-500/50 hover:bg-zinc-800/80 transition-all shadow-sm hover:shadow-md hover:shadow-${color}-500/10`}
    >
      <div className={`p-3 rounded-full bg-${color}-900/30 text-${color}-400 border border-${color}-700/30`}>
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-lg text-zinc-200">{label}</h4>
        <p className="text-zinc-400">{value}</p>
      </div>
    </motion.a>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      window.location.href = `mailto:haiderahmad352@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
      setIsSubmitting(false)
      setFormSubmitted(true)
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        message: ""
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-20 relative">
      {/* Background elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 -right-64 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 b">Get in Touch</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Feel free to reach out if you want to collaborate, have a question, or just want to connect.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        <div className="space-y-6">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-6 text-zinc-200"
          >
            Contact Information
          </motion.h3>
          
          <div className="space-y-4">
            <ContactOption 
              icon={<FiMail size={24} />}
              label="Email"
              value="haiderahmad352@gmail.com"
              href="mailto:haiderahmad352@gmail.com"
              delay={0.1}
              color="blue"
            />
            
            <ContactOption 
              icon={<FiMessageSquare size={24} />}
              label="WhatsApp"
              value="+92 303 7287953"
              href="https://wa.me/+923037287953"
              delay={0.2}
              color="green"
            />
            
            <ContactOption 
              icon={<FiGithub size={24} />}
              label="GitHub"
              value="haider-9"
              href="https://github.com/haider-9"
              delay={0.3}
              color="purple"
            />
            
            <ContactOption 
              icon={<FiLinkedin size={24} />}
              label="LinkedIn"
              value="Connect with me"
              href="https://linkedin.com/in/haider-ahmad"
              delay={0.4}
              color="blue"
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-zinc-700/50"
        >
          <h3 className="text-2xl font-semibold mb-6 text-zinc-200">Send a Message</h3>
          
          {formSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
            >
              <p className="text-green-400">Thank you for your message! I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-zinc-700/50 border border-zinc-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-zinc-700/50 border border-zinc-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-zinc-700/50 border border-zinc-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-medium rounded-lg transition-all shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
