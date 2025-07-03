"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Hem", href: "/" },
    { name: "Om Oss", href: "/om-oss" },
    { name: "Tjänster", href: "/tjanster" },
    { name: "Projekt", href: "/projekt" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Malmlöf El" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
              onClick={() => (window.location.href = "tel:0760184964")}
            >
              Ring Nu
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                  onClick={() => (window.location.href = "tel:0760184964")}
                >
                  Ring Nu
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
