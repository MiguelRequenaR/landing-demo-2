
export default function DetailContact() {
  return (
    <main className="bg-tertiary py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-white">¿Prefieres contactarnos directamente?</h2>
          <p className="text-white mx-3 md:mx-0">¿Prefieres un trato personalizado? Ponte en contacto con nuestro equipo directamente para obtener <br /> asistencia rápida, amable y profesional siempre que lo necesites.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20">
          <div className="flex flex-col items-center justify-center text-center space-y-5" data-aos="fade-up" data-aos-delay="100">
            <img src="/email.svg" alt="email" />
            <p className="text-[#e9e9ea] text-2xl font-semibold">Nuestro Email</p>
            <span className="text-gray-400">Envíanos tu pregunta por correo electrónico y te responderemos en unos días.</span>
            <span className="text-secondary text-xl font-semibold cursor-pointer hover:underline">info@foodie.com</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-5" data-aos="fade-up" data-aos-delay="200">
            <img src="/ubication.svg" alt="email" />
            <p className="text-[#e9e9ea] text-2xl font-semibold">Visítanos</p>
            <span className="text-gray-400">Puedes encontrarnos en la siguiente dirección. Y lo atenderemos personalmente.</span>
            <span className="text-secondary text-xl font-semibold cursor-pointer hover:underline">Av. La Victoria, Lima - Perú</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-5" data-aos="fade-up" data-aos-delay="300">
            <img src="/phone.svg" alt="email" />
            <p className="text-[#e9e9ea] text-2xl font-semibold">Llámanos</p>
            <span className="text-gray-400">Llámanos si su pregunta requiere una atención inmediata. Y solucionaremos sus dudas.</span>
            <span className="text-secondary text-xl font-semibold cursor-pointer hover:underline">+51 987 654 321</span>
          </div>
        </div>
      </div>
    </main>
  )
}
