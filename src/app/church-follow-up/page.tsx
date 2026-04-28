import Link from 'next/link'

const tiers = [
  { name: 'Starter', price: '$149/mo+', details: 'Simple contact tracking, follow-up list, and weekly reporting.' },
  { name: 'Growth', price: '$299/mo+', details: 'Dashboard visibility, assignments, notes, reminders, and next-step pipeline.' },
  { name: 'Custom', price: 'Custom', details: 'Full follow-up workflows, onboarding paths, team visibility, automation, and reporting.' },
]

export default function FollowUpSystemPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Follow-Up System</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight">Stop letting people fall through the cracks.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          GGI Solutions helps churches, nonprofits, businesses, programs, and community organizations track people, assign follow-up, monitor next steps, and improve team visibility with a simple modern system.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 p-5">Contact intake + notes</div>
          <div className="rounded-2xl border border-white/10 p-5">Follow-up assignments</div>
          <div className="rounded-2xl border border-white/10 p-5">Status flags + needs</div>
          <div className="rounded-2xl border border-white/10 p-5">Team dashboard</div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Monthly support options</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="mt-3 text-3xl font-black text-amber-300">{tier.price}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-300">{tier.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-8">
          <h2 className="text-2xl font-bold">Best first move</h2>
          <p className="mt-3 text-zinc-300">Start with a basic follow-up system. Once the process is trusted, expand into onboarding, communication, automation, and leadership or team development.</p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950">Book Discovery Call</Link>
          <Link href="/" className="rounded-xl border border-white/15 px-6 py-3">Back Home</Link>
        </div>
      </div>
    </main>
  )
}
