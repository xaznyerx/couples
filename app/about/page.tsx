import type { Metadata } from "next"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  SectionLabel,
  SectionTitle,
  Divider,
  BtnPrimary,
} from "@/components/ui-elements"

export const metadata: Metadata = {
  title: "About | Jessie Wang - Couples Therapist",
  description:
    "Learn about Jessie Wang\u2019s background, lived experience across cultures, and approach to intercultural and LGBTQ+ couples therapy in London.",
}

const principles = [
  { num: "01", title: "Context is not optional", desc: "You cannot understand a relationship without understanding the worlds that formed each person in it. Culture, history, family systems, and social pressures are not background detail \u2014 they\u2019re structure." },
  { num: "02", title: "Difference is not damage", desc: "Being different from your partner is not a problem to fix. It\u2019s a reality to work with \u2014 and when worked with well, it can be a source of extraordinary depth and connection." },
  { num: "03", title: "Both people are always in the room", desc: "I don\u2019t take sides. My client is the relationship \u2014 and both people deserve to feel heard, understood, and not managed. That requires active, genuine neutrality." },
  { num: "04", title: "Insight without change is just biography", desc: "Understanding why a pattern exists matters. But the goal is something shifting \u2014 in how you reach for each other, how you repair, how you build something neither of you has had before." },
  { num: "05", title: "Lived experience matters in the therapist too", desc: "I bring my own navigation of cultural complexity into the room \u2014 not as oversharing, but as genuine understanding. Clients shouldn\u2019t have to explain what it means to be between worlds." },
  { num: "06", title: "The relationship is worth the work", desc: "People come to therapy when they still believe something is possible. That belief \u2014 even when fragile \u2014 is always somewhere in the room. My job is to help them find it again." },
]

