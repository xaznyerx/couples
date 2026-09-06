import Image from "next/image"
import Link from "next/link"
import { BtnPrimary, BtnSecondary } from "@/components/ui-elements"

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[4.5rem]">
      <div className="flex flex-col justify-center px-6 lg:px-16 xl:pl-24 py-16 lg:py-20 relative">
        <div className="hidden lg:block absolute top-[15%] right-0 bottom-[15%] w-px bg-border-color" />
        <span className="text-[0.7rem] tracking-[0.18em] uppercase text-clay mb-6 block animate-[fadeUp_0.6s_ease_0.1s_both]">
          Couples Therapist &middot; London &amp; Online &middot; BACP
          Registered
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.15] text-ink mb-7 animate-[fadeUp_0.6s_ease_0.25s_both]">
          Your relationship
          <br />
          deserves someone who
          <br />
          <em className="italic text-clay">truly understands</em>
          <br />
          complexity.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-[460px] mb-10 font-light animate-[fadeUp_0.6s_ease_0.4s_both]">
          Some relationships carry more layers — different cultures, different
          histories, different worlds brought together. I work with couples
          navigating that complexity, helping them rebuild, repair, and
          reconnect.
        </p>
        <div className="flex flex-wrap items-center gap-5 mb-10 animate-[fadeUp_0.6s_ease_0.55s_both]">
          <BtnPrimary href="#contact">Book a free consultation</BtnPrimary>
          <BtnSecondary href="/about">About Jessie</BtnSecondary>
        </div>
        <div className="flex flex-wrap gap-3 animate-[fadeUp_0.6s_ease_0.7s_both]">
          {[
            "BACP Registered",
            "EFT Trained",
            "Gottman Method",
            "Intercultural Specialist",
            "LGBTQ+ Affirming",
          ].map((badge) => (
            <span
              key={badge}
              className="text-[0.67rem] tracking-[0.1em] uppercase text-muted-foreground border border-border-color px-3.5 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden animate-[fadeIn_1s_ease_0.2s_both]">
        <Image
          src="/images/jessie-portrait.jpg"
          alt="Jessie Wang, couples therapist"
          fill
          className="object-cover object-[center_top] min-h-[50vh] lg:min-h-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/[0.06] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
        <span className="absolute bottom-6 right-6 text-[0.6rem] tracking-[0.1em] uppercase text-cream/30">
          Photo: Weston Carls
        </span>
      </div>
    </section>
  )
}
