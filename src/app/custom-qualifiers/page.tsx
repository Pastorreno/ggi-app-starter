import Link from 'next/link'

export default function CustomQualifiersPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">GGI Solutions</Link>
          <Link href="/contact" className="rounded-full bg-amber-300 px-5 py-2 text-sm font-bold text-zinc-950">Build Mine</Link>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Custom Qualifiers</p>
        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">Turn your website into a salesperson.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">We build interactive website experiences that ask the right questions, recommend the best offer, and capture stronger leads before the first call.</p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold">1. Ask</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">Guide visitors through simple questions based on your business.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold">2. Recommend</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">Match them with the right service, package, or next step.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold">3. Capture</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">Collect better lead data so sales conversations start ahead.</p>
          </div>
        </div>

        <section className="mt-14 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-8">
          <h2 className="text-3xl font-bold">Best for</h2>
          <p className="mt-4 text-zinc-300">Agencies, service businesses, realtors, churches, nonprofits, coaches, clinics, contractors, events, and any organization that gets inquiries.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/qualifier" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">See Live Demo</Link>
            <Link href="/contact" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-white/40">Request Custom Build</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
