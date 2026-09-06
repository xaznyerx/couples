import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title:
    "Beyond the Drama: 90 Day Fiance's Truths on Intercultural Relationships | Jessie Wang",
  description:
    "A guilty pleasure with a 54% success rate and a lot to teach us about intercultural relationships. Three dynamics from 90 Day Fiance and what any couple can take from them.",
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 -mx-4 md:-mx-8 px-8 md:px-12 py-10 bg-ink text-cream relative">
      <span className="absolute top-6 left-6 md:left-8 font-serif text-[5rem] leading-none text-clay/60 select-none">
        &ldquo;
      </span>
      <blockquote className="font-serif text-xl md:text-2xl font-light italic leading-relaxed pl-6 relative z-10">
        {children}
      </blockquote>
    </div>
  )
}

function StatBox({
  stat,
  label,
  source,
}: {
  stat: string
  label: string
  source?: string
}) {
  return (
    <div className="my-12 py-9 px-10 border-l-[3px] border-clay bg-warm">
      <span className="font-serif text-5xl md:text-6xl font-light text-clay block mb-2">
        {stat}
      </span>
      <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[380px]">
        {label}
      </p>
      {source && (
        <p className="text-[0.68rem] text-muted-foreground/60 mt-3 tracking-wide">
          {source}
        </p>
      )}
    </div>
  )
}

function ConceptBox({
  tag,
  term,
  definition,
}: {
  tag: string
  term: string
  definition: string
}) {
  return (
    <div className="my-12 p-8 border border-border-color relative">
      <span className="absolute -top-3 left-7 bg-cream px-3 text-[0.62rem] font-medium tracking-[0.2em] uppercase text-clay">
        {tag}
      </span>
      <h4 className="font-serif text-2xl font-medium mb-2.5 text-ink">{term}</h4>
      <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
        {definition}
      </p>
    </div>
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-4 my-14">
      <div className="flex-1 h-px bg-border-color" />
      <div className="w-1.5 h-1.5 rounded-full bg-clay" />
      <div className="flex-1 h-px bg-border-color" />
    </div>
  )
}

function TakeawayBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-12 -mx-4 md:-mx-8 px-8 md:px-12 py-10 bg-[#F0E9E0] border-t-2 border-clay">
      <span className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-clay block mb-4">
        Key Takeaway
      </span>
      <h4 className="font-serif text-xl font-medium mb-3 text-ink">{title}</h4>
      <div className="text-base leading-relaxed text-ink font-light">
        {children}
      </div>
    </div>
  )
}

