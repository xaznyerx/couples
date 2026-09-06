import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  SectionLabel,
  SectionTitle,
  Divider,
  BtnPrimary,
} from "@/components/ui-elements"

export const metadata: Metadata = {
  title: "Approach | Jessie Wang - Couples Therapist",
  description:
    "How Jessie Wang works with couples: EFT, Gottman Method, Systemic and Psychodynamic approaches. Evidence-based, culturally informed couples therapy.",
}

const faqs = [
  { q: "Will you take sides?", a: "No. My client is the relationship \u2014 not either individual. Both of you need to feel genuinely heard, not managed. I work hard to maintain active, real neutrality \u2014 not just a claim to it." },
  { q: "Do I have to explain my culture or identity?", a: "No. I work with intercultural and LGBTQ+ couples because I understand those dynamics from the inside, not just the literature. You won\u2019t spend session time educating me." },
  { q: "How long does therapy take?", a: "There\u2019s no fixed programme. Some couples need 8\u201310 sessions to address a specific issue. Others work with me for a year or more. We check in regularly on what\u2019s useful and when it makes sense to stop." },
  { q: "Do both partners need to come?", a: "For couples therapy, yes \u2014 both partners attend together. Occasionally I may suggest brief individual sessions as part of the work, but the core sessions are joint." },
  { q: "Is there homework?", a: "Sometimes. Depending on what we\u2019re working on, I may suggest things to try between sessions. Nothing arbitrary \u2014 always connected to the work." },
  { q: "What if we\u2019re considering separation?", a: "You don\u2019t need to have decided anything to start. Some couples come still invested; others are genuinely unsure. Both are valid starting points. Therapy can help with the decision as much as with the repair." },
]

const modalities = [
  { abbr: "EFT", full: "Emotionally Focused Therapy", what: "EFT works at the level of attachment \u2014 the deep emotional bond between partners, and the cycles of pursuit and withdrawal that form when that bond feels threatened. The goal is to shift how partners reach for each other.", why: "EFT has the strongest evidence base of any couples therapy model. Particularly powerful for intercultural couples, where the attachment cycle is often complicated by different cultural scripts for vulnerability." },
  { abbr: "GM", full: "Gottman Method", what: "Developed from 40 years of research, the Gottman Method provides concrete tools for managing conflict, building friendship and intimacy, and creating shared meaning. Particularly good at naming specific patterns couples can recognise in their own dynamic.", why: "Some couples need insight but also something more concrete. Gottman provides that. It also has specific research on same-sex couples, making it more applicable to LGBTQ+ partnerships than models developed on heterosexual samples only." },
  { abbr: "SFT", full: "Systemic & Family Systems", what: "Looks at the relationship not just between two individuals, but between those individuals and the larger systems around them \u2014 families of origin, cultures, communities, structural pressures. Asks: what is this pattern a response to?", why: "This is where intercultural and LGBTQ+ work particularly needs a systemic lens. A couple\u2019s conflict about money or family almost always has a cultural story inside it. Systemic work makes that visible without pathologising either partner." },
  { abbr: "PD", full: "Psychodynamic", what: "Looks at the deeper patterns \u2014 the relational templates formed in early life, the unconscious processes that play out between partners, the ways that past relationships shape present ones. Asks what each person is re-enacting.", why: "Some couples are stuck in patterns that have nothing to do with each other and everything to do with what they each brought into the relationship. For couples where early experience of loss or instability is clearly present, this lens is often essential." },
]

const sessionCards = [
  { label: "First contact", title: "Free 20-minute consultation", desc: "A call to hear what\u2019s brought you here, answer your questions, and see whether this feels like a good fit. No obligation, no assessment." },
  { label: "Sessions 1\u20132", title: "Assessment & orientation", desc: "Understanding your relationship\u2019s history, each person\u2019s perspective, and what you\u2019re both hoping for." },
  { label: "Ongoing work", title: "Pattern recognition & shift", desc: "Working with the live dynamic between you \u2014 what happens when it goes wrong, what\u2019s underneath it, and what needs to change." },
  { label: "Throughout", title: "Regular check-ins on progress", desc: "Every 6\u20138 sessions, we pause to review: what\u2019s changed, what\u2019s still stuck, whether the approach needs adjusting." },
  { label: "Ending", title: "On your terms", desc: "Therapy ends when it makes sense \u2014 not according to a programme. Your call." },
]

