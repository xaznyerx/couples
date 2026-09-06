import { SectionLabel, SectionTitle } from "@/components/ui-elements"

const steps = [
  {
    num: "01",
    title: "Free consultation",
    desc: "A 20-minute call to understand what\u2019s brought you here, answer questions, and see whether we\u2019re a good fit \u2014 no obligation.",
  },
  {
    num: "02",
    title: "First session",
    desc: "Understanding your relationship\u2019s history, what each of you is hoping for, and what patterns you most want to shift.",
  },
  {
    num: "03",
    title: "Ongoing work",
    desc: "Weekly or fortnightly sessions, in-person in London or online. We work at your pace, with regular check-ins on progress.",
  },
  {
    num: "04",
    title: "Your terms",
    desc: "Therapy ends when it makes sense \u2014 not on a fixed programme. Some couples come for 8 sessions; others for a year. It\u2019s your call.",
  },
]

export default function Process() {
  return (
    <section className="py-28 bg-warm border-t border-border-color">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <SectionLabel>Getting started</SectionLabel>
        <SectionTitle>
          What to <em className="italic text-clay">expect</em>
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border-color mt-14">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`p-10 ${
                i < steps.length - 1
                  ? "border-r border-r-border-color"
                  : ""
              }`}
            >
              <div className="font-serif text-5xl font-light text-clay opacity-30 leading-none mb-4">
                {step.num}
              </div>
              <h3 className="font-serif text-lg font-normal mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
