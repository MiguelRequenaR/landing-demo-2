import Button from "@/components/Button"

export default function HeroAbout() {
  return (
    <main className="min-h-screen bg-primary md:flex items-center justify-center pt-30 md:pt-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-7 md:py-30" data-aos="fade-right">
            <h1 className="text-white text-3xl md:text-7xl font-semibold text-center md:text-left">
              Un viaje de <span className="text-secondary">gusto</span> y <span className="text-secondary">tradición</span>
            </h1>
            <p className="text-white text-center md:text-left px-3 md:px-0">
              La comida es un viaje de sabores que conecta a las personas y crea alegría. Nuestro equipo ofrece una experiencia gastronómica fresca e innolvidable.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button>
                Reserva una mesa
              </Button>
            </div>
          </div>
          <div className="relative">
            <div 
              className="flex flex-col w-24 h-24 md:w-40 md:h-40 border border-dashed justify-center border-secondary rounded-full bg-tertiary 
              absolute top-5 left-23 md:top-5 md:left-15 "
              data-aos="zoom-in"
            >
              <h2 className="text-secondary text-3xl md:text-7xl font-semibold text-center">12</h2>
              <p className="text-white text-center text-[10px] md:text-base">Años de <br /> experiencia</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" 
                alt="heroImagen" 
                className="w-40 md:w-70 absolute top-0 right-15 rounded-lg"
                data-aos="fade-down-left"
              />
              <img 
                src="https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=879" 
                alt="heroImagen2" 
                className="w-40 md:w-70 absolute -bottom-74 left-20 md:bottom-10 md:left-10 rounded-lg"
                data-aos="fade-up-right"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
