import { SectionLabel, SectionTitle, BtnPrimary } from "@/components/ui-elements"

export default function ContactCta() {
  return (
    <section id="contact" className="py-36 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(196,133,106,0.07)_0%,transparent_65%)] pointer-events-none" />
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16 relative">
        <SectionLabel className="mx-auto">Get in touch</SectionLabel>
        <SectionTitle className="text-[clamp(2.2rem,4vw,3.5rem)] max-w-[680px] mx-auto">
          Ready to take the{" "}
          <em className="italic text-clay">first step together?</em>
        </SectionTitle>
        <p className="text-base text-muted-foreground max-w-[460px] mx-auto mb-10 font-light leading-relaxed">
          The hardest part is reaching out. I offer a free 20-minute
          consultation — no commitment, no pressure. Just a conversation.
        </p>
        <BtnPrimary href="mailto:hello@jessiewang.co.uk">
          Book a free consultation
        </BtnPrimary>
        <p className="text-sm text-muted-foreground mt-5">
          Or email{" "}
          <strong>
            <a href="mailto:hello@jessiewang.co.uk" className="text-ink no-underline">
              hello@jessiewang.co.uk
            </a>
          </strong>{" "}
          &middot; In-person London &middot; Online UK-wide
        </p>
      </div>
    </section>
  )
}
