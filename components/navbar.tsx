"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/specializations", label: "Specializations" },
  { href: "/writing", label: "Writing" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-5 bg-cream/95 backdrop-blur-md border-b border-border-color transition-shadow">
      <Link
        href="/"
        className="font-serif text-xl font-normal tracking-wide text-ink no-underline"
      >
        Jessie Wang
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-xs tracking-[0.12em] uppercase no-underline transition-colors ${
                pathname === link.href
                  ? "text-ink"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#contact"
            className="text-xs tracking-[0.12em] uppercase no-underline bg-ink text-cream px-5 py-2 rounded-sm hover:bg-clay transition-colors"
          >
            Book a consultation
          </Link>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-ink bg-transparent border-none"
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-cream border-b border-border-color md:hidden flex flex-col p-6 gap-4 animate-in fade-in slide-in-from-top-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-xs tracking-[0.12em] uppercase no-underline transition-colors py-2 ${
                pathname === link.href
                  ? "text-ink"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="text-xs tracking-[0.12em] uppercase no-underline bg-ink text-cream px-5 py-2.5 rounded-sm hover:bg-clay transition-colors text-center"
          >
            Book a consultation
          </Link>
        </div>
      )}
    </nav>
  )
}
