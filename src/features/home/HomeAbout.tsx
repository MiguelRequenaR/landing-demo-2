import { useRef, useEffect, useState } from "react"
import Button from "@/components/Button"
import { Phone } from "lucide-react"

interface CounterProps {
  to: string | number
  suffix?: string
  duration?: number
  shouldAnimate: boolean
}

function Counter({ to, suffix = "", duration = 1500, shouldAnimate }: CounterProps) {
  const [count, setCount] = useState(0)
  const rafId = useRef<number>(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!shouldAnimate || hasAnimated.current) return

    let startTime: number | undefined

    let num: number
    if (typeof to === "string") {
      if (to.includes("k")) {
        num = parseFloat(to.replace("k", "")) * 1000
      } else if (to.includes("+")) {
        num = parseFloat(to.replace("+", ""))
      } else if (to.includes("%")) {
        num = parseFloat(to.replace("%", ""))
      } else {
        num = parseFloat(to)
      }
    } else {
      num = to
    }

    function animateCounter(ts: number) {
      if (!startTime) startTime = ts
      const progress = ts - startTime!
      let next
      if (progress < duration) {
        next = Math.round((num * progress) / duration)
        setCount(next)
        rafId.current = requestAnimationFrame(animateCounter)
      } else {
        setCount(num)
        hasAnimated.current = true
      }
    }
    rafId.current = requestAnimationFrame(animateCounter)
    return () => cancelAnimationFrame(rafId.current)
  }, [to, shouldAnimate, duration])

  let display: string | number = count
  if (typeof to === "string") {
    if (to.includes("k")) {
      display = (count / 1000).toFixed(0) + "k"
    } else if (to.includes("+")) {
      display = count.toString() + "+"
    } else if (to.includes("%")) {
      display = count.toString() + "%"
    } else {
      display = count
    }
  }
  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default function HomeAbout() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    )

    const currentRef = statsRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <main className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center md:justify-end" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
              alt="Interior elegante del restaurante"
              className="w-full max-w-lg h-[700px] object-cover rounded-t-full shadow-lg hidden md:block"
            />
          </div>
          <div className="flex flex-col justify-center gap-7" data-aos="fade-down" data-aos-delay="400">
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-bold mt-3 text-center md:text-left">
                Sabor refinado, sensación excepcional 
                <span className="text-secondary font-normal"> donde la elegancia se une al sabor</span>
              </h2>
            </div>
            <p className="text-white/90 text-base md:text-lg max-w-xl text-center md:text-left">
              Disfrute de la armonía entre el sabor refinado y la elegancia atemporal en cada momento.<br />
              Desde platos elaborados con maestría hasta un ambiente cálido y acogedor, combinamos sabor y sensación para crear una experiencia gastronómica que perdura después del último bocado.
            </p>
            <div className="space-y-1 my-2 text-center md:text-left">
              <span className="block text-secondary font-semibold text-base">Horario de Apertura</span>
              <p className="text-white text-sm">LUN - JUE: <span className="font-medium">10:00 AM - 10:00 PM</span></p>
              <p className="text-white text-sm">VIE - SAB: <span className="font-medium">10:00 AM - 11:00 PM</span></p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Button>
                Reserva una mesa
              </Button>
              <div className="flex items-center gap-2 bg-tertiary/80 rounded-lg px-3 py-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white font-medium">+51 987 654 321</span>
              </div>
            </div>
          </div>
        </div>
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-center md:text-left">
          <div>
            <h3 className="text-secondary text-6xl font-bold">
              <Counter to="800k" shouldAnimate={isVisible} />
            </h3>
            <span className="text-white">Platos servidos</span>
          </div>
          <div>
            <h3 className="text-secondary text-6xl font-bold">
              <Counter to="60+" shouldAnimate={isVisible} />
            </h3>
            <span className="text-white">Recetas exclusivas</span>
          </div>
          <div>
            <h3 className="text-secondary text-6xl font-bold">
              <Counter to="80%" shouldAnimate={isVisible} />
            </h3>
            <span className="text-white">Clientes habituales</span>
          </div>
          <div>
            <h3 className="text-secondary text-6xl font-bold">
              <Counter to="600+" shouldAnimate={isVisible} />
            </h3>
            <span className="text-white">Ocasiones especiales</span>
          </div>
        </div>
      </div>
    </main>
  )
}
