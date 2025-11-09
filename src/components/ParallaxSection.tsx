
export default function ParallaxHome() {
  return (
    <section
      className="w-full flex flex-wrap justify-center gap-6 px-4 py-40 md:py-80 relative bg-scroll md:bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')"
      }}
    >
      <div className="inset-0 absolute bg-primary/50"></div>
    </section>

  )
}
