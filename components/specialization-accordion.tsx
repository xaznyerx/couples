"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const specializations = [
  {
    id: "intercultural",
    label: "Specialization one",
    title: "Intercultural & Interracial Couples",
    titleAccent: "Intercultural & Interracial",
    titleEnd: "Couples",
    intro: "When two people come from different cultural backgrounds, the relationship isn't just between two individuals. It's between two complete sets of assumptions about how the world works and how love is supposed to feel.",
    detail: "The argument isn't really about whether you call her mother this weekend. It's about whether family loyalty means the same thing to both of you. I bring to this work something beyond training: lived experience. I grew up between cultures, have lived across four continents, and am in an intercultural relationship myself — one that includes the additional complexity of adoption and different family-of-origin stories.",
    blocks: [
      { title: "Cultural scripts for love and conflict", desc: "Every culture teaches its children a different script for expressing love, managing disagreement, and showing vulnerability. When two scripts collide, the result is often conflict that neither partner fully understands — because it's happening below the level of the words." },
      { title: "Family involvement and loyalty conflicts", desc: "In individualist cultures, the couple is the primary unit. In collectivist ones, the family is. When partners come from different sides of this divide, questions about parents, in-laws, and money become proxy battles for much deeper differences about what marriage actually means." },
      { title: "Bicultural identity and belonging", desc: "Many people in intercultural relationships are also navigating their own bicultural identity — the experience of belonging fully to neither culture. This has specific relational effects: the fear of assimilation, the grief of distance from origin." },
      { title: "Unequal external pressure", desc: "When one partner belongs to a dominant culture and the other doesn't, the relationship carries a power differential that most couples don't name. Racism, microaggressions, family disapproval — these come into the relationship and need to be addressed there." },
      { title: "Raising children between cultures", desc: "Questions of language, religion, naming, schooling, and cultural transmission become live and often fraught. Therapy can help couples develop a shared framework — not a compromise, but something genuinely co-created." },
      { title: "Adoption and complex family-of-origin stories", desc: "When one or both partners were adopted, or have limited knowledge of their heritage, it changes questions about belonging and identity. Standard assessment tools often don't fit. I work differently when this is part of the picture." },
    ],
    dark: false,
  },
  {
    id: "lgbtq",
    label: "Specialization two",
    title: "LGBTQ+ Affirming Couples Therapy",
    titleAccent: "LGBTQ+ Affirming",
    titleEnd: "Couples Therapy",
    intro: "LGBTQ+ couples face pressures that most mainstream couples therapy models weren't built to address — not because they're more fragile, but because they're navigating a set of conditions that heterosexual, cisgender couples simply don't encounter.",
    detail: "Minority stress is real and it lives in the relationship. The chronic experience of discrimination, concealment, family rejection, and navigating an often-hostile world has direct effects on how partners attach to each other and what safety in intimacy feels like. I work within an explicitly affirming framework — I won't ask you to justify your relationship structure, won't treat your identity as a variable to be bracketed, and won't default to heteronormative assumptions.",
    blocks: [
      { title: "Minority stress and its relational effects", desc: "Chronic exposure to stigma and discrimination changes how people attach and express need. In couples, this often shows up as difficulty with vulnerability, hypervigilance to rejection, or conflict patterns that make more sense when minority stress is understood as a driver." },
      { title: "Coming out, family estrangement, chosen family", desc: "The relational consequences of coming out — family loss, chosen family dynamics, ongoing decisions about disclosure — create a specific context for LGBTQ+ couples that heterosexual couples don't navigate." },
      { title: "Non-traditional relationship structures", desc: "LGBTQ+ couples are more likely to have relationship structures that don't fit the templates couples therapy was built around. I work from the assumption that your structure is valid; the question is how to make it work well for you." },
      { title: "Identity transitions within a partnership", desc: "When one partner transitions — in gender, sexual identity, or relationship to their LGBTQ+ identity — both partners may need to renegotiate who they are to each other and what the relationship means." },
      { title: "The intersection of LGBTQ+ and intercultural identity", desc: "When a couple is both LGBTQ+ and intercultural, the complexity multiplies. This is one of the least-researched areas in couples therapy, and one I have particular experience with." },
      { title: "Navigating visibility and safety as a couple", desc: "Being out as a couple — in different contexts, around different family members — involves constant negotiation. When partners have different levels of outness or different risk tolerances, this becomes a live tension in the relationship." },
    ],
    dark: true,
  },
]

