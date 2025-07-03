"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ProjectGallery() {
  const projects = [
    {
      image: "/images/underfloor-heating-1.jpg",
      title: "Golvvärme installation",
      description: "Professionell installation av golvvärmesystem i villa",
    },
    {
      image: "/images/underfloor-heating-2.jpg",
      title: "Golvvärme renovering",
      description: "Renovering och uppgradering av befintligt golvvärmesystem",
    },
    {
      image: "/images/electrical-panel-1.jpg",
      title: "Elcentral installation",
      description: "Installation av modern elcentral med säkerhetsbrytare",
    },
    {
      image: "/images/utility-room.jpg",
      title: "Teknisk installation",
      description: "Komplett teknisk installation i tekniskt utrymme",
    },
    {
      image: "/images/ceiling-work.jpg",
      title: "Takinstallation",
      description: "Elinstallation i tak för belysning och tekniska system",
    },
    {
      image: "/images/outdoor-electrical.jpg",
      title: "Utomhusarbete",
      description: "Utomhusinstallationer med specialutrustning",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
