"use client"

import FlipLink from "./ui/FlipLink"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="max-w-3xl mx-3 px-4 py-16">
      <h3 className="text-4xl font-semibold mb-12">Get in touch</h3>
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <FlipLink
            href="mailto:haiderahmad352@gmail.com"
            className="flex items-center gap-2"
          >
            Email
          </FlipLink>

          <FlipLink
            href="https://wa.me/+923037287953"
            className="flex  gap-2"
          >
            WhatsApp
          </FlipLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
