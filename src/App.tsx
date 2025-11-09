import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import Home from "@/features/home/index"
import About from "@/features/about/index"
import Blog from "@/features/blog/index"
import BlogDetail from "@/features/blog/BlogDetail"
import Contact from "@/features/contact/index"
import Menu from "@/features/menu/index"
import ScrollToTop from "@/utils/ScrollToTop"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    })
  })

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
