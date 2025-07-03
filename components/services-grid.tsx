"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Search, Car, Lightbulb, Home, Building } from "lucide-react"
import { motion } from "framer-motion"
import { ServiceModal } from "./service-modal"

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      icon: Zap,
      title: "Elinstallation i nyproduktion & renovering",
      description: "Kompletta elinstallationer för nya byggnader och renoveringar av befintliga fastigheter.",
      fullDescription:
        "Vi utför professionella elinstallationer för både nyproduktion och renoveringar. Vårt team har mångårig erfarenhet av att arbeta med allt från småhus till större kommersiella projekt. Vi följer alltid gällande säkerhetsföreskrifter och använder högkvalitativa material.",
      features: [
        "Komplett elinstallation från grunden",
        "Renovering av befintliga elsystem",
        "Säkerhetsbesiktning och godkännande",
        "Energieffektiva lösningar",
        "Garanterat arbete enligt branschstandard",
        "Projektledning från start till mål",
      ],
      image: "/images/electrical-cabinet.jpg",
    },
    {
      icon: Search,
      title: "Felsökning & service",
      description: "Snabb och effektiv felsökning av elektriska problem samt löpande service och underhåll.",
      fullDescription:
        "När elektriska problem uppstår behöver du snabb och pålitlig hjälp. Vi erbjuder professionell felsökning och service dygnet runt. Våra erfarna elektriker kan snabbt identifiera och lösa de flesta elektriska problem.",
      features: [
        "Akut felsökning 24/7",
        "Systematisk problemidentifiering",
        "Reparation av elfel",
        "Förebyggande underhåll",
        "Säkerhetskontroller",
        "Snabb responstid",
      ],
      image: "/images/electrical-panel-1.jpg",
    },
    {
      icon: Car,
      title: "Laddboxar (EV)",
      description: "Installation av laddstationer för elbilar, både för privatpersoner och företag.",
      fullDescription:
        "Med den växande populariteten av elbilar är det viktigt att ha en pålitlig laddlösning hemma eller på jobbet. Vi installerar och konfigurerar laddboxar för alla typer av elbilar och erbjuder både enkla och smarta laddlösningar.",
      features: [
        "Installation av hemmaladdare",
        "Kommersiella laddstationer",
        "Smart laddning med app-styrning",
        "Lastbalansering",
        "Service och underhåll",
        "Rådgivning om laddlösningar",
      ],
      image: "/images/utility-room.jpg",
    },
    {
      icon: Lightbulb,
      title: "Belysning & ljusstyrning",
      description: "Professionell belysningsdesign och installation av moderna ljusstyrningssystem.",
      fullDescription:
        "Rätt belysning skapar atmosfär och sparar energi. Vi hjälper dig att designa och installera belysningslösningar som passar dina behov, från enkla lampinstallationer till avancerade smarta belysningssystem.",
      features: [
        "Belysningsdesign och planering",
        "LED-installation",
        "Smart belysningsstyrning",
        "Utomhusbelysning",
        "Dimmer och sensorer",
        "Energieffektiva lösningar",
      ],
      image: "/images/ceiling-work.jpg",
    },
    {
      icon: Home,
      title: "Smart hem & tekniklösningar",
      description: "Installation av smarta hemlösningar och avancerade tekniska system.",
      fullDescription:
        "Gör ditt hem smartare och mer effektivt med moderna tekniklösningar. Vi installerar och konfigurerar system för hemautomation, säkerhet och komfort som du kan styra från din smartphone.",
      features: [
        "Hemautomationssystem",
        "Smart belysning och klimatstyrning",
        "Säkerhetssystem och kameror",
        "Ljudsystem och entertainment",
        "Nätverksinstallation",
        "Integration av olika system",
      ],
      image: "/images/underfloor-heating-1.jpg",
    },
    {
      icon: Building,
      title: "Samarbete i större projekt",
      description: "Samarbete med byggpartners i större entreprenader och komplexa projekt.",
      fullDescription:
        "Vi arbetar som underentreprenör i större byggprojekt och har lång erfarenhet av att samarbeta med byggföretag, arkitekter och projektledare. Vi levererar alltid i tid och enligt specifikation.",
      features: [
        "Underentreprenad i byggprojekt",
        "Projektplanering och koordinering",
        "Teknisk rådgivning",
        "Kvalitetssäkring",
        "Dokumentation och certifiering",
        "Långsiktiga partnerskap",
      ],
      image: "/images/outdoor-electrical.jpg",
    },
  ]

  const openModal = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-shrink-0 mb-4">
                  <service.icon className="h-12 w-12 text-yellow-500 mb-4" />
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                </div>

                <div className="flex-shrink-0 mt-auto">
                  <Button
                    onClick={() => openModal(service)}
                    className="w-full bg-white text-gray-900 border-2 border-gray-200 hover:bg-yellow-500 hover:text-gray-900 hover:border-yellow-500 transition-all duration-300"
                  >
                    Läs mer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
    </>
  )
}
