"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function ContactCTA() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Redo att starta ditt elprojekt?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation och offert
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              <Link href="/kontakt" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Skicka Meddelande
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gray-900 text-white hover:bg-yellow-500 hover:text-gray-900 border-2 border-gray-900 hover:border-yellow-500 transition-all duration-300"
            >
              <a href="tel:0760184964" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Ring Direkt
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
