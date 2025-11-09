import Form from '../../components/Form'

export default function FormReservation() {
  return (
    <main className="bg-tertiary py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-down">
          <span className="text-secondary">Reserva una mesa</span>
          <h2 className="text-white text-4xl font-semibold">Haz tu reserva</h2>
          <p className="text-white">Reserva tu lugar, donde te espera una experiencia inolvidable.</p>
        </div>
        <div className='pb-20 p-4 md:p-0' data-aos="fade-up" data-aos-delay="400">
          <Form />
        </div>
      </div>
    </main>
  )
}
