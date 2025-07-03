import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ContactCTA />
    </>
  )
}
