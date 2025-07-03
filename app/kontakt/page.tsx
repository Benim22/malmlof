import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { MapSection } from "@/components/map-section"

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kontakta Oss</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Välkommen att kontakta oss – vi tar oss an allt från små servicejobb till stora entreprenader.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
        <MapSection />
      </div>
    </div>
  )
}