export default function NinetyDayArticle() {
  return (
    <>
      <Navbar />
      <main>
        {/* Article Hero - Dark header */}
        <header className="bg-ink text-cream pt-24 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-br from-clay/25 to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-gradient-to-tl from-clay/15 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center flex-wrap gap-2 mb-6">
              <span className="text-[0.64rem] tracking-[0.12em] uppercase text-clay bg-clay/20 px-3 py-1 rounded-full">
                Intercultural
              </span>
              <span className="text-[0.64rem] tracking-[0.12em] uppercase text-clay bg-clay/20 px-3 py-1 rounded-full">
                Pop culture
              </span>
            </div>
            <h1 className="font-serif text-[clamp(2.4rem,6vw,4.2rem)] font-light leading-[1.08] mb-5">
              Beyond the Drama:{" "}
              <em className="italic text-clay">
                90 Day Fianc&eacute;&apos;s
              </em>{" "}
              Truths on Intercultural Relationships
            </h1>
            <p className="font-serif text-lg md:text-xl italic font-light text-cream/65 max-w-xl mx-auto mb-10 leading-relaxed">
              A guilty pleasure with a 54% success rate and a lot to teach us
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-cream/20">
                <Image
                  src="/images/jessie-portrait.jpg"
                  alt="Jessie Wang"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>
              <p className="text-[0.8rem] tracking-wide text-cream/50 text-left">
                By <span className="text-clay">Jessie Wang</span>
                <br />
                <span className="text-cream/40">January 2025 &middot; 8 min read</span>
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="max-w-[720px] mx-auto px-6 md:px-8 py-16">
          <p className="font-serif text-xl md:text-2xl leading-relaxed font-normal text-ink mb-12 pb-12 border-b border-border-color">
            Everyone has their reality TV guilty pleasure. Mine is{" "}
            <em>90 Day Fianc&eacute;</em>, a pretty controversial pick which
            some have gone as far as to call exploitative. Because of the setup,
            unlike Love is Blind or The Bachelor, where most people are rooting
            for the couples, <em>90 Day Fianc&eacute;</em> has lots of naysayers
            that are watching and waiting for it to fall apart.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            The love feels implausible, the situations uncomfortable, how could
            the couple possibly work?
          </p>

          <StatBox
            stat="54-57%"
            label="The success rate for couples on 90 Day Fiance who went from 'I do' to still being together — almost the same as Love is Blind."
          />

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            For me, that is even more impressive because no one in{" "}
            <em>90 Day Fianc&eacute;</em> takes an extensive test, they
            don&apos;t have a villa or an apartment that they are given, and the
            majority of them come from very different backgrounds with most of
            them having almost the same timeline.
          </p>

          <Callout>
            Because many of these couples come from differing perspectives, they
            are forced into conversations and resolution, and in working through
            it so visibly, these couples give us real insight — not just into
            the unique challenges of intercultural relationships, but into the
            principles that can help any of us build something more honest with
            the person we love.
          </Callout>

          <Divider />

          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mt-16 mb-7 text-ink">
            3 Dynamics from 90 Day Fianc&eacute; and What We Can Learn
          </h2>

          <h3 className="font-serif text-2xl font-normal leading-snug mt-10 mb-4 text-ink">
            1. The Undiscussed Cultural Hierarchy
          </h3>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            In every couple, there is one individual who is from the US and then
            another who is from another country. The most common demographics in{" "}
            <em>90 Day Fianc&eacute;</em> are from the Philippines, Colombia,
            and Russia. While they are all branded as the
            &ldquo;foreigner,&rdquo; they are all compared against the baseline
            of being American but still unequal, and we create discrimination
            based on different characteristics.
          </p>

          <ConceptBox
            tag="Research Finding"
            term="90 Day Fiance: The Other Way"
            definition="The spin-off where the American partner moves abroad has the highest relationship success rate in the entire franchise. When the American partner is living in their partner's country, there is usually less of a hierarchy of foreigners and most foreigners are lumped as one."
          />

          <h3 className="font-serif text-2xl font-normal leading-snug mt-10 mb-4 text-ink">
            2. The Danger of the Default Culture
          </h3>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            For the foreign partner in most intercultural relationships, the
            experience is exhausting in a way that&apos;s hard to articulate to
            someone who hasn&apos;t lived it. You are constantly translating —
            not just linguistically but existentially. You are the one who has
            adapted, adjusted, absorbed, and learned both cultures.
          </p>

          <Callout>
            Partners who treated their own cultural norms as neutral, ignoring
            cultural difference rather than engaging with it, were less
            accepting of their partner&apos;s cultural expressions — which in
            turn predicted worse relationship outcomes.
          </Callout>

          <TakeawayBox title="What helps">
            <p>
              The couples who did better were those who could name the
              difference without weaponising it. &ldquo;I think this might be a
              cultural difference between us&rdquo; is a very different sentence
              from &ldquo;the way you were raised is the problem.&rdquo;
            </p>
          </TakeawayBox>

          <h3 className="font-serif text-2xl font-normal leading-snug mt-10 mb-4 text-ink">
            3. Closing the Gap of the Couple Fit
          </h3>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            Every couple has to navigate a set of what therapists sometimes call
            &ldquo;social graces&rdquo; — the core dimensions of life that
            culture shapes most deeply: Gender, Geography, Race, Religion, Age,
            Ability, Appearance, Class, Culture, Ethnicity, Education,
            Employment, Sexuality, Sexual Orientation, and Spirituality.
          </p>

          <ConceptBox
            tag="Key Concept"
            term="Social Graces"
            definition="The core dimensions of life that culture shapes most deeply. For any couple, understanding where each person sits on these dimensions and how far apart they are is some of the most important work a relationship can do. For intercultural couples, the distances on these dimensions tend to be greater."
          />

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            That doesn&apos;t make the relationship harder to love in, but it
            does make this work more urgent.
          </p>

          <Divider />

          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mt-16 mb-7 text-ink">
            What This Means in Practice
          </h2>

          <StatBox
            stat="1 in 10"
            label="Couples in the UK are in an inter-ethnic relationship, a figure that has grown by 35% in a decade. In the US, interracial marriages have more than doubled in a generation."
          />

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              Get curious about the roots of your own reactions
            </strong>
            and know that curiosity is not the same as agreement. When something
            your partner does strikes you as strange or frustrating, the first
            question worth asking isn&apos;t &ldquo;why are they like
            this?&rdquo; but &ldquo;why does this bother me?&rdquo;
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              Name the culture without making it a verdict.
            </strong>
            &ldquo;I think this might be a cultural difference between us&rdquo;
            is a very different sentence from &ldquo;the way you were raised is
            the problem.&rdquo; The first opens a conversation. The second
            closes one.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              Recognise that adaptation is not a one-way street.
            </strong>
            In most intercultural couples living in one partner&apos;s home
            country, the foreign partner does a vastly disproportionate share of
            the adapting.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              Build your own couple&apos;s culture.
            </strong>
            Every couple, intercultural or not, has to do the same fundamental
            work: figure out their shared zone. The values, habits, and ways of
            being that belong to both of them — not just one.
          </p>

          {/* Closing box */}
          <div className="mt-16 py-12 px-8 md:px-12 bg-ink text-cream text-center">
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-cream mb-6">
              The difficulties are what makes it worth watching seriously —
              because these couples show us that love across difference
              isn&apos;t about erasing the difference. It&apos;s about building
              something new together.
            </p>
          </div>

          {/* Author box */}
          <div className="mt-12 p-8 border border-border-color bg-warm">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/jessie-portrait.jpg"
                  alt="Jessie Wang"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-normal mb-1">
                  Jessie Wang
                </h3>
                <span className="text-[0.72rem] tracking-[0.1em] uppercase text-clay block mb-2">
                  BACP-Registered Couples Therapist
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  Jessie works with intercultural and LGBTQ+ couples in London,
                  drawing on EFT, Gottman Method, and systemic approaches.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/#contact"
            className="bg-ink p-8 block no-underline group mt-6"
          >
            <h3 className="font-serif text-xl font-light text-cream leading-snug mb-2.5">
              Working through something{" "}
              <em className="italic text-clay/80">similar?</em>
            </h3>
            <p className="text-xs text-cream/45 font-light leading-relaxed mb-4">
              A free 20-minute consultation to see if we&apos;re a good fit.
            </p>
            <span className="text-[0.72rem] tracking-[0.1em] uppercase text-clay border-b border-clay/30 pb-0.5">
              {"Book a consultation →"}
            </span>
          </Link>

          {/* Back to writing */}
          <div className="pt-8 mt-8 border-t border-border-color">
            <Link
              href="/writing"
              className="text-xs tracking-[0.1em] uppercase text-muted-foreground no-underline hover:text-ink transition-colors"
            >
              &larr; All writing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
