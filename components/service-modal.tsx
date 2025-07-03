"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
        className="max-w-3xl w-[92vw] sm:w-[80vw] max-h-[80vh] overflow-hidden flex flex-col p-0 gap-0 rounded-lg sm:rounded-xl"
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


      </DialogContent>
    </Dialog>
  )
}
