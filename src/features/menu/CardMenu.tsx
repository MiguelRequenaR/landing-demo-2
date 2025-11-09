import { Link } from "react-router-dom"

const menu = [
  {
    title: "Carne de Res",
    price: "$22.99",
    description: "Carne de res a la parrilla con una salsa dulce de chile. ¡Perfecta para un almuerzo o cena casual!",
    image: "https://images.unsplash.com/photo-1632898658005-af95f6fa589c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=836",
  },
  {
    title: "Brochetas",
    price: "$18.99",
    description: "Deliciosas brochetas de res rociadas con una salsa dulce de chile. ¡Perfectas para asar y compartir!",
    image: "https://images.unsplash.com/photo-1550367363-ea12860cc124?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
  },
  {
    title: "Snacks",
    price: "$12.00",
    description: "Snacks salados y dulces para satisfacer cualquier antojo. ¡Perfecto para un almuerzo o cena casual!",
    image: "https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  },
  {
    title: "Postres",
    price: "$8.99",
    description: "Postres dulces y salados para satisfacer cualquier antojo. ¡Perfecto para un almuerzo o cena casual!",
    image: "https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  },
  {
    title: "Bebidas",
    price: "$5.99",
    description: "Bebidas refrescantes y calientes para satisfacer cualquier antojo. ¡Perfecto para un almuerzo o cena casual!",
    image: "https://images.unsplash.com/photo-1626203049137-2f90726e5bff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  },
  {
    title: "Cocteles",
    price: "$10.99",
    description: "Cocteles refrescantes y calientes para satisfacer cualquier antojo. ¡Perfecto para un almuerzo o cena casual!",
    image: "https://images.unsplash.com/photo-1633152685816-8cd4a7443c84?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  },
]

export default function CardMenu() {
  return (
    <main className="bg-primary py-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-5xl font-semibold text-secondary">Menu</h2>
          <p className="text-white">Descubre nuestros platos más deliciosos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20" data-aos="fade-up" data-aos-delay="400">
          {menu.map((item, idx) => (
            <div className="space-y-2 group cursor-pointer" key={idx}>
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <Link to="/contacto">
                    <div className="bg-tertiary border border-secondary text-white px-5 py-2 text-sm uppercase font-semibold pointer-events-auto">
                      Reservar mesa
                    </div>
                  </Link>
                </div>
              </div>
              <div className="text-secondary flex justify-between">
                <h3 className="text-3xl font-semibold">{item.title}</h3>
                <span className="text-xl">{item.price}</span>
              </div>
              <p className="text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
