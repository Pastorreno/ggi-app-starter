import Link from 'next/link'

export default function EventPagesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Event Landing Pages</p>
        <h1 className="mt-6 text-5xl font-bold tracking-tight">Need a clean page for your next event?</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          We build modern pages for worship nights, conferences, anniversaries, fundraisers, community events, and business launches.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-5">Mobile-friendly event page</div>
          <div className="rounded-2xl border border-white/10 p-5">RSVP or registration form</div>
          <div className="rounded-2xl border border-white/10 p-5">Shareable custom link</div>
          <div className="rounded-2xl border border-white/10 p-5">Promo copy available</div>
        </div>
        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950">Build My Event Page</Link>
          <Link href="/" className="rounded-xl border border-white/15 px-6 py-3">Back Home</Link>
        </div>
      </div>
    </main>
  )
}