export default function SpecializationAccordion() {
  const [activeId, setActiveId] = useState<string | null>("intercultural")

  return (
    <div>
      {specializations.map((spec) => {
        const isOpen = activeId === spec.id

        return (
          <section key={spec.id}>
            {/* Clickable header */}
            <button
              onClick={() => setActiveId(isOpen ? null : spec.id)}
              className={`w-full text-left border-b transition-colors ${
                spec.dark
                  ? "bg-dark border-white/[0.06] hover:bg-[#141210]"
                  : "bg-cream border-border-color hover:bg-warm"
              }`}
            >
              <div className="max-w-[1100px] mx-auto px-6 lg:px-16 py-10 flex items-center justify-between gap-8">
                <div>
                  <span
                    className={`text-[0.7rem] tracking-[0.2em] uppercase block mb-2 ${
                      spec.dark ? "text-clay" : "text-clay"
                    }`}
                  >
                    {spec.label}
                  </span>
                  <h2
                    className={`font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-tight ${
                      spec.dark ? "text-cream" : "text-ink"
                    }`}
                  >
                    <em className="italic text-clay">{spec.titleAccent}</em>{" "}
                    {spec.titleEnd}
                  </h2>
                </div>
                <div
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  } ${spec.dark ? "text-cream/40" : "text-ink/40"}`}
                >
                  <ChevronDown size={24} />
                </div>
              </div>
            </button>

            {/* Expandable content */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`${
                    spec.dark ? "bg-dark" : "bg-cream"
                  } border-b ${
                    spec.dark ? "border-white/[0.06]" : "border-border-color"
                  }`}
                >
                  {/* Intro text */}
                  <div className="max-w-[1100px] mx-auto px-6 lg:px-16 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                      <p
                        className={`text-base leading-relaxed font-light ${
                          spec.dark ? "text-cream/50" : "text-muted-foreground"
                        }`}
                      >
                        {spec.intro}
                      </p>
                      <p
                        className={`text-base leading-relaxed font-light ${
                          spec.dark ? "text-cream/50" : "text-muted-foreground"
                        }`}
                      >
                        <strong
                          className={`font-medium ${
                            spec.dark ? "text-cream" : "text-ink"
                          }`}
                        >
                          {spec.detail.split(".")[0]}.
                        </strong>{" "}
                        {spec.detail.split(".").slice(1).join(".")}
                      </p>
                    </div>
                  </div>

                  {/* Content grid */}
                  <div className="max-w-[1100px] mx-auto px-6 lg:px-16 pb-20">
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-px border ${
                        spec.dark
                          ? "bg-white/[0.04] border-white/[0.06]"
                          : "bg-border-color border-border-color"
                      }`}
                    >
                      {spec.blocks.map((block) => (
                        <div
                          key={block.title}
                          className={`p-10 transition-colors ${
                            spec.dark
                              ? "bg-dark hover:bg-white/[0.04]"
                              : "bg-cream hover:bg-warm"
                          }`}
                        >
                          <h3
                            className={`font-serif text-xl font-normal mb-2.5 ${
                              spec.dark ? "text-cream" : "text-ink"
                            }`}
                          >
                            {block.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed font-light ${
                              spec.dark
                                ? "text-cream/45"
                                : "text-muted-foreground"
                            }`}
                          >
                            {block.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
