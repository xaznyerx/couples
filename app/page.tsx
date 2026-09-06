import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/home/hero"
import ForYou from "@/components/home/for-you"
import HomeAbout from "@/components/home/home-about"
import HomeModalities from "@/components/home/home-modalities"
import HomeSpecialisms from "@/components/home/home-specialisms"
import Process from "@/components/home/process"
import ContactCta from "@/components/home/contact-cta"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ForYou />
        <HomeAbout />
        <HomeModalities />
        <HomeSpecialisms />
        <Process />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
