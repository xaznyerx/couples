import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BtnPrimary } from "@/components/ui-elements"
import SpecializationAccordion from "@/components/specialization-accordion"

export const metadata: Metadata = {
  title: "Specializations | Jessie Wang - Couples Therapist",
  description:
    "Intercultural, interracial and LGBTQ+ affirming couples therapy. Specialist areas Jessie Wang works with in London and online.",
}

export default function SpecializationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-36 pb-20 border-b border-border-color relative overflow-hidden">
          <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-serif text-[clamp(8rem,16vw,18rem)] font-light text-clay/[0.06] tracking-tight whitespace-nowrap pointer-events-none leading-none hidden lg:block select-none">
            Focus
          </div>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-clay block mb-5">
              Specializations
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-ink max-w-[700px]">
              Where I do my{" "}
              <em className="italic text-clay">deepest work</em>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground font-light mt-6 max-w-[600px]">
              Select a specialization below to explore the specific issues and
              dynamics I work with in that area.
            </p>
          </div>
        </section>

        {/* Interactive accordion */}
        <SpecializationAccordion />

        {/* Research bar */}
        <div className="py-12 px-6 lg:px-16 bg-clay-light border-t border-b border-clay/20">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-sm text-ink leading-relaxed font-light">
              <strong className="font-medium">What the research says:</strong>{" "}
              A 2024 scoping review found that despite the growing prevalence
              of intercultural relationships, there remains a significant
              paucity of empirical evidence on how cultural differences should
              be addressed in therapy — and a particular gap around the
              intersection of intercultural and LGBTQ+ identities.
            </p>
            <cite className="block text-xs text-muted-foreground mt-2 italic">
              Yurtaeva &amp; Charura, Journal of Social and Personal
              Relationships, 2024 &middot; Su, Personal Relationships, 2023
            </cite>
          </div>
        </div>

        {/* Worth being clear */}
        <section className="py-24 border-t border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
              <div>
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-clay block mb-3">
                  Worth being clear
                </span>
                <h2 className="font-serif text-[2rem] font-light leading-tight">
                  Who this is{" "}
                  <em className="italic text-clay">and isn&apos;t</em> for
                </h2>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mt-4">
                  Specializing in intercultural and LGBTQ+ work doesn&apos;t
                  mean I only work with couples who fit those categories. It
                  means I&apos;m equipped to hold that complexity when
                  it&apos;s present, without making clients educate me first.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="p-6 border border-border-color bg-warm">
                  <h4 className="text-sm font-medium text-ink mb-1.5">
                    This isn&apos;t identity-focused therapy for every session
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    Many sessions are about communication, trust, intimacy — the
                    same things any couple works on. The specialization means I
                    understand the context. It doesn&apos;t mean every
                    conversation is about race or sexuality.
                  </p>
                </div>
                <div className="p-6 border border-border-color bg-warm">
                  <h4 className="text-sm font-medium text-ink mb-1.5">
                    You don&apos;t have to be in &ldquo;crisis&rdquo;
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    Some couples I work with are in real distress. Others are
                    doing reasonably well and want to go deeper — to build
                    something more intentional before difficulty arrives. Both
                    are valid reasons to start.
                  </p>
                </div>
                <div className="p-6 border border-border-color bg-warm">
                  <h4 className="text-sm font-medium text-ink mb-1.5">
                    I also work with couples outside these categories
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    If you&apos;re drawn to the approach — the depth, the
                    cultural attentiveness, the willingness to go underneath the
                    presenting problem — that&apos;s worth a conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-8">
              <h3 className="font-serif text-[2rem] font-light text-center md:text-left">
                Does this sound like
                <br />
                what you&apos;ve been{" "}
                <em className="italic text-clay">looking for?</em>
              </h3>
              <BtnPrimary href="mailto:hello@jessie-wang.uk">
                Book a free 20-min consultation
              </BtnPrimary>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