const qualifications = [
  { cat: "Registration", detail: "BACP Registered Member", sub: "British Association for Counselling and Psychotherapy — the UK's professional body for therapists." },
  { cat: "EFT", detail: "Emotionally Focused Therapy", sub: "Evidence-based approach focused on attachment and emotional bonds between partners." },
  { cat: "Gottman", detail: "Gottman Method", sub: "Research-based framework for building friendship, managing conflict, and creating shared meaning." },
  { cat: "Additional", detail: "Systemic & Family Systems · Psychodynamic · Integrative frameworks", sub: "" },
  { cat: "Supervision", detail: "In regular clinical supervision", sub: "In line with BACP professional standards." },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero - clean split layout */}
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[4.5rem]">
          <div className="flex flex-col justify-center px-6 lg:px-16 xl:pl-24 py-16 lg:py-20">
            <span className="text-[0.7rem] tracking-[0.18em] uppercase text-clay mb-6 block">
              About Jessie
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,4.5vw,4.2rem)] font-light leading-[1.12] text-ink mb-8">
              {"I know what it\u2019s like"}
              <br />
              to live{" "}
              <em className="italic text-clay">
                between
                <br />
                worlds.
              </em>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[460px] mb-10 font-light">
              I didn&apos;t come to this work from a textbook. I came to it from
              a life shaped by migration, cultural complexity, and the experience
              of loving someone whose inner world was formed by an entirely
              different set of rules than mine.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "BACP Registered Member",
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
          <div className="relative overflow-hidden min-h-[50vh] lg:min-h-screen">
            <Image
              src="/images/jessie-portrait.jpg"
              alt="Jessie Wang, couples therapist"
              fill
              className="object-cover object-[center_top]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/15 to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">
              <div className="lg:sticky lg:top-28">
                <div className="bg-warm border border-border-color aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/jessie-candid.jpg"
                    alt="Jessie Wang"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
                <p className="mt-5 font-serif text-[0.95rem] italic text-muted-foreground leading-relaxed">
                  Jessie Wang &middot; Couples Therapist &middot; London &amp;
                  Online
                </p>
                <div className="mt-6 border-t border-border-color pt-6 flex flex-col gap-2.5">
                  {[
                    "BACP Registered Member",
                    "EFT Trained",
                    "Gottman Method",
                    "London & Online",
                  ].map((cred) => (
                    <div
                      key={cred}
                      className="flex items-center gap-3 text-sm text-ink font-light"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                      {cred}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-serif text-[2rem] font-light leading-tight mb-2">
                  My parents left everything they knew.{" "}
                  <em className="italic text-clay">
                    I grew up in the space that created.
                  </em>
                </h2>
                <Divider />
                <p className="text-base leading-relaxed text-ink font-light mb-6">
                  My parents immigrated across countries — and I grew up between
                  the world they came from and the world I was born into. That
                  gap, the one between where you&apos;re from and where you are,
                  between what your family taught you love looks like and what
                  your partner expects it to mean — is something I have
                  navigated my entire life.
                </p>
                <p className="text-base leading-relaxed text-ink font-light mb-6">
                  I&apos;ve lived in the United States, China, Sweden, and the
                  United Kingdom, with significant time in Italy, Hong Kong, and
                  Ghana. Each place taught me something different about what
                  relationships are supposed to look like — what&apos;s said,
                  what&apos;s silenced, what counts as intimacy, what counts as
                  respect. I learned that{" "}
                  <strong className="font-medium">
                    none of those things are universal
                  </strong>
                  , even when they feel like they are.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="bg-ink py-20">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-[auto_1fr] gap-12 items-center">
              <div className="font-serif text-[10rem] font-light text-clay opacity-30 leading-[0.7] pt-4 hidden md:block select-none">
                {"\u201C"}
              </div>
              <div>
                <p className="font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] italic font-light leading-snug text-cream">
                  Cultural difference isn&apos;t the problem in a relationship.
                  It&apos;s the terrain. The work is learning to navigate it
                  together — and finding that the navigating itself can be one of
                  the most connecting things two people do.
                </p>
                <p className="mt-6 text-[0.78rem] tracking-[0.12em] uppercase text-clay">
                  — Jessie Wang
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-dark">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <SectionLabel>What I believe</SectionLabel>
            <SectionTitle className="text-cream mb-12">
              The principles that
              <br />
              <em className="italic text-clay">guide this work</em>
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {principles.map((p, i) => (
                <div
                  key={p.num}
                  className={`p-10 ${
                    (i + 1) % 3 !== 0
                      ? "border-r border-r-white/[0.08]"
                      : ""
                  } ${i < 3 ? "border-b border-b-white/[0.08]" : ""}`}
                >
                  <div className="font-serif text-5xl font-light text-clay opacity-25 leading-none mb-4">
                    {p.num}
                  </div>
                  <h3 className="font-serif text-xl font-normal text-cream mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-cream/50 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-24 bg-warm border-t border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-start">
              <div>
                <SectionLabel>Training &amp; credentials</SectionLabel>
                <h2 className="font-serif text-[2.2rem] font-light leading-tight mb-4">
                  Grounded in{" "}
                  <em className="italic text-clay">
                    evidence,
                    <br />
                    not just instinct
                  </em>
                </h2>
                <p className="text-[0.95rem] text-muted-foreground font-light leading-relaxed mt-5">
                  Good therapy requires more than good intentions. My training
                  spans several evidence-based approaches, each chosen because
                  they work — and because they speak to the particular
                  complexity of the couples I work with.
                </p>
              </div>
              <div>
                {qualifications.map((q, i) => (
                  <div
                    key={q.cat}
                    className={`grid grid-cols-[1fr_2fr] py-5 border-b border-border-color gap-8 items-start ${
                      i === 0 ? "border-t border-t-border-color" : ""
                    }`}
                  >
                    <span className="text-[0.72rem] tracking-[0.12em] uppercase text-muted-foreground pt-0.5">
                      {q.cat}
                    </span>
                    <div className="text-[0.95rem] font-light text-ink leading-relaxed">
                      <strong className="font-medium block">{q.detail}</strong>
                      {q.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-8">
              <h3 className="font-serif text-[2rem] font-light text-center md:text-left">
                Ready to take the{" "}
                <em className="italic text-clay">first step together?</em>
              </h3>
              <BtnPrimary href="mailto:hello@jessiewang.co.uk">
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
