import { ChevronDown } from 'lucide-react'

export default function Form() {
  return (
    <form className="mt-12 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white mb-2">
            Nombres<span className="text-secondary ml-1">*</span>
          </label>
          <input
            type="text"
            className="w-full bg-tertiary border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
            placeholder="First Name"
          />
        </div>

        <div>
          <label className="block text-white mb-2">
            Apellidos<span className="text-secondary ml-1">*</span>
          </label>
          <input
            type="text"
            className="w-full bg-tertiary border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
            placeholder="Last Name"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white mb-2">
            Email<span className="text-secondary ml-1">*</span>
          </label>
          <input
            type="email"
            className="w-full bg-tertiary border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-white mb-2">
            Teléfono<span className="text-secondary ml-1">*</span>
          </label>
          <input
            type="tel"
            className="w-full bg-tertiary border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
            placeholder="Teléfono"
          />
        </div>

        <div>
          <label className="block text-white mb-2">
            Hora<span className="text-secondary ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="time"
              defaultValue="12:00"
              className="w-full bg-tertiary border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors appearance-none"
              placeholder="Hora"
            />
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">
            Fecha<span className="text-secondary ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              defaultValue="2025-11-08"
              className="w-full bg-tertiary border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors appearance-none scheme-dark"
              placeholder="Fecha"
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">
            Personas<span className="text-secondary ml-1">*</span>
          </label>
          <input
            type="number"
            defaultValue="4"
            min="1"
            className="w-full bg-tertiary border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
            placeholder="Personas"
          />
        </div>
        <div className="col-span-full pt-5">
          <button
            className="w-full relative overflow-hidden bg-secondary px-5 py-2 uppercase cursor-pointer border border-secondary group transition-colors duration-500 hover:text-white"
          >
            <span
              className="
                  absolute inset-0 
                  bg-primary
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out pointer-events-none
                "
            />
            <span
              className="relative z-10 transition-colors duration-500"
            >
              Reservar una mesa
            </span>
          </button>
        </div>
      </div>
    </form>
  )
}
