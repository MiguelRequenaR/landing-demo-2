import Button from "@/components/Button"
import { Star } from "lucide-react"

export default function HeroHome() {
  return (
    <main className="min-h-screen bg-primary md:flex items-center justify-center pt-30 md:pt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        <div className="space-y-7 md:py-20" data-aos="fade-right">
          <h1 className="text-3xl md:text-7xl font-semibold text-white text-center md:text-left">
            Donde los <span className="text-secondary">Antojos</span> encuentran su pareja <span className="text-secondary">perfecta</span>
          </h1>
          <p className="text-white text-center md:text-left">
            Descubre sabores intensos y platos inolvidables en un lugar donde cada antojo se satisface con el bocado perfecto, elaborado especialmente para ti.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button>
              Reserva una mesa
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-white text-2xl font-semibold">4.8/5</h3>
            <div className="flex items-center">  
              <Star className="w-6 h-6 text-secondary" />
              <Star className="w-6 h-6 text-secondary" />
              <Star className="w-6 h-6 text-secondary" />
              <Star className="w-6 h-6 text-secondary" />
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-sm">Calificación Promedio</span>
          </div>
        </div>
        <div className="relative min-h-[300px] md:min-h-0">
          <img 
            src="https://i.ibb.co/9mCSL6Q2/hero2R.png" 
            alt="heroImage" 
            className="
              absolute 
              w-40 top-10 right-4
              md:w-70 md:top-20 md:right-10
            " 
            data-aos="fade-down-left"
            data-aos-delay="400"
          />
          <img 
            src="https://i.ibb.co/XZ7zmxFZ/hero3R.png" 
            alt="heroImage" 
            className="
              absolute 
              w-28 left-24
              md:w-60 md:left-21 md:top-auto
            " 
            data-aos="fade-down-right"
            data-aos-delay="300"
          />
          <img 
            src="https://i.ibb.co/KdPnQPp/hero1R.png" 
            alt="heroImage" 
            className="
              absolute 
              w-48 left-0 bottom-0
              md:w-88
            " 
            data-aos="fade-up-right"
            data-aos-delay="200"
          />
        </div>
      </div>
    </main>
  )
}