const notThis = [
  { title: "I won\u2019t referee", desc: "I\u2019m not here to decide who\u2019s right. If that\u2019s what you\u2019re looking for, this probably isn\u2019t the right fit. What I can do is help both of you understand why you\u2019re each so sure you\u2019re right." },
  { title: "I won\u2019t pretend culture doesn\u2019t matter", desc: "Some therapists treat cultural difference as neutral background. I don\u2019t. If how you were each taught to express love or handle conflict is part of what\u2019s creating friction \u2014 we\u2019re going to talk about it." },
  { title: "I won\u2019t use therapy as a performance space", desc: "Some couples use sessions to perform for the therapist. I\u2019ll gently redirect when that\u2019s happening, because the work happens when something real is being said." },
  { title: "I won\u2019t push you toward a particular outcome", desc: "Whether you stay together or separate is not something I have a view on. Both can be the right outcome. Therapy is for understanding \u2014 not for reaching a conclusion I\u2019ve already decided on." },
]

const practicals = [
  { title: "In-person, London", desc: "Sessions in person at my London consulting room.", detail: "Central London" },
  { title: "Online, UK-wide", desc: "Online sessions via Zoom. Research is clear that online couples therapy is effective \u2014 and it removes geography as a barrier.", detail: "Available across the UK" },
  { title: "Fees", desc: "£80 per hour. If cost is a barrier, please reach out — I offer a limited number of sliding scale places based on income.", detail: "Sliding scale available" },
]

