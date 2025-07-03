import { ServicesGrid } from "@/components/services-grid"

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Våra Tjänster</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi erbjuder kompletta ellösningar för alla typer av projekt – från små servicejobb till stora entreprenader.
          </p>
        </div>
        <ServicesGrid />
      </div>
    </div>
  )
}
