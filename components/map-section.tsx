"use client"

import { motion } from "framer-motion"

export function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Hitta till oss</h2>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.5!2d12.8567!3d56.0753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3a5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sKatedergatan%201B%2C%20254%2075%20%C3%96d%C3%A5kra!5e0!3m2!1ssv!2sse!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Malmlöf El location in Ödåkra"
        />
      </div>
    </motion.div>
  )
}
