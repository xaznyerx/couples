import { SectionLabel, SectionTitle } from "@/components/ui-elements"

const items = [
  {
    num: "01",
    title: "You love each other, but feel worlds apart",
    desc: "Different cultural backgrounds, different families, different expectations about how love is supposed to work. The gap feels real \u2014 and exhausting.",
  },
  {
    num: "02",
    title: "You need a therapist who won\u2019t make you explain yourselves",
    desc: "You\u2019re tired of educating the room about your identity, your culture, or your relationship structure. You want someone who just gets it.",
  },
  {
    num: "03",
    title: "Something has broken trust",
    desc: "An affair, a betrayal, a slow erosion. You\u2019re not sure what you want \u2014 to stay, to leave, or just to understand what happened.",
  },
  {
    num: "04",
    title: "You\u2019re not in crisis \u2014 you just want to do better",
    desc: "The relationship is good, but you sense it could be more. Deeper. More honest. You\u2019re investing before things break down.",
  },
]

export default function ForYou() {
  return (
    <section className="bg-ink py-28">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <SectionLabel>Who I work with</SectionLabel>
        <SectionTitle className="text-cream">
          You might be here because&hellip;
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/[0.08] mt-14">
          {items.map((item, i) => (
            <div
              key={item.num}
              className={`p-10 transition-colors hover:bg-white/[0.03] ${
                i % 2 === 0 ? "border-r border-r-white/[0.08]" : ""
              } ${i < 2 ? "border-b border-b-white/[0.08]" : ""}`}
            >
              <div className="font-serif text-[2.5rem] font-light text-clay opacity-35 leading-none mb-4">
                {item.num}
              </div>
              <h3 className="font-serif text-xl font-normal text-cream mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-cream/50 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
