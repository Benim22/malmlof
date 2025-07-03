import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { PhilosophySection } from "@/components/philosophy-section"

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <TeamSection />
      <PhilosophySection />
    </div>
  )
}
