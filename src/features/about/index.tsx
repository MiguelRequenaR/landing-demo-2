import HeroAbout from "./HeroAbout"
import ServiceSection from "@/components/ServiceSection"
import HistoryAbout from "./HistoryAbout"
import TestimonySection from "@/components/TestimonySection"
import ParallaxSection from "@/components/ParallaxSection"
import TeamAbout from "./TeamAbout"
import FormAbout from "./FormAbout"

export default function index() {
  return (
    <main>
      <HeroAbout />
      <ServiceSection />
      <HistoryAbout />
      <TestimonySection />
      <ParallaxSection />
      <TeamAbout />
      <FormAbout />
    </main>
  )
}
