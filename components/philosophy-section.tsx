"use client"

import { Leaf, Shield, Hand } from "lucide-react"
import { motion } from "framer-motion"

export function PhilosophySection() {
  const values = [
    {
      icon: Hand,
      title: "Öppen dialog",
      description: "Vi strävar efter en öppen och ärlig kommunikation med alla våra kunder",
    },
    {
      icon: Shield,
      title: "Säkerhet först",
      description: "Säkerhet är alltid vår högsta prioritet i alla projekt vi genomför",
    },
    {
      icon: Leaf,
      title: "Miljötänk",
      description: "Vi arbetar aktivt för hållbara lösningar och miljövänliga installationer",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vår Filosofi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi strävar efter en öppen dialog med våra kunder och levererar alltid lösningar som håller högsta kvalitet
            med fokus på miljö och säkerhet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <value.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
