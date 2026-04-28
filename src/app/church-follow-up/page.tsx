import Link from 'next/link'

export default function ChurchFollowUpPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Church Follow-Up System</p>
        <h1 className="mt-6 text-5xl font-bold tracking-tight">Stop losing visitors after the first Sunday.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          GGI Hub helps churches track guests, assign follow-up, monitor next steps, and improve pastoral visibility with a simple modern system.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-5">Visitor intake + notes</div>
          <div className="rounded-2xl border border-white/10 p-5">Follow-up assignments</div>
          <div className="rounded-2xl border border-white/10 p-5">Care flags + needs</div>
          <div className="rounded-2xl border border-white/10 p-5">Leader dashboard</div>
        </div>
        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950">Book Discovery Call</Link>
          <Link href="/" className="rounded-xl border border-white/15 px-6 py-3">Back Home</Link>
        </div>
      </div>
    </main>
  )
}
