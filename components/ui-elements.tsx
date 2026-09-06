import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "text-[0.7rem] tracking-[0.2em] uppercase text-clay block mb-4",
        className
      )}
    >
      {children}
    </span>
  )
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "font-serif text-[clamp(2rem,3vw,2.8rem)] font-light leading-tight mb-6",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-10 h-px bg-clay my-6", className)}
      role="separator"
    />
  )
}

export function BtnPrimary({
  children,
  href,
  className,
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  const classes = cn(
    "inline-block bg-ink text-cream py-3.5 px-8 text-[0.78rem] tracking-[0.1em] uppercase no-underline rounded-sm hover:bg-clay transition-colors cursor-pointer border-none font-sans",
    className
  )
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return <button className={classes}>{children}</button>
}

export function BtnSecondary({
  children,
  href,
  className,
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  const classes = cn(
    "inline-block text-[0.78rem] tracking-[0.08em] uppercase text-muted-foreground no-underline border-b border-border-color pb-0.5 hover:text-ink hover:border-ink transition-colors cursor-pointer bg-transparent font-sans",
    className
  )
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return <button className={classes}>{children}</button>
}
