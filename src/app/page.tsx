import Link from 'next/link'
import { QualifierDemo } from '@/components/ggi/QualifierDemo'

const offers = [
  'A clean website or event page that helps people take the next step',
  'An interactive guide that recommends the right service or path',
  'WhatsApp and Telegram spaces that keep people connected after they respond',
  'Simple follow-up systems so nobody gets missed',
]

const packages = [
  { name: 'LaunchSite', price: '$500+', description: 'A clean website or landing page built to help visitors understand and respond.' },
  { name: 'Event LaunchPage', price: '$199+', description: 'A quick-turnaround page for events, registration, RSVP, and promotion.' },
  { name: 'Messaging World', price: '$500+', description: 'A WhatsApp or Telegram hub for updates, resources, onboarding, and engagement.' },
  { name: 'Smart Qualifier', price: '$1,500+', description: 'An interactive guide that helps visitors find the right next step.' },
  { name: 'System Build', price: '$3,500+', description: 'A connected system with forms, follow-up, messaging, or simple dashboard workflows.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
        <nav className="mb-12 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 shadow-sm backdrop-blur">
          <Link href="/" className="text-lg font-black tracking-tight">GGI Solutions</Link>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#welcome" className="hover:text-white">Welcome</a>
            <a href="#mockup" className="hover:text-white">Mockup</a>
            <a href="#interactive" className="hover:text-white">Try It</a>
            <a href="#offers" className="hover:text-white">Offers</a>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </nav>

        <section id="welcome" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Welcome to the Hub</p>
            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">Let’s build the right system for where you are.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              GGI Solutions builds interactive websites, event pages, messaging worlds, and follow-up systems that help people feel seen, guided, and supported.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#video" className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 shadow-sm hover:bg-cyan-300">Watch Welcome</a>
              <a href="#interactive" className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 font-semibold text-white hover:border-cyan-300">Find My Best Solution</a>
            </div>
          </div>

          <div id="video" className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-white/[0.06] to-violet-500/20 p-4 shadow-2xl shadow-black/40">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#02040d]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.35),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.35),transparent_35%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 text-3xl font-black text-slate-950 shadow-lg shadow-cyan-400/30">▶</div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Video Placeholder</p>
                <h2 className="mt-3 text-3xl font-black">Welcome to GGI Solutions</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Add your welcome video here. This section is built for a short founder message that helps people feel guided before they choose a solution.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">What makes this different?</p>
          <h2 className="mt-4 text-3xl font-bold">Your site should make people feel understood before they ever contact you.</h2>
          <ul className="mt-6 grid gap-4 text-slate-300 md:grid-cols-2">
            {offers.map((offer) => (
              <li key={offer} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />{offer}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="mockup" className="border-y border-white/10 bg-[#080d20] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Product Mockup</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold">See how one connected system could look.</h2>
          <p className="mt-5 max-w-3xl text-slate-300">This mockup shows what a client can buy: a website front door, a smart qualifier, a messaging world, and a follow-up workflow working together.</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#050816] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Demo Website</p>
                    <h3 className="mt-1 text-2xl font-black">Client Growth Hub</h3>
                  </div>
                  <span className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-black text-slate-950">Live Demo</span>
                </div>
                <div className="grid gap-4 py-6 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step 1</p>
                    <h4 className="mt-2 font-bold">Website</h4>
                    <p className="mt-2 text-sm text-slate-300">Captures attention and explains the offer clearly.</p>
                  </div>
                  <div className="rounded-2xl bg-cyan-400/10 p-4 ring-1 ring-cyan-300/30">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Step 2</p>
                    <h4 className="mt-2 font-bold">Qualifier</h4>
                    <p className="mt-2 text-sm text-slate-300">Asks questions and recommends the right next step.</p>
                  </div>
                  <div className="rounded-2xl bg-violet-500/10 p-4 ring-1 ring-violet-300/30">
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Step 3</p>
                    <h4 className="mt-2 font-bold">Follow-Up</h4>
                    <p className="mt-2 text-sm text-slate-300">Routes the lead into messaging and tracking.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm font-semibold text-cyan-300">Sample visitor journey</p>
                  <p className="mt-3 text-slate-300">A visitor selects their industry, chooses what they need, gets a recommended package, joins a WhatsApp or Telegram space, and sends a project inquiry.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Messaging World</p>
                <h3 className="mt-3 text-2xl font-bold">WhatsApp / Telegram Hub</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Keep people connected after they register, inquire, visit, or join.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-violet-300">Lead Alert</p>
                <h3 className="mt-3 text-2xl font-bold">Instant Notification</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">A new lead can trigger a Telegram message with name, need, budget, timeline, and recommendation.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Dashboard Ready</p>
                <h3 className="mt-3 text-2xl font-bold">Track Next Steps</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Start simple with Google Sheets, then upgrade into a custom dashboard when the client is ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="interactive" className="border-y border-white/10 bg-[#0b1026] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Interactive Demo</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold">Answer a few questions and get matched with the right solution.</h2>
          <p className="mt-5 max-w-3xl text-slate-300">This is the kind of adaptive experience GGI Solutions can build for your organization. The system stays the same, but the language fits your world.</p>
          <div className="mt-10">
            <QualifierDemo />
          </div>
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Simple Offers</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-bold">Start with the build that fits where you are.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-sm">
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="mt-3 text-3xl font-black text-cyan-300">{pkg.price}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{pkg.description}</p>
            </div>
          ))}
        </div>
        <section className="mt-10 rounded-3xl border border-violet-400/30 bg-violet-500/10 p-8">
          <h3 className="text-2xl font-bold">The natural flow</h3>
          <p className="mt-4 max-w-3xl text-slate-300">A website or event page captures attention. A qualifier finds the need. A WhatsApp or Telegram messaging world keeps people connected. A follow-up system makes sure nobody gets missed.</p>
        </section>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 hover:bg-cyan-300">Request a Quote</Link>
          <Link href="/services" className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 font-semibold text-white hover:border-cyan-300">View All Services</Link>
        </div>
      </section>
    </main>
  )
}
