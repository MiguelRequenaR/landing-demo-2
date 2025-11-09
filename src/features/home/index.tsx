import HeroHome from "./HeroHome"
import HomeService from "../../components/ServiceSection"
import MenuPreview from "./MenuPreview"
import HomeAbout from "./HomeAbout"
import ParallaxHome from "../../components/ParallaxSection"
import TestimonyHome from "../../components/TestimonySection"
import FormReservation from "./FormReservation"

export default function index() {
  return (
    <main>
      <HeroHome />
      <HomeService />
      <MenuPreview />
      <HomeAbout />
      <ParallaxHome />
      <TestimonyHome />
      <FormReservation />
    </main>
  )
}
