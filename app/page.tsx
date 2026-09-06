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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jessie-wang.uk/#person",
        name: "Jessie Wang",
        jobTitle: "Couples Therapist",
        description:
          "BACP-registered couples therapist specialising in intercultural, interracial, and LGBTQ+ affirming relationships.",
        knowsAbout: [
          "Intercultural couples therapy",
          "Interracial couples therapy",
          "LGBTQ+ affirming couples therapy",
          "Emotionally Focused Therapy",
          "Gottman Method",
          "Systemic and family systems",
          "Psychodynamic and integrative therapy",
        ],
        areaServed: ["London", "Online therapy"],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://jessie-wang.uk/#professional-service",
        name: "Jessie Wang Couples Therapy",
        url: "https://jessie-wang.uk",
        email: "hello@jessie-wang.uk",
        description:
          "Couples therapy for intercultural, interracial, and LGBTQ+ relationships in London and online.",
        areaServed: "London",
        serviceType: "Couples therapy",
        provider: { "@id": "https://jessie-wang.uk/#person" },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
