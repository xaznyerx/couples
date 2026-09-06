import { SectionLabel, SectionTitle } from "@/components/ui-elements"

const testimonials = [
  { text: "[ Add your first testimonial here ]", author: "Couple, London" },
  { text: "[ Second testimonial ]", author: "Couple, Online" },
  { text: "[ Third testimonial ]", author: "Couple, London" },
]

export default function Testimonials() {
  return (
    <section className="bg-dark py-28">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <SectionLabel>Client voices</SectionLabel>
        <SectionTitle className="text-cream mb-12">
          In their <em className="italic text-clay">words</em>
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-white/[0.08] p-10 relative transition-colors hover:border-clay/30"
            >
              <span className="font-serif text-[5rem] text-clay opacity-25 absolute top-2 left-7 leading-none">
                {"\u201C"}
              </span>
              <p className="font-serif text-base italic text-cream/75 leading-relaxed mb-6 pt-6">
                {t.text}
              </p>
              <span className="text-[0.72rem] tracking-[0.1em] uppercase text-clay">
                — {t.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
