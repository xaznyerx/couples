import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SectionLabel } from "@/components/ui-elements"

export const metadata: Metadata = {
  title: "Writing | Jessie Wang - Couples Therapist",
  description:
    "Articles and essays by Jessie Wang on intercultural relationships, LGBTQ+ couples, and the intersection of culture and love.",
}

const articles = [
  {
    slug: "intercultural-couples-rise",
    tags: ["Research & Trends"],
    title: "Intercultural Couples on the Rise",
    standfirst:
      "The numbers, the forces driving them, and the fault lines no one prepares you for.",
    meta: "By Jessie Wang  ·  2025  ·  6 min read",
  },
  {
    slug: "no-script-for-this",
    tags: ["Intercultural", "Identity & Media"],
    title: "No Script for This",
    standfirst:
      "What to do when the news comes for your partner's identity — and neither of you knows what to say.",
    meta: "By Jessie Wang  ·  2025  ·  12 min read",
  },
  {
    slug: "90-day-fiance",
    tags: ["Intercultural", "Pop culture"],
    title: "Beyond the Drama: 90 Day Fiancé's Truths on Intercultural Relationships",
    standfirst:
      "A guilty pleasure with a 54% success rate and a lot to teach us. Three dynamics from the show — and what any couple can take from them.",
    meta: "By Jessie Wang  ·  January 2025  ·  8 min read",
  },
]

export default function WritingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-36 pb-16 border-b border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            <SectionLabel>Writing</SectionLabel>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.1]">
              Thinking out loud about
              <br />
              <em className="italic text-clay">
                relationships &amp; culture
              </em>
            </h1>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-[520px] mt-4">
              Articles drawing on clinical practice, research, and the patterns
              that show up again and again in the consulting room.
            </p>
          </div>
        </section>

        {/* Article listing */}
        <section className="py-16 border-b border-border-color">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-start py-12 border-b border-border-color last:border-b-0"
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.64rem] tracking-[0.12em] uppercase text-clay bg-clay/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/writing/${article.slug}`}>
                    <h2 className="font-serif text-3xl font-light leading-tight mb-3 cursor-pointer transition-colors hover:text-clay">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-[0.95rem] text-muted-foreground font-light leading-relaxed mb-5">
                    {article.standfirst}
                  </p>
                  <p className="text-xs text-muted-foreground font-light">
                    {article.meta}
                  </p>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-4">
                  <Link
                    href={`/writing/${article.slug}`}
                    className="text-[0.72rem] tracking-[0.12em] uppercase text-clay border-b border-clay/30 pb-0.5 no-underline hover:border-clay transition-colors"
                  >
                    {"Read article \u2192"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