export default function ApproachPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-36 pb-20 border-b border-border-color bg-dark relative overflow-hidden">
          <div className="absolute right-[-1rem] top-1/2 -translate-y-[55%] font-serif text-[clamp(10rem,20vw,22rem)] font-light text-clay/[0.07] tracking-tight whitespace-nowrap pointer-events-none leading-none hidden lg:block select-none">
            How
          </div>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-clay block mb-5">
                  My approach
                </span>
                <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-cream">
                  Therapy that goes
                  <br />
                  <em className="italic text-clay">
                    deep enough
                    <br />
                    to actually move.
                  </em>
                </h1>
              </div>
              <p className="text-base leading-relaxed text-cream/50 border-l-2 border-clay pl-6 font-light">
                A lot of couples have talked. What they haven&apos;t done is
                talk in a way that reaches the thing underneath the argument —
                the fear, the need, the unspoken story. That&apos;s what the
                work is for.
              </p>
            </div>
          </div>
        </section>

        {/* Big question + FAQ */}
        <section className="py-24">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="font-serif text-[2.5rem] font-light leading-tight mb-2">
                  The questions couples bring — and what I actually{" "}
                  <em className="italic text-clay">do with them</em>
                </h2>
                <Divider />
                <p className="text-base leading-relaxed text-muted-foreground font-light mb-5">
                  Most couples arrive with a presenting problem: &ldquo;we keep
                  having the same fight,&rdquo; &ldquo;we&apos;ve lost
                  intimacy,&rdquo; &ldquo;I don&apos;t know if I still love
                  them.&rdquo; These are real, and they matter. But{" "}
                  <strong className="text-ink font-medium">
                    the presenting problem is rarely the whole story.
                  </strong>
                </p>
                <p className="text-base leading-relaxed text-muted-foreground font-light">
                  What&apos;s underneath it — the patterns, the attachment
                  fears, the cultural framings of what love is supposed to look
                  like — is where the actual work lives. My job is to create a
                  space where both partners can begin to see that layer, and to
                  shift within it.
                </p>
              </div>
              <div>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`py-6 border-b border-border-color ${
                      i === 0 ? "border-t border-t-border-color" : ""
                    }`}
                  >
                    <p className="text-xs tracking-[0.08em] text-clay font-medium uppercase mb-2">
                      {faq.q}
                    </p>
                    <p className="text-[0.95rem] text-ink leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modalities */}
        <section className="py-24 bg-warm border-t border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <SectionLabel>The methods I use</SectionLabel>
            <SectionTitle>
              Evidence-based approaches,
              <br />
              <em className="italic text-clay">
                chosen for fit — not fashion
              </em>
            </SectionTitle>
            <div className="max-w-[620px] mb-16">
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                No single model works for every couple. I draw on several
                evidence-based frameworks, combining them based on what I&apos;m
                seeing in the room — the couple&apos;s attachment patterns,
                cultural context, the nature of the conflict, and what stage of
                the work we&apos;re in.
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              {modalities.map((m) => (
                <div
                  key={m.abbr}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] bg-border-color gap-px"
                >
                  <div className="bg-ink p-8 md:p-10 flex flex-col justify-between">
                    <div className="font-serif text-[2rem] font-light text-clay opacity-60 leading-none mb-2">
                      {m.abbr}
                    </div>
                    <div className="text-[0.72rem] tracking-[0.08em] text-cream/45 font-light uppercase leading-snug">
                      {m.full}
                    </div>
                  </div>
                  <div className="bg-cream p-8 md:p-10">
                    <h4 className="text-[0.68rem] tracking-[0.15em] uppercase text-clay mb-3">
                      What it does
                    </h4>
                    <p className="text-sm text-ink leading-relaxed font-light">
                      {m.what}
                    </p>
                  </div>
                  <div className="bg-warm p-8 md:p-10">
                    <h4 className="text-[0.68rem] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                      Why I use it
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light italic">
                      {m.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sessions */}
        <section className="py-24">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <SectionLabel>In the room</SectionLabel>
                <h2 className="font-serif text-[2.2rem] font-light leading-tight mb-2">
                  What a session{" "}
                  <em className="italic text-clay">actually looks like</em>
                </h2>
                <Divider />
                <p className="text-base text-muted-foreground leading-relaxed font-light mb-5">
                  I don&apos;t run sessions off a script. But there&apos;s a
                  structure to how I work, and it&apos;s worth knowing what to
                  expect — especially if you&apos;ve never been to couples
                  therapy before.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed font-light mb-5">
                  Sessions are{" "}
                  <strong className="text-ink font-medium">60 minutes</strong>{" "}
                  for an initial assessment and{" "}
                  <strong className="text-ink font-medium">50 minutes</strong>{" "}
                  for ongoing work. Both partners are in the room throughout. I
                  tend to work with what&apos;s live — what&apos;s happening
                  between you in the session, not just what you report from the
                  week.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  I work in-person in London and online. Both are effective —
                  the research on online couples therapy is genuinely positive.
                </p>
              </div>
              <div className="flex flex-col gap-px bg-border-color border border-border-color">
                {sessionCards.map((s) => (
                  <div
                    key={s.label}
                    className="bg-cream py-7 px-8 transition-colors hover:bg-warm"
                  >
                    <span className="text-[0.66rem] tracking-[0.14em] uppercase text-clay mb-1.5 block">
                      {s.label}
                    </span>
                    <h4 className="font-serif text-lg font-normal mb-1.5">
                      {s.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Not this */}
        <section className="py-24 bg-dark">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <SectionLabel>What this isn&apos;t</SectionLabel>
            <SectionTitle className="text-cream mb-12">
              Worth being honest about
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-white/5 border border-white/5">
              {notThis.map((n) => (
                <div key={n.title} className="p-10 bg-dark">
                  <div className="text-base text-clay mb-4 opacity-50">
                    &#10005;
                  </div>
                  <h3 className="font-serif text-lg font-normal text-cream/80 mb-2">
                    {n.title}
                  </h3>
                  <p className="text-sm text-cream/40 leading-relaxed font-light">
                    {n.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical details */}
        <section className="py-24 bg-warm border-t border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <SectionLabel>Practical details</SectionLabel>
            <SectionTitle>The logistics</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-border-color border border-border-color">
              {practicals.map((p) => (
                <div key={p.title} className="bg-cream p-10">
                  <h3 className="font-serif text-xl font-normal mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {p.desc}
                  </p>
                  <p className="text-xs text-clay mt-3 font-normal">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-8">
              <h3 className="font-serif text-[2rem] font-light text-center md:text-left">
                Want to talk through whether
                <br />
                this is the right{" "}
                <em className="italic text-clay">fit for you?</em>
              </h3>
              <BtnPrimary href="mailto:hello@jessie-wang.uk">
                Book a free 20-min call
              </BtnPrimary>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
