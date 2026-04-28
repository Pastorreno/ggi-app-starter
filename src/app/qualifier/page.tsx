import Link from 'next/link'

const paths = [
  {
    need: 'I need a website or landing page',
    recommendation: 'LaunchSite System',
    bestFor: 'Businesses, ministries, events, nonprofits, and personal brands that need a clean digital front door.',
    nextStep: 'Request a website quote',
  },
  {
    need: 'I need better follow-up',
    recommendation: 'Follow-Up System',
    bestFor: 'Organizations losing leads, visitors, clients, participants, volunteers, or event registrants after first contact.',
    nextStep: 'Map my follow-up process',
  },
  {
    need: 'I need a private community or communication hub',
    recommendation: 'Messaging World Build',
    bestFor: 'Churches, nonprofits, teams, coaches, creators, and businesses that need a WhatsApp or Telegram-based hub.',
    nextStep: 'Build my messaging world',
  },
  {
    need: 'I need to help people grow and develop',
    recommendation: 'PurposePath / GrowthPath System',
    bestFor: 'Churches, schools, youth programs, nonprofits, coaching groups, and people-centered organizations.',
    nextStep: 'Explore development systems',
  },
]

export default function QualifierPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">GGI Solutions</Link>
          <Link href="/contact" className="rounded-full bg-amber-300 px-5 py-2 text-sm font-bold text-zinc-950">Contact</Link>
        </nav>

        <section className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Solution Finder</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">Not sure what you need? Start here.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Answer one simple question: what problem are you trying to solve? GGI Solutions will help point you toward the right website, follow-up system, messaging world, or development pathway.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h2 className="text-2xl font-bold">Choose the option closest to your need</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {paths.map((path) => (
              <div key={path.need} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                <p className="text-sm font-semibold text-amber-300">{path.need}</p>
                <h3 className="mt-3 text-2xl font-bold">{path.recommendation}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{path.bestFor}</p>
                <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-amber-300 px-5 py-3 text-sm font-bold text-zinc-950 hover:bg-amber-200">
                  {path.nextStep}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Coming Next</p>
          <h2 className="mt-4 text-3xl font-bold">AI-powered recommendations</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">
            This first version gives visitors a clear path. The next version can add a real chat-style qualifier that asks questions, scores the lead, recommends the best package, and sends the inquiry to GGI Solutions.
          </p>
        </section>
      </div>
    </main>
  )
}
