
export default function HistoryAbout() {
  return (
    <main className="bg-tertiary py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-down">
          <span className="text-secondary">Nuestro Viaje</span>
          <h2 className="text-white text-4xl font-semibold">¿Como empezó todo?</h2>
          <p className="text-white text-sm mx-4 md:mx-0">
            Descubre la historia de nuestro restaurante y cómo hemos llegado a ser lo que somos hoy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20">
          <div className="text-center space-y-5 items-center justify-center flex flex-col md:mb-40" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1707151550757-fd379e80d1d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt="historyImage"
              className="w-[300px] h-[300px] md:w-[300px] md:h-[400px] object-cover rounded-t-full"
            />
            <h3 className="text-secondary text-5xl font-semibold">
              La primera chispa
            </h3>
            <p className="text-white mx-3 md:mx-20">
              Todo comenzó durante una reunión familiar, cuando me di cuenta de la alegría que la comida aporta a las personas. Rodeado de mis seres queridos, vi el poder de una comida compartida. Fue entonces cuando se me ocurrió la idea.
            </p>
          </div>
          <div className="text-center space-y-5 items-center justify-center flex flex-col md:mt-40" data-aos="fade-up" data-aos-delay="100">
            <img
              src="https://images.unsplash.com/photo-1663530761401-15eefb544889?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt="historyImage"
              className="w-[300px] h-[300px] md:w-[300px] md:h-[400px] object-cover rounded-t-full"
            />
            <h3 className="text-secondary text-5xl font-semibold">
              El primer chef
            </h3>
            <p className="text-white mx-3 md:mx-20">
              Nuestro viaje comenzó con una idea sencilla pero audaz, pero necesitábamos a un experto culinario para hacerla realidad. Entró en escena el chef, un innovador apasionado que compartía nuestra visión de crear platos que contaran una historia.
            </p>
          </div>
          <div className="text-center space-y-5 items-center justify-center flex flex-col md:mb-40" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=879"
              alt="historyImage"
              className="w-[300px] h-[300px] md:w-[300px] md:h-[400px] object-cover rounded-t-full"
            />
            <h3 className="text-secondary text-5xl font-semibold">
              Creciendo con fuerza
            </h3>
            <p className="text-white mx-3 md:mx-20">
              Lo que comenzó como un pequeño y acogedor restaurante se convirtió rápidamente en un destino gastronómico muy apreciado. Se corrió la voz y nuestro compromiso con la buena comida y el servicio excepcional atrajo a gente de todas partes.
            </p>
          </div>
          <div className="text-center space-y-5 items-center justify-center flex flex-col md:mt-40" data-aos="fade-up" data-aos-delay="300">
            <img
              src="https://images.unsplash.com/photo-1659626672787-f907aea3bc6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=940"
              alt="historyImage"
              className="w-[300px] h-[300px] md:w-[300px] md:h-[400px] object-cover rounded-t-full"
            />
            <h3 className="text-secondary text-5xl font-semibold">
              La evolución
            </h3>
            <p className="text-white mx-3 md:mx-20">
              La innovación siempre ha sido nuestra esencia. Desde la adopción de las reservas en línea hasta el lanzamiento de nuestro servicio de entrega rápida, nos hemos adaptado constantemente para servir mejor a nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
