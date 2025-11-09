
const services = [
  {
    icon: "/food.svg",
    title: "Comida Deliciosa",
    description: "Nuestros platos están llenos de sabores frescos y atrevidos que le encantarán.",
  },
  {
    icon: "/relax.svg",
    title: "Relajante",
    description: "Disfrute de su comida en un ambiente acogedor y agradable para cualquier ocasión.",
  },
  {
    icon: "/service.svg",
    title: "Servicio de Calidad",
    description: "Nos dedicamos a garantizar un servicio impecable con un personal capacitado y amable.",
  },
  {
    icon: "/ingredients.svg",
    title: "Ingredientes Frescos",
    description: "Utilizamos los mejores ingredientes frescos para que cada plato sea perfecto.",
  },
]

export default function HomeService() {
  return (
    <main className="bg-primary py-20">
      <div className="max-w-7xl mx-auto pb-30">
        <div data-aos="fade-down" className="text-center">
          <span className="text-secondary">¿Por qué elegirnos?</span>
          <h2 className="text-white text-4xl font-semibold">Ofrecemos un servicio elegante para todos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-15" data-aos="fade-up" data-aos-delay="400">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center space-y-4 relative h-full mx-4`}
            >
              <img src={service.icon} alt="icon" className="w-10 h-10 md:w-20 md:h-20"/>
              <p className="text-white text-2xl font-semibold">{service.title}</p>
              <p className="text-white text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
