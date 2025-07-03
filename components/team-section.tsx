"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ett erfaret team med framtidstänk</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vårt team kombinerar mångårig erfarenhet med modern teknik och innovativa lösningar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/team-member.jpg"
              alt="Teammedlem"
              width={500}
              height={600}
              className="rounded-lg shadow-lg mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Roger & Rasmus Malmlöf</h3>
            <p className="text-lg text-gray-600 mb-6">
              Med över 45 års samlad erfarenhet inom elbranschen leder Roger och Rasmus Malmlöf företaget med fokus på
              kvalitet, säkerhet och kundnöjdhet.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Vårt team håller sig ständigt uppdaterat med de senaste teknologierna och regelverken inom elbranschen för
              att kunna erbjuda de bästa lösningarna till våra kunder.
            </p>
            <p className="text-lg text-gray-600">
              Vi tror på personlig service och bygger långsiktiga relationer med våra kunder genom att alltid leverera
              det vi lovar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
