"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const navigation = [
    { name: "Hem", href: "/" },
    { name: "Om Oss", href: "/om-oss" },
    { name: "Tjänster", href: "/tjanster" },
    { name: "Projekt", href: "/projekt" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Malmlöf El"
              width={150}
              height={50}
              className="h-12 w-auto mb-4 filter brightness-200"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Auktoriserat elföretag med över 45 års erfarenhet. Vi levererar professionella ellösningar för alla typer
              av projekt.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300">0760-184964</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300">roger@malmlofel.se</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300">Katedergatan 1b, 254 75 Ödåkra</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-yellow-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Certifieringar</h3>
            <div className="space-y-2 text-gray-300">
              <p>✓ Elsäkerhetsverket</p>
              <p>✓ Installatörsföretagen</p>
              <p>✓ Kollektivavtal</p>
              <p>✓ Trygghetsförsäkring</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MALMLÖF EL AB. Auktoriserat elföretag enligt Elsäkerhetsverket.
          </p>
        </div>
      </div>
    </footer>
  )
}
