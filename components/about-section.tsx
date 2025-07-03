"use client"

import Image from "next/image"
import { Shield, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Auktoriserat företag",
      description: "Godkänt av Elsäkerhetsverket med full försäkring",
    },
    {
      icon: Award,
      title: "Kollektivavtal",
      description: "Vi arbetar enligt branschens kollektivavtal",
    },
    {
      icon: Users,
      title: "45+ års erfarenhet",
      description: "Samlad erfarenhet från vårt erfarna team",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Om Malmlöf El</h1>
            <p className="text-lg text-gray-600 mb-6">
              Malmlöf El grundades 1998 och har sedan dess etablerat sig som ett pålitligt och kompetent elföretag i
              Skåne. Vi är auktoriserade av Elsäkerhetsverket och arbetar enligt branschens kollektivavtal med full
              trygghetsförsäkring.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Vår vision är att vara den självklara partnern för alla typer av elprojekt, från små servicejobb till
              stora entreprenader. Vi bygger långsiktiga relationer med våra kunder genom att leverera kvalitet,
              trygghet och professionell service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/outdoor-electrical.jpg"
              alt="Utomhusarbete med kran"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <feature.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
