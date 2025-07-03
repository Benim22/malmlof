"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    description: string
    fullDescription: string
    features: string[]
    image: string
  } | null
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">{service.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative h-48 w-full rounded-lg overflow-hidden">
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          </div>

          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.fullDescription}</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Vad ingår:</h3>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Intresserad av denna tjänst?</h4>
              <p className="text-gray-600">Kontakta oss för en kostnadsfri konsultation och skräddarsydd offert.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 flex-1"
                onClick={() => (window.location.href = "tel:0760184964")}
              >
                <Phone className="h-4 w-4 mr-2" />
                Ring för offert
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() =>
                  (window.location.href =
                    "mailto:roger@malmlofel.se?subject=" + encodeURIComponent("Förfrågan om " + service.title))
                }
              >
                <Mail className="h-4 w-4 mr-2" />
                Skicka e-post
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
