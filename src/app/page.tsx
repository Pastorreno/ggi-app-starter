import Link from 'next/link'
import { OfferCard } from '@/components/ggi/OfferCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">GGI Hub</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">AI systems that solve real problems.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            We help churches, nonprofits, events, and local organizations launch modern tools that increase follow-up,
            visibility, and growth without replacing human leadership.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/church-follow-up" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">
              See Church System
            </Link>
            <Link href="/event-pages" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-white/40">
              Build My Event Page
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <OfferCard
            eyebrow="Recurring Revenue Offer"
            title="Church Follow-Up System"
            description="A simple AI-assisted follow-up system for visitor care, next steps, dashboards, and leader visibility."
            href="/church-follow-up"
            cta="View Offer"
            bullets={[
              'Visitor intake + follow-up tracking',
              'Leader dashboard visibility',
              'Care needs and next-step workflow',
              'Built for churches of any size',
            ]}
          />
          <OfferCard
            eyebrow="Fast Cash Offer"
            title="Event Landing Pages"
            description="Professional event pages for churches, concerts, conferences, community groups, and local businesses."
            href="/event-pages"
            cta="Launch My Event Page"
            bullets={[
              'Fast one-page launch sites',
              'RSVP or registration forms',
              'Shareable mobile-friendly links',
              'Promo add-ons available',
            ]}
          />
        </div>
      </section>
    </main>
  )
}
