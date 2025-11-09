
export default function TeamAbout() {
  return (
    <main className="bg-primary py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-down">
          <span className="text-secondary">Nuestros Chefs</span>
          <h2 className="text-4xl font-bold text-white">Listos para deleitarte</h2>
          <p className="text-white">
            Nuestros chefs están listos para deleitarte con sus platos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-20">
          <div className="text-center space-y-5 items-center justify-center flex flex-col relative" data-aos="fade-up">
            <img 
              src="https://images.unsplash.com/photo-1735357979803-ea4f7814da49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" 
              alt="chefImage" 
              className="w-[300px] h-[400px] object-cover rounded-t-full" />
            <div className="bg-tertiary px-10 py-5 border border-secondary absolute -bottom-5">
              <div className="flex flex-row items-center justify-center gap-1">
                <hr className="border-secondary w-10" />
                <p className="text-white">Chef Principal</p>
                <hr className="border-secondary w-10" />
              </div>
              <h3 className="text-3xl font-bold text-secondary">Miguel Angel</h3>
            </div>
          </div>
          <div className="text-center space-y-5 items-center justify-center flex flex-col relative" data-aos="fade-up" data-aos-delay="100">
            <img 
              src="https://images.unsplash.com/photo-1735357979803-ea4f7814da49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" 
              alt="chefImage" 
              className="w-[300px] h-[400px] object-cover rounded-t-full" />
            <div className="bg-tertiary px-10 py-5 border border-secondary absolute -bottom-5">
              <div className="flex flex-row items-center justify-center gap-1">
                <hr className="border-secondary w-10" />
                <p className="text-white">Chef Asistente</p>
                <hr className="border-secondary w-10" />
              </div>
              <h3 className="text-3xl font-bold text-secondary">Juan Pablo</h3>
            </div>
          </div>
          <div className="text-center space-y-5 items-center justify-center flex flex-col relative" data-aos="fade-up" data-aos-delay="200">
            <img 
              src="https://images.unsplash.com/photo-1735357979803-ea4f7814da49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" 
              alt="chefImage" 
              className="w-[300px] h-[400px] object-cover rounded-t-full" />
            <div className="bg-tertiary px-10 py-5 border border-secondary absolute -bottom-5">
              <div className="flex flex-row items-center justify-center gap-1">
                <hr className="border-secondary w-10" />
                <p className="text-white">Chef de Cocina</p>
                <hr className="border-secondary w-10" />
              </div>
              <h3 className="text-3xl font-bold text-secondary">Juan Carlos</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
