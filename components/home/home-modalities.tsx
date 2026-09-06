import Link from "next/link"
import { SectionLabel, SectionTitle, BtnSecondary } from "@/components/ui-elements"

const modalities = [
  {
    tag: "EFT",
    title: "Emotionally Focused Therapy",
    desc: "Works at the level of attachment \u2014 the emotional bond between partners, and the cycles of pursuit and withdrawal that form when that bond feels threatened. The strongest evidence base of any couples model.",
  },
  {
    tag: "Gottman Method",
    title: "Gottman Method",
    desc: "Research-based tools for building friendship, managing conflict, and creating shared meaning \u2014 developed from 40 years of research on what makes relationships succeed or fail.",
  },
  {
    tag: "Systemic",
    title: "Systemic & Psychodynamic",
    desc: "Looks at the wider systems \u2014 families, cultures, histories \u2014 that both partners bring into the room. Essential for intercultural couples, where context is never just background.",
  },
]

export default function HomeModalities() {
  return (
    <section className="py-28 border-t border-border-color">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <SectionLabel>How I work</SectionLabel>
        <SectionTitle>
          Evidence-based approaches,
          <br />
          <em className="italic text-clay">
            chosen for fit — not fashion
          </em>
        </SectionTitle>
        <div className="max-w-[600px] mb-16">
          <p className="text-base text-muted-foreground leading-relaxed font-light">
            No single model works for every couple. I draw on several
            evidence-based frameworks, combining them based on what the
            relationship needs — not what fits a template.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modalities.map((m) => (
            <div
              key={m.tag}
              className="bg-warm border border-border-color p-8 transition-all hover:border-clay hover:-translate-y-0.5"
            >
              <span className="inline-block text-[0.64rem] tracking-[0.12em] uppercase text-clay bg-clay-light px-2.5 py-1 rounded-full mb-3">
                {m.tag}
              </span>
              <h3 className="font-serif text-xl font-normal mb-2.5">
                {m.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <BtnSecondary href="/approach">
            {"See the full approach \u2192"}
          </BtnSecondary>
        </div>
      </div>
    </section>
  )
}
