import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Button from "./Button"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Blog", path: "/blog" },
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="bg-primary fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4 md:px-0">
        <div>
          <Link to="/">
            <img src="/logoFoodie.svg" alt="logo" />
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="text-white flex gap-4 font-semibold">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    transition-colors duration-500 cursor-pointer 
                    hover:text-secondary 
                    ${isActive ? 'text-secondary' : ''}
                  `
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link to="/menu">
            <Button>
              Ver menú
            </Button>
          </Link>
        </div>
        <button
          className="md:hidden flex items-center justify-center text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      <div
        className={`
          fixed top-0 right-0 w-full h-full bg-primary z-40 flex flex-col transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex justify-between items-center p-5">
          <img src="/logoFoodie.svg" alt="logo" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 text-white text-2xl font-semibold">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    cursor-pointer transition-colors duration-300
                    hover:text-secondary 
                    ${isActive ? 'text-secondary' : ''}
                  `
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center pb-8">
          <Link to="/menu">
            <button
              className="relative overflow-hidden bg-secondary px-8 py-3 uppercase cursor-pointer border border-secondary group transition-colors duration-500 hover:text-white text-base"
              onClick={() => setMenuOpen(false)}
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
                Ver menú
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
