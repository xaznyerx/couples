import Link from "next/link"
import {
  SectionLabel,
  SectionTitle,
  BtnSecondary,
} from "@/components/ui-elements"

const specialisms = [
  {
    title: "Intercultural & Interracial Couples",
    desc: "When two people come from different cultural backgrounds, the relationship carries two sets of assumptions about family, love, conflict, and loyalty \u2014 often unspoken, often invisible until they clash.",
    items: [
      "Cultural differences in communication and conflict",
      "Family pressure and loyalty conflicts",
      "Bicultural identity and belonging",
      "Immigration and acculturative stress",
      "Raising children between cultures",
      "Adoption and complex family-of-origin stories",
    ],
  },
  {
    title: "LGBTQ+ Affirming Couples Therapy",
    desc: "LGBTQ+ couples face pressures that heteronormative therapy simply isn\u2019t built to see \u2014 minority stress, chosen family dynamics, relationships that don\u2019t fit received templates.",
    items: [
      "Minority stress and its relational impact",
      "Coming out and family estrangement",
      "Non-traditional relationship structures",
      "Identity and transition within a partnership",
      "The intersection of LGBTQ+ and intercultural identity",
      "Navigating visibility and safety as a couple",
    ],
  },
]

export default function HomeSpecialisms() {
  return (
    <section className="py-28 bg-warm border-t border-border-color">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <SectionLabel>Areas of specialization</SectionLabel>
        <SectionTitle>
          Where I do my <em className="italic text-clay">deepest work</em>
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-14">
          {specialisms.map((s) => (
            <div key={s.title} className="border-t-2 border-clay pt-8">
              <h3 className="font-serif text-[1.7rem] font-light mb-4">
                {s.title}
              </h3>
              <p className="text-[0.95rem] text-muted-foreground leading-relaxed font-light mb-4">
                {s.desc}
              </p>
              <ul className="list-none mt-4">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink py-1.5 pl-5 relative font-light border-b border-border-color last:border-b-0"
                  >
                    <span className="absolute left-0 text-clay">
                      &mdash;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <BtnSecondary href="/specializations">
            {"Read more about each specialization \u2192"}
          </BtnSecondary>
        </div>
      </div>
    </section>
  )
}
