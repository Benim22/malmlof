"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Search, Car } from "lucide-react"
import { motion } from "framer-motion"

export function ServicesPreview() {
  const services = [
    {
      icon: Zap,
      title: "Elinstallationer",
      description: "Kompletta elinstallationer för nyproduktion och renovering",
    },
    {
      icon: Search,
      title: "Felsökning",
      description: "Snabb och effektiv felsökning av elektriska problem",
    },
    {
      icon: Car,
      title: "Laddboxar",
      description: "Installation av laddstationer för elbilar",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Våra Huvudtjänster</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder kompletta ellösningar för alla dina behov
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
            <Link href="/tjanster">Se Alla Tjänster</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
