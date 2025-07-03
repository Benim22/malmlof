import { ProjectGallery } from "@/components/project-gallery"

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Våra Projekt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se exempel på våra genomförda projekt inom elinstallationer, uppvärmning och tekniska lösningar.
          </p>
        </div>
        <ProjectGallery />
      </div>
    </div>
  )
}
