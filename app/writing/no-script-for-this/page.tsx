import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title:
    "No Script for This | Jessie Wang",
  description:
    "What to do when the news comes for your partner's identity — and neither of you knows what to say. A guide for supporting your partner through identity-based media stress.",
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
  source: string
}) {
  return (
    <div className="my-12 py-9 px-10 border-l-[3px] border-clay bg-warm">
      <span className="font-serif text-5xl md:text-6xl font-light text-clay block mb-2">
        {stat}
      </span>
      <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[380px]">
        {label}
      </p>
      <p className="text-[0.68rem] text-muted-foreground/60 mt-3 tracking-wide">
        {source}
      </p>
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

function PersonalMoment({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 -mx-4 md:-mx-8 px-8 md:px-12 py-10 bg-[#F0E9E0] border-t-2 border-clay">
      <span className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-clay block mb-4">
        From the therapist
      </span>
      <div className="font-serif text-lg italic leading-relaxed text-ink space-y-4">
        {children}
      </div>
    </div>
  )
}

function Principle({
  num,
  title,
  children,
}: {
  num: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-[56px_1fr] gap-6 mb-9 items-start">
      <span className="font-serif text-5xl font-light text-clay/50 leading-none">
        {num}
      </span>
      <div>
        <h4 className="font-serif text-xl font-medium mb-2.5 text-ink">
          {title}
        </h4>
        <p className="text-base leading-relaxed text-ink font-light">{children}</p>
      </div>
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

export default function NoScriptArticle() {
  return (
    <>
      <Navbar />
      <main>
        {/* Article Hero - Dark header */}
        <header className="bg-ink text-cream pt-24 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-br from-clay/25 to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-gradient-to-tl from-clay/15 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-clay block mb-6">
              Intercultural Relationships &middot; Identity &amp; Media
            </span>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5rem)] font-light leading-[1.05] mb-5">
              No Script
              <br />
              for This
            </h1>
            <p className="font-serif text-lg md:text-xl italic font-light text-cream/65 max-w-xl mx-auto mb-10 leading-relaxed">
              What to do when the news comes for your partner&apos;s identity —
              and neither of you knows what to say
            </p>
            <p className="text-[0.8rem] tracking-wide text-cream/50">
              By <span className="text-clay">Jessie Wang</span> &middot; BACP
              Registered Couples Therapist
            </p>
          </div>
        </header>

        {/* Article body */}
        <div className="max-w-[720px] mx-auto px-6 md:px-8 py-16">
          <p className="font-serif text-xl md:text-2xl leading-relaxed font-normal text-ink mb-12 pb-12 border-b border-border-color">
            You already know this feeling. Your partner goes quiet in a way
            that&apos;s different from their usual quiet. Or they don&apos;t go
            quiet — they come in charged, already exhausted, already having had
            some version of this conversation six times today. Their nationality
            is the debate of the week. Their religion is being explained, again,
            by people who&apos;ve never practised it. Their ethnicity is a
            headline, and the headline isn&apos;t kind.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            You want to say something. You&apos;re not sure what. They want you
            to understand. They&apos;re not entirely sure you can.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            This is not a new kind of pain. But the machine delivering it is new
            — and it&apos;s worth being direct about what that machine actually
            does, because understanding it changes what we think support should
            look like.
          </p>

          <Divider />

          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mt-16 mb-7 text-ink">
            We Built Systems Designed to Do This
          </h2>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            We live in a moment where silence is no longer neutral. If you
            don&apos;t publicly condemn, you&apos;re assumed to condone. If you
            don&apos;t post, you&apos;re complicit. The rise of identity politics
            — on all sides — has created a cultural logic where every person is
            expected to be a clear and legible representative of their group,
            and where any hesitation, nuance, or complexity reads as betrayal or
            cowardice.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            This was already hard. Then the platforms made it worse.
          </p>

          <Callout>
            The major social media platforms are not neutral infrastructure.
            They are attention economies, and outrage is their most valuable
            currency.
          </Callout>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            Content that generates fear, anger, and tribal identification
            outperforms content that is nuanced or humanising — not as a side
            effect, but by design. Entire communities are periodically fed
            through a machine that strips them of complexity and turns them into
            a problem to be argued about. The machine doesn&apos;t care about
            the people inside the category. It cares about engagement.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            What&apos;s new isn&apos;t prejudice — that&apos;s ancient.
            What&apos;s new is the speed, the inescapability, and the demand for
            a position. Previous generations experienced discrimination as
            something that happened in specific places and times. This one
            experiences it as ambient, arriving through the same device you use
            to order food and talk to your friends. There is no putting it down.
            And there is no being neutral — because the culture has decided that
            neutrality is a position too.
          </p>

          <ConceptBox
            tag="The Gap"
            term="Where the research runs out"
            definition="Therapy has solid research on chronic discrimination, racial trauma, and how intercultural couples navigate external stress. But the specific experience of your partner's identity becoming a news cycle — acute, recurring, algorithmically amplified, with a cultural demand that you take a side immediately — has barely been studied. What follows draws on adjacent fields: grief research, trauma treatment, and minority stress theory."
          />

          <Divider />

          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mt-16 mb-7 text-ink">
            What Is Happening to the Person Whose Identity Is in the News
          </h2>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            The experience is several things at once — and they pull in
            different directions.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              There is an invisible weight your partner is carrying that you
              aren&apos;t.
            </strong>
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            Psychologists who study minority stress draw a distinction between
            the external events — the headlines, the hostile comments, the
            questions from colleagues — and the internal labour that follows.
            Anticipating the next attack before it comes. Monitoring how
            you&apos;re being perceived in every room. Deciding in real time
            whether to speak or stay quiet, whether to explain or let it go,
            whether to defend your community or distance yourself from it. This
            is continuous work. It doesn&apos;t clock off.
          </p>

          <StatBox
            stat="↑"
            label="Intercultural couples report significantly higher rates of discrimination-related stress than monocultural couples — stress that intensifies sharply during periods of heightened media targeting of one partner's group."
            source="Calderon et al., Journal of Social and Personal Relationships, 2024"
          />

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              But the harder thing — the thing that gets talked about even less
              — is the internal split.
            </strong>
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            Your partner may not be a simple representative of the group the
            news has decided to discuss. They may have deeply complicated
            feelings about their own culture, nationality, or community. They
            may agree with some of the criticism being levelled and reject other
            parts of it. They may feel grief or anger about something their own
            community has done, while also feeling that the way it&apos;s being
            discussed is reductive, dehumanising, or weaponised.
          </p>

          <PersonalMoment>
            <p>
              As someone who is both American and Chinese, I have learned to
              read the room before I speak. When China comes up, I often stay
              quiet — because I know what the conversation is likely to become.
              Yes, there are cheap products. There are also the precision
              components inside the expensive things everyone owns. The story is
              not simple, and the room is rarely interested in the unsimple
              version.
            </p>
            <p>
              The same is true from the other side. The US gets criticised —
              often fairly — for the recklessness of its foreign policy. And yet
              Europe&apos;s security architecture for the past eighty years has
              depended substantially on American military commitment. Both
              things are true. But &ldquo;both things are true&rdquo; is not a
              position the current media environment has much patience for.
            </p>
            <p>
              What I am describing is not fence-sitting. It is the experience of
              actually knowing something from the inside — and finding that the
              public conversation has already decided what you think before
              you&apos;ve opened your mouth.
            </p>
          </PersonalMoment>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              And then there is the question of who they can actually talk to.
            </strong>
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            Your partner may want to have this conversation — about what they
            actually think, about the ways they feel split. But every potential
            conversation carries risk. With people from their own community,
            there may be pressure to show solidarity, to not be seen as a
            traitor. With people outside the community, there&apos;s a different
            risk: that complexity will be taken out of context or simply not
            understood.
          </p>

          <Callout>
            Your partner may be carrying a sophisticated, difficult internal
            position that they genuinely cannot share with most people in their
            life. You may be one of the only places where that conversation can
            actually happen — if the conditions are right.
          </Callout>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              There is also something worth calling grief.
            </strong>
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            When your identity becomes a news event, you lose something real:
            the ordinary experience of moving through the world without being
            scrutinised, of being a person before you&apos;re a category. There
            is no ritual for this loss. Nobody marks it. The world keeps moving
            and you&apos;re expected to move with it.
          </p>

          <ConceptBox
            tag="Key Concept"
            term="Ambiguous Loss"
            definition="Psychologist Pauline Boss describes ambiguous loss as loss that resists resolution because it is structural and ongoing. Unlike bereavement, which has a trajectory, the grief of being collectively targeted has no ending point. The news cycle moves on — and then it comes back. You cannot grieve your way to the other side of it because there is no other side. This matters for support: you cannot help someone through ambiguous loss the way you help someone through something that ends."
          />

          <Divider />

          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mt-16 mb-7 text-ink">
            What Is Happening to the Supporting Partner
          </h2>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            If your partner&apos;s identity is the one in the news and you
            don&apos;t share it, you are probably dealing with your own version
            of not knowing what to do. There are broadly two ways to get this
            wrong — and both come from love.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              Over-functioning.
            </strong>
            You read everything. You form opinions. You want to engage, to show
            you care, to demonstrate you&apos;re not part of the problem. But it
            tips into a dynamic where the conversation becomes about your
            response, your views, your discomfort — rather than your
            partner&apos;s experience. Without meaning to, you&apos;ve made it
            yours.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            Having opinions and having <em>standing</em> are different things.
            Your partner, who is living inside this identity, has a different
            kind of knowledge — earned through experience, not study. Wanting
            your voice to carry equal weight in a conversation about something
            that is theirs to carry is, even when it comes from genuine care, a
            form of overreaching. It&apos;s about proportionality. About whose
            experience has authority.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            <strong className="font-serif text-lg font-medium italic block mb-3 mt-8">
              Under-functioning.
            </strong>
            You go quiet. You&apos;re so afraid of saying the wrong thing that
            you say almost nothing. Your partner experiences this not as careful
            restraint but as absence — as the person they most need to feel seen
            by, not seeing them.
          </p>

          <Callout>
            The supporting partner&apos;s own anxiety — about getting it wrong,
            about not having the right politics — can become a presence in the
            room that the affected partner now has to manage on top of
            everything else. Your discomfort becomes something they are
            responsible for.
          </Callout>

          <Divider />

          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mt-16 mb-7 text-ink">
            What Actually Helps
          </h2>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            Since there is no direct research on this specific situation, these
            three principles are drawn from grief support research, trauma
            treatment frameworks, and minority stress and co-regulation theory —
            and they converge.
          </p>

          <div className="my-12">
            <Principle num={1} title="Witnessed presence over informed opinion">
              What helps most is not what you say, but whether the person feels
              genuinely seen and not alone. Sitting with someone in their
              experience — without rushing to resolve or position yourself — is
              itself support. It requires tolerating your own discomfort at not
              fixing anything. The trauma literature is consistent: having the
              experience validated — someone saying{" "}
              <em>
                this is real, this is hard, you are not overreacting
              </em>{" "}
              — is one of the most reliably helpful responses to identity-based
              stress.
            </Principle>

            <Principle num={2} title="Follow before you lead">
              Let them decide when they want to talk and how much. Ask{" "}
              <em>what do you need right now?</em> rather than deciding what
              they need. Be genuinely willing to hear the answer even if
              it&apos;s <em>I just need you to be here</em>. The moments in my
              own relationship that have worked best have been the ones where
              whoever is carrying the heavier load gets the space to lead — not
              because the other person&apos;s experience doesn&apos;t matter,
              but because this particular conversation belongs to them.
            </Principle>

            <Principle
              num={3}
              title="Calibrate your engagement to whose experience it is"
            >
              The supportive partner doesn&apos;t have to be silent. But the
              weight and standing of that engagement should match who is living
              inside the experience. There is a meaningful difference between
              your partner being from a country and you having spent time there,
              or read about it. Both of you can have a conversation. But they
              hold a kind of knowledge that can&apos;t be acquired through study
              — and a good partner honours that distinction rather than
              collapses it.
            </Principle>
          </div>

          <Divider />

          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mt-16 mb-7 text-ink">
            The Hardest Conversation: When You Don&apos;t Fully Agree
          </h2>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            What happens when the two of you don&apos;t actually agree on the
            political situation itself? This is more common than people admit —
            and it&apos;s the conversation most likely to be avoided.
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            The temptation is to table the complexity in the name of solidarity:{" "}
            <em>I support you, full stop.</em> There is real value in that
            instinct. But the more honest version is more precise:{" "}
            <em>
              I support you, and I may not see everything the same way, and
              those two things can coexist.
            </em>
          </p>

          <p className="text-base leading-relaxed text-ink font-light mb-6">
            What doesn&apos;t help is using complexity as cover for not showing
            up. There is a difference between genuine nuance and deployed nuance
            — nuance as a way of staying comfortable rather than as a genuine
            attempt to understand. The test is whether the complexity is in
            service of your partner or in service of yourself.
          </p>

          {/* Closing box */}
          <div className="mt-16 py-12 px-8 md:px-12 bg-ink text-cream text-center">
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-cream mb-6">
              The news cycle will keep cycling. What you can do is make your
              relationship the one place where they don&apos;t have to perform,
              defend, represent, or explain. Where being with you is a rest from
              being scrutinised.
            </p>
            <p className="text-base font-light text-cream/60">
              That&apos;s not a small thing. That might, in the worst moments,
              be everything.
            </p>
          </div>

          <p className="mt-12 text-[0.95rem] italic text-muted-foreground leading-relaxed">
            If this resonates with something you&apos;re navigating in your
            relationship, it may be worth exploring with a therapist who
            understands both the cultural and relational dimensions of this kind
            of stress. These are complex conversations — and you don&apos;t have
            to find the right words alone.
          </p>

          {/* References */}
          <div className="mt-16 pt-8 border-t border-border-color">
            <h3 className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-clay mb-5">
              References
            </h3>
            <p className="text-[0.8rem] text-muted-foreground leading-relaxed mb-2.5">
              Meyer, I.H. (2003). Prejudice, social stress, and mental health in
              lesbian, gay, and bisexual populations.{" "}
              <em>Psychological Bulletin, 129</em>(5), 674–697.
            </p>
            <p className="text-[0.8rem] text-muted-foreground leading-relaxed mb-2.5">
              Holmes, S.C., Zare, M., Haeny, A. &amp; Williams, M.T. (2024).
              Racial stress, racial trauma, and evidence-based strategies for
              coping and empowerment.{" "}
              <em>Annual Review of Clinical Psychology, 20</em>, 77–95.
            </p>
            <p className="text-[0.8rem] text-muted-foreground leading-relaxed mb-2.5">
              Boss, P. (2010). The trauma and complicated grief of ambiguous
              loss. <em>Pastoral Psychology, 59</em>, 137–145.
            </p>
            <p className="text-[0.8rem] text-muted-foreground leading-relaxed mb-2.5">
              Neri, J. (2025). Racially conscious sociocultural attuned EFT with
              inter-ethnoracial couples. <em>Family Process</em>.
              https://doi.org/10.1111/famp.70099
            </p>
            <p className="text-[0.8rem] text-muted-foreground leading-relaxed mb-2.5">
              Doka, K.J. (1989).{" "}
              <em>Disenfranchised Grief: Recognizing Hidden Sorrow.</em>{" "}
              Lexington Books.
            </p>
          </div>

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
