import Button from "@/components/Button";

const menu = [
  {
    title: "Carne de Res",
    price: "$22.99",
    description: "Carne de res a la parrilla con una salsa dulce de chile. ¡Perfecta para un almuerzo o cena casual!",
    image: "https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
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
  }
]

export default function MenuPreview() {
  return (
    <main className="bg-tertiary py-20">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-down" className="flex justify-between items-center flex-col md:flex-row gap-10">
          <div className="space-y-3">
            <p className="text-secondary text-center md:text-left">Nuestro Menú Especial</p>
            <h2 className="text-white text-3xl md:text-5xl font-semibold text-center">Disfrute de cada comida, cada momento</h2>
            <p className="text-white text-center md:text-left">Descubra nuestros servicios personalizados, diseñados para adaptarse al ritmo de su día.<br /> Desde desayunos energéticos hasta almuerzos satisfactorios y cenas elegantes.</p>
          </div>
          <div>
            <Button>
              Ver todo el menú
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 p-4 md:p-0" data-aos="fade-up" data-aos-delay="400">
          {
            menu.map((item, idx) => (
              <div className="space-y-3" key={idx}>
                <img src={item.image} alt={item.title} className="h-[500px] w-full object-cover" />
                <div className="flex justify-between items-center">
                  <p className="text-secondary text-xl font-semibold">{item.title}</p>
                  <span className="text-secondary">{item.price}</span>
                </div>
                <p className="text-white">{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
