"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Över 45 års erfarenhet inom elbranschen
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Malmlöf El är ett auktoriserat elföretag som grundades 1998. Vi har byggt upp vår verksamhet på tillit,
              kvalitet och teknisk kompetens. Vårt team har över 45 års samlad erfarenhet och vi arbetar enligt
              kollektivavtal med full trygghetsförsäkring.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Vi strävar efter en öppen dialog med våra kunder och levererar alltid lösningar som håller högsta kvalitet
              med fokus på miljö och säkerhet.
            </p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              <Link href="/om-oss">Läs Mer Om Oss</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/company-vehicles.jpg"
              alt="Malmlöf El fordon"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
