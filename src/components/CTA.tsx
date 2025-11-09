export default function CTA() {
  return (
    <section
      className="w-full flex flex-wrap justify-center gap-6 px-4 py-40 relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 z-10">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-5xl font-bold text-secondary">
            Últimas noticias
          </h2>
          <p className="text-white">Suscríbase para recibir las últimas noticias, anuncios y ofertas especiales.</p>
        </div>
        <div className="flex items-center">
          <input type="email" placeholder="Correo electrónico" className="w-full bg-primary py-4 px-3 focus:outline-none focus:ring-0 focus:border-transparent text-secondary" />
          
          <button className="bg-tertiary py-4 px-3 border border-secondary uppercase cursor-pointer text-secondary hover:bg-secondary hover:text-primary transition-colors duration-500">
            Suscribirse
          </button>
        </div>
      </div>
    </section>
  )
}
