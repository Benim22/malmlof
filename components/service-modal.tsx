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
      <DialogContent 
        className="max-w-4xl w-[96vw] sm:w-[90vw] max-h-[95vh] overflow-hidden flex flex-col p-0 gap-0 rounded-lg sm:rounded-xl"
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 0
        }}
      >
        <DialogHeader className="flex-shrink-0 p-4 sm:p-6 pb-0">
          <DialogTitle className="text-lg sm:text-2xl font-bold text-gray-900 pr-8 text-left">
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 pt-4 space-y-4 sm:space-y-6">
            <div className="relative h-48 sm:h-56 w-full rounded-lg overflow-hidden">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>

            <div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{service.fullDescription}</p>

              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Vad ingår:</h3>
              <ul className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-yellow-500 font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 p-4 sm:p-6 pt-0 border-t bg-gray-50">
          <div className="text-center mb-4">
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Intresserad av denna tjänst?</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Kontakta oss för en kostnadsfri konsultation och skräddarsydd offert.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 flex-1 h-12 font-medium"
              onClick={() => (window.location.href = "tel:0760184964")}
            >
              <Phone className="h-4 w-4 mr-2" />
              Ring för offert
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-12 font-medium border-gray-300 hover:bg-gray-100"
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
      </DialogContent>
    </Dialog>
  )
}
