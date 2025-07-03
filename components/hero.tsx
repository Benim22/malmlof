"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export function Hero() {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Video Background */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
          onError={() => setVideoError(true)}
        >
          <source
            src="/hero.webm"
            type="video/webm"
          />
          {/* Fallback text for browsers that don't support video */}
          Din webbläsare stöder inte video-taggen.
        </video>
      )}
      


      {/* Fallback Image */}
      {videoError && (
        <Image
          src="/images/electrical-cabinet.jpg"
          alt="Elektrisk installation"
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Loading indicator */}
      <div className="absolute inset-0 bg-gray-900 z-5 transition-opacity duration-1000" id="video-loader" />

      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Vi gör jobbet</h1>
            <p className="text-xl md:text-2xl text-yellow-400 mb-8 font-semibold">
              Erfarenhet, trygghet och kvalitet sedan 1998
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl">
              Malmlöf El är ett auktoriserat elföretag med över 45 års samlad erfarenhet. Vi levererar professionella
              ellösningar för byggare, BRF:er, lantbruk, företag och privatpersoner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                <Link href="/tjanster">Våra Tjänster</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gray-900 text-white hover:bg-yellow-500 hover:text-gray-900 border-2 border-gray-900 hover:border-yellow-500 transition-all duration-300"
              >
                <Link href="/kontakt">Kontakta Oss</Link>
              </Button>

            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        video {
          filter: brightness(0.7) contrast(1.1);
        }
      `}</style>
    </section>
  )
}
