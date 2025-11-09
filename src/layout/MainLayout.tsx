import { Outlet } from "react-router-dom"
import NavBar from "@/components/NavBar"
import Fotter from "@/components/Fotter"
import CTA from "@/components/CTA"

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <CTA />
      <Fotter />
    </div>
  )
}
