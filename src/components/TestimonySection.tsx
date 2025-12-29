
const testimonials = [
  {
    text: "La comida es deliciosa y la atención que brinda el personal es excelente. Buen ambiente y atención. Definitivamente volveré.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Miguel Angel",
    role: "Comensal",
  },
  {
    text: "La atención es excelente y la comida es deliciosa. Buen ambiente y atención. Definitivamente volveré.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Juan Perez",
    role: "Comensal",
  },
  {
    text: "El servicio es excelente y la comida es deliciosa. Buen ambiente y atención. Definitivamente volveré.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    role: "Comensal",
  },
]

export default function TestimonySection() {
  return (
    <main className="bg-primary py-20 pb-30">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-down" className="text-center">
          <span className="text-secondary">Testimonios</span>
          <h2 className="text-white text-4xl font-semibold">Lo que nuestros comensales dicen</h2>
          <p className="text-white text-sm">Descubre lo que nuestros comensales dicen sobre nosotros y por qué eligen nuestro restaurante.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 p-4 md:p-0" data-aos="fade-up" data-aos-delay="400">
          {testimonials.map((testimony, idx) => (
            <div key={idx} className="bg-secondary p-10 md:mt-10 items-center justify-center flex flex-col relative overflow-hidden group">
              <span className="absolute inset-0 bg-primary -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <div className="relative z-10 cursor-pointer flex flex-col items-center justify-center space-y-5 group-hover:text-secondary transition-colors duration-500 border border-transparent group-hover:border-secondary rounded-lg p-5">
                <p className="text-center">{testimony.text}</p>
                <img src={testimony.image} alt="testimony" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col items-center gap-2">
                  <p>{testimony.name}</p>
                  <span>{testimony.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
