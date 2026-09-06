import Link from "next/link"

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/specializations", label: "Specializations" },
  { href: "/writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-serif text-base text-cream font-light">
            Jessie Wang — Couples Therapist
          </span>
          <ul className="flex flex-wrap justify-center gap-8 list-none">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.72rem] tracking-[0.1em] uppercase text-cream/35 no-underline hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[0.72rem] text-center text-cream/20 max-w-[620px] mx-auto mt-5 leading-relaxed">
          BACP Registered &middot; Couples Therapy Certified &middot; All
          sessions strictly confidential &middot; If you are in crisis, please
          contact your GP or call 116 123 (Samaritans, free, 24/7)
        </p>
      </div>
    </footer>
  )
}
