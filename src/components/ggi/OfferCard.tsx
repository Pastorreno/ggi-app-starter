import Link from 'next/link'

type OfferCardProps = {
  title: string
  description: string
  href: string
  eyebrow: string
  bullets: string[]
  cta: string
}

export function OfferCard({ title, description, href, eyebrow, bullets, cta }: OfferCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p>
      <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-zinc-300">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-amber-300 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-200"
      >
        {cta}
      </Link>
    </div>
  )
}
