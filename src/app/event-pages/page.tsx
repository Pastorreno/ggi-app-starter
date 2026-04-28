import Link from 'next/link'

const packages = [
  { name: 'Basic Page', price: '$199+', details: 'One clean event page with event details, CTA, and mobile-friendly layout.' },
  { name: 'Growth Page', price: '$399+', details: 'Event page plus RSVP/registration form, attendee sheet, and shareable link.' },
  { name: 'Campaign Kit', price: '$799+', details: 'Event page, registration flow, flyer copy, Facebook post, email copy, and follow-up message.' },
]

export default function EventPagesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Event Landing Pages</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight">Need a clean page for your next event?</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          GGI Hub builds modern event pages for worship nights, conferences, anniversaries, fundraisers, community events, and business launches.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 p-5">Mobile-friendly event page</div>
          <div className="rounded-2xl border border-white/10 p-5">RSVP or registration form</div>
          <div className="rounded-2xl border border-white/10 p-5">Shareable event link</div>
          <div className="rounded-2xl border border-white/10 p-5">Promo copy available</div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Simple launch packages</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="mt-3 text-3xl font-black text-amber-300">{pkg.price}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-300">{pkg.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-8">
          <h2 className="text-2xl font-bold">Best first move</h2>
          <p className="mt-3 text-zinc-300">Start with a fast event page. After the event, use the attendee list to build follow-up and long-term engagement.</p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950">Build My Event Page</Link>
          <Link href="/" className="rounded-xl border border-white/15 px-6 py-3">Back Home</Link>
        </div>
      </div>
    </main>
  )
}
