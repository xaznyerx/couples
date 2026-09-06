import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Intercultural Couples on the Rise | Jessie Wang",
  description:
    "The numbers, the forces driving them, and the fault lines no one prepares you for. Research and trends in intercultural relationships.",
}

export default function InterculturalCouplesRiseArticle() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Intercultural Couples on the Rise",
    author: { "@type": "Person", name: "Jessie Wang" },
    datePublished: "2025",
    description:
      "The numbers, forces driving the rise of intercultural couples, and the relationship fault lines they may encounter.",
    url: "https://jessie-wang.uk/writing/intercultural-couples-rise",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        {/* Dark header */}
        <header className="bg-dark text-cream pt-28 pb-16 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(196,133,106,0.25)_0%,transparent_70%)]" />
          <div className="absolute bottom-[-80px] right-[-40px] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(196,133,106,0.15)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-[680px] mx-auto px-6">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-clay mb-6 block">
              Research &amp; Trends
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.08] mb-5">
              Intercultural Couples
              <br />
              on the Rise
            </h1>
            <p className="font-serif text-[clamp(1rem,2.2vw,1.25rem)] italic font-light text-cream/65 max-w-[580px] mx-auto mb-10 leading-relaxed">
              The numbers, the forces driving them, and the fault lines no one
              prepares you for
            </p>
            <p className="text-[13px] tracking-[0.08em] text-cream/50">
              By <span className="text-clay">Jessie Wang</span> &nbsp;·&nbsp;
              Couples Therapist, London
            </p>
          </div>
        </header>

        {/* Article body */}
        <article className="max-w-[680px] mx-auto px-6 py-16 lg:py-20">
          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            For a long time, being in an intercultural relationship wasn&apos;t
            just unusual — it was seen as risky, disloyal, or wrong. Couples
            were warned it would never work, that cultures were too different,
            that families would never accept them. And then, slowly but surely,
            something shifted.
          </p>

          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            In England and Wales, nearly 1 in 10 people living as part of a
            couple are now in an inter-ethnic relationship — a figure that grew
            by 35% in the decade between the 2001 and 2011 censuses.
            <sup className="text-[11px] text-clay">1</sup> In the US,
            interracial marriages have more than doubled in a generation.
            <sup className="text-[11px] text-clay">2</sup> In London, the
            figure is significantly higher. The trend is consistent and global.
            These relationships are no longer the exception, and the
            conversations they require are ones more and more of us are having.
          </p>

          {/* Stat grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-11">
            {[
              {
                num: "1 in 10",
                label: "UK couples are in an inter-ethnic relationship",
              },
              {
                num: "+35%",
                label:
                  "growth in intercultural couples in the UK in a decade",
              },
              {
                num: "2×",
                label:
                  "interracial marriages in the US have doubled in a generation",
              },
            ].map((stat) => (
              <div
                key={stat.num}
                className="border-t-2 border-clay pt-4"
              >
                <div className="font-serif text-[2.5rem] font-light text-ink leading-none">
                  {stat.num}
                </div>
                <div className="text-[13px] text-muted-foreground mt-1.5 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <hr className="border-t border-border-color my-12" />

          {/* Section: The Drivers */}
          <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-clay block mb-3.5 mt-14">
            The Drivers
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal leading-tight mb-7 text-ink">
            Why intercultural relationships are on the rise
          </h2>

          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            A few big forces are doing most of the heavy lifting: more
            opportunity, more contact, more acceptance.
          </p>

          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            Globalisation and migration mean more people live, study, and work
            outside their country of origin than ever before. The number of
            international students in the UK has grown dramatically over the
            past two decades, and with it the number of people who meet, fall in
            love, and build lives together across cultural and national lines.
          </p>

          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            Urban diversity means cities like London bring people from vastly
            different backgrounds into daily proximity. Shifting attitudes —
            particularly among younger generations — mean that cultural and
            racial difference in a partner is increasingly seen as irrelevant or
            even interesting, rather than as a barrier.
          </p>

          {/* Pull quote */}
          <div className="border-l-2 border-clay pl-7 py-1.5 my-11">
            <p className="font-serif text-[clamp(1.2rem,2.5vw,1.5rem)] italic font-light leading-snug text-ink">
              The most cited quantitative finding on intercultural couples: they
              are not less satisfied than monocultural couples. What predicts
              difficulty is not the difference itself — it&apos;s external
              pressure.
            </p>
          </div>

          <hr className="border-t border-border-color my-12" />

          {/* Section: The Research */}
          <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-clay block mb-3.5 mt-14">
            The Research
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal leading-tight mb-7 text-ink">
            What the data actually shows
          </h2>

          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            The most cited quantitative work on intercultural couples — a 2022
            meta-analysis by Uhlich, Luginbühl, and Schoebi reviewing 20 studies
            — found that intercultural couples report similar levels of
            relationship satisfaction to monocultural couples. The difference
            isn&apos;t inside the relationship. It&apos;s outside it.
            <sup className="text-[11px] text-clay">3</sup>
          </p>

          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            What predicts difficulty for intercultural couples is external
            stressors: family disapproval, discrimination, lack of social
            support, and the ongoing work of navigating a world that wasn&apos;t
            designed with their relationship in mind. A couple that is
            well-matched and genuinely connected can navigate cultural
            difference. What they often struggle to navigate is a world that
            treats their relationship as unusual, suspect, or unlikely to last.
          </p>

          <hr className="border-t border-border-color my-12" />

          {/* Section: The Fault Lines */}
          <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-clay block mb-3.5 mt-14">
            The Fault Lines
          </span>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal leading-tight mb-7 text-ink">
            Where things tend to get hard
          </h2>

          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            Research on intercultural couples consistently identifies four areas
            of particular friction — not because cultural difference is
            inherently damaging, but because these are the dimensions where
            assumptions tend to diverge most sharply and where the work of
            explicit negotiation is most necessary.
          </p>

          {/* Callout boxes */}
          <div className="bg-warm border-l-[3px] border-clay p-7 my-11">
            <strong className="block text-[11px] font-medium tracking-[0.12em] uppercase text-clay mb-2">
              Family and extended kin
            </strong>
            <p className="text-[15px] leading-relaxed text-ink font-light mb-0">
              Intercultural couples report significantly more problems with
              parents and extended relatives than monocultural couples.
              Different cultures hold fundamentally different assumptions about
              what marriage means — whether it&apos;s primarily a union between
              two individuals or a joining of two families.
            </p>
          </div>

          <div className="bg-warm border-l-[3px] border-clay p-7 my-11">
            <strong className="block text-[11px] font-medium tracking-[0.12em] uppercase text-clay mb-2">
              Money
            </strong>
            <p className="text-[15px] leading-relaxed text-ink font-light mb-0">
              Culturally patterned assumptions about whether finances should be
              pooled or kept separate, who bears primary financial
              responsibility, and what obligations exist to extended family
              often diverge sharply between partners from different backgrounds.
            </p>
          </div>

          <div className="bg-warm border-l-[3px] border-clay p-7 my-11">
            <strong className="block text-[11px] font-medium tracking-[0.12em] uppercase text-clay mb-2">
              Communication
            </strong>
            <p className="text-[15px] leading-relaxed text-ink font-light mb-0">
              Intercultural couples experience greater anxiety about
              self-disclosure and a greater need for explicit sharing and
              understanding. The gap isn&apos;t just about behaviour — it&apos;s
              about the underlying anxiety of navigating difference without a
              shared cultural script.
            </p>
          </div>

          <div className="bg-warm border-l-[3px] border-clay p-7 my-11">
            <strong className="block text-[11px] font-medium tracking-[0.12em] uppercase text-clay mb-2">
              Conflict styles
            </strong>
            <p className="text-[15px] leading-relaxed text-ink font-light mb-0">
              Culturally learned approaches to conflict — direct versus
              indirect, expressive versus restrained — create some of the most
              persistent and least visible friction in intercultural
              relationships.
            </p>
          </div>

          <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.75] text-ink font-light mb-7">
            None of these is insurmountable. But all of them require the kind of
            explicit, honest conversation that most couples — intercultural or
            not — find genuinely difficult. That&apos;s the work. And
            increasingly, it&apos;s work more of us are doing.
          </p>

          {/* Footnotes */}
          <div className="mt-16 border-t border-border-color pt-8">
            <p className="text-[13px] text-muted-foreground mb-2">
              <sup>1</sup> Office for National Statistics (2014). What does the
              2011 Census tell us about inter-ethnic relationships?
            </p>
            <p className="text-[13px] text-muted-foreground mb-2">
              <sup>2</sup> Pew Research Center (2017). Intermarriage in the U.S.
              50 Years After Loving v. Virginia.
            </p>
            <p className="text-[13px] text-muted-foreground mb-2">
              <sup>3</sup> Uhlich, M., Luginbühl, T., &amp; Schoebi, D. (2022).
              Relationship satisfaction in intercultural couples: A
              meta-analysis. <em>Journal of Cross-Cultural Psychology</em>.
            </p>
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-border-color">
            <Link
              href="/writing"
              className="text-[0.72rem] tracking-[0.12em] uppercase text-clay hover:text-ink transition-colors"
            >
              <span className="mr-1">←</span> Back to all articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
