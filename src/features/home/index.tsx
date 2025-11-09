import HeroHome from "./HeroHome"
import HomeService from "./HomeService"
import MenuPreview from "./MenuPreview"
import HomeAbout from "./HomeAbout"
import ParallaxHome from "./ParallaxHome"
import TestimonyHome from "./TestimonyHome"
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
