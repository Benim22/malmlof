"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Telefon",
      content: "0760-184964",
      link: "tel:0760184964",
    },
    {
      icon: Mail,
      title: "E-post",
      content: "roger@malmlofel.se",
      link: "mailto:roger@malmlofel.se",
    },
    {
      icon: MapPin,
      title: "Adress",
      content: "Katedergatan 1b\n254 75 Ödåkra",
      link: null,
    },
    {
      icon: Clock,
      title: "Öppettider",
      content: "Mån-Fre: 07:00-16:00\nJour: 24/7",
      link: null,
    },
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformation</h2>
      </motion.div>

      {contactDetails.map((detail, index) => (
        <motion.div
          key={detail.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <detail.icon className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{detail.title}</h3>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="text-gray-600 hover:text-yellow-600 transition-colors whitespace-pre-line"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{detail.content}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
