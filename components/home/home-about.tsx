import Image from "next/image"
import Link from "next/link"
import {
  SectionLabel,
  SectionTitle,
  Divider,
  BtnPrimary,
} from "@/components/ui-elements"

export default function HomeAbout() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden min-h-[400px] lg:min-h-[580px] group">
          <Image
            src="/images/jessie-candid.jpg"
            alt="Jessie Wang portrait"
            fill
            className="object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark/35 to-transparent pointer-events-none" />
        </div>
        <div className="p-10 lg:p-20 bg-warm border-l border-border-color flex flex-col justify-center">
          <SectionLabel>About Jessie</SectionLabel>
          <SectionTitle>
            {"I know what it\u2019s like"}
            <br />
            to live <em className="italic text-clay">between worlds.</em>
          </SectionTitle>
          <Divider />
          <p className="text-base leading-relaxed text-ink font-light mb-5">
            I grew up between cultures — my parents immigrated across countries,
            and I&apos;ve since lived in the US, China, Sweden, and the UK, with
            time in Italy, Hong Kong, and Ghana. I navigate this complexity
            in my own life, not just in the consulting room.
          </p>
          <p className="text-base leading-relaxed text-ink font-light mb-5">
            Before private practice I worked with domestic violence
            organisations, Asian American community groups, immigration shelters,
            and refugee populations — because the world outside a relationship
            doesn&apos;t stay outside. It comes into the room.
          </p>
          <BtnPrimary href="/about">Read my full story</BtnPrimary>
        </div>
      </div>
    </section>
  )
}
