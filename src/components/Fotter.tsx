import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Fotter() {
  return (
    <footer className="bg-primary py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <hr className="border-secondary w-full" />
          <img src="/logoFoodie.svg" alt="logo" />
          <hr className="border-secondary w-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch text-center py-10 space-y-10 md:space-y-0">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-secondary text-2xl font-semibold">Contactanos</h3>
            <p className="flex items-center justify-center gap-2 text-white">
              <Mail className="w-6 h-6 text-secondary" /> info@foodie.com
            </p>
            <p className="flex items-center justify-center gap-2 text-white">
              <Phone className="w-6 h-6 text-secondary" /> +57 317 890 7654
            </p>
          </div>
          <div className="hidden md:block w-px bg-secondary mx-8"></div>
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-secondary text-2xl font-semibold">Dirección</h3>
            <p className="text-white">Av. La Victoria, Lima</p>
            <p className="text-white">Lima, Perú</p>
          </div>
          <div className="hidden md:block w-px bg-secondary mx-8"></div>
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-secondary text-2xl font-semibold">Horario de atención</h3>
            <p className="text-white">Lunes a Viernes: 10:00 - 22:00</p>
            <p className="text-white">Sábado y Domingo: 10:00 - 20:00</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-white px-4 text-center md:text-left">2025 ©Todos los derechos reservados. Desarrollado por <a href="https://grobles.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-secondary">Grobles Studio.</a></p>
          <div className="flex items-center justify-center gap-4">
            <Facebook className="w-6 h-6 text-secondary cursor-pointer" />
            <Instagram className="w-6 h-6 text-secondary cursor-pointer" />
            <Twitter className="w-6 h-6 text-secondary cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
