import Link from 'next/link'
import { QualifierDemo } from '@/components/ggi/QualifierDemo'

const offers = [
  'A place where people feel welcomed before they are sold to',
  'A simple path that helps them find the right next step',
  'WhatsApp and Telegram spaces that keep the community connected',
  'Follow-up systems that help organizations care well and miss fewer people',
]

const videos = [
  {
    title: 'Welcome to the Hub',
    description: 'A short message that helps visitors understand the heart behind GGI Solutions.',
    embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'How the Hub Works',
    description: 'A simple walkthrough of website, qualifier, messaging world, and follow-up working together.',
    embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Why People Matter',
    description: 'A people-first explanation of why systems should help people feel seen, guided, and supported.',
    embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
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
            <a href="#clips" className="hover:text-white">Videos</a>
            <a href="#mockup" className="hover:text-white">Mockup</a>
            <a href="#interactive" className="hover:text-white">Try It</a>
            <a href="#offers" className="hover:text-white">Offers</a>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </nav>

        <section id="welcome" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Welcome to the Hub</p>
            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">A place to build people, systems, and next steps.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              GGI Solutions helps organizations create digital spaces where people feel welcomed, understood, guided, and connected. The tools matter, but people are the mission.
            </p>
            <div className="mt-8 rounded-3xl border border-violet-400/30 bg-violet-500/10 p-5 text-slate-200">
              <p className="font-semibold text-violet-200">This is not just about building websites.</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">It is about helping people take the right next step, stay connected, and grow into what they were designed to become.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#clips" className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 shadow-sm hover:bg-cyan-300">Watch the Hub</a>
              <a href="#interactive" className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 font-semibold text-white hover:border-cyan-300">Find My Best Solution</a>
            </div>
          </div>

          <div id="video" className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-white/[0.06] to-violet-500/20 p-4 shadow-2xl shadow-black/40">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#02040d]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Welcome to GGI Solutions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">What makes this different?</p>
          <h2 className="mt-4 text-3xl font-bold">You are not inviting people to a page. You are inviting them into a pathway.</h2>
          <ul className="mt-6 grid gap-4 text-slate-300 md:grid-cols-2">
            {offers.map((offer) => (
              <li key={offer} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />{offer}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="clips" className="border-y border-white/10 bg-[#0b1026] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Watch the Hub in Action</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold">Short clips that explain the heart and the system.</h2>
          <p className="mt-5 max-w-3xl text-slate-300">Use these video spaces for your welcome message, product explanation, client demos, or service breakdowns.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {videos.map((video) => (
              <div key={video.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20">
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <iframe
                    className="h-full w-full"
                    src={video.embed}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold">{video.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mockup" className="border-y border-white/10 bg-[#080d20] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Product Mockup</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold">See how one connected hub could look.</h2>
          <p className="mt-5 max-w-3xl text-slate-300">This mockup shows what a client can build: a website front door, a smart qualifier, a messaging world, and a follow-up workflow working together.</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#050816] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Demo Hub</p>
                    <h3 className="mt-1 text-2xl font-black">Community Growth Hub</h3>
                  </div>
                  <span className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-black text-slate-950">Live Demo</span>
                </div>
                <div className="grid gap-4 py-6 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step 1</p>
                    <h4 className="mt-2 font-bold">Welcome</h4>
                    <p className="mt-2 text-sm text-slate-300">People arrive and feel clear about where to begin.</p>
                  </div>
                  <div className="rounded-2xl bg-cyan-400/10 p-4 ring-1 ring-cyan-300/30">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Step 2</p>
                    <h4 className="mt-2 font-bold">Guide</h4>
                    <p className="mt-2 text-sm text-slate-300">The system asks questions and recommends the right next step.</p>
                  </div>
                  <div className="rounded-2xl bg-violet-500/10 p-4 ring-1 ring-violet-300/30">
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Step 3</p>
                    <h4 className="mt-2 font-bold">Connect</h4>
                    <p className="mt-2 text-sm text-slate-300">People move into messaging, follow-up, and ongoing support.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm font-semibold text-cyan-300">Sample visitor journey</p>
                  <p className="mt-3 text-slate-300">A visitor feels welcomed, identifies their world, chooses what they need, receives a recommended path, joins a WhatsApp or Telegram space, and sends a project inquiry.</p>
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
                <p className="text-xs uppercase tracking-[0.22em] text-violet-300">Careful Follow-Up</p>
                <h3 className="mt-3 text-2xl font-bold">Nobody Gets Missed</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">A new lead can trigger a Telegram message with name, need, timeline, and recommendation.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Growth Ready</p>
                <h3 className="mt-3 text-2xl font-bold">Build People Over Time</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Start simple, then grow into dashboards, development pathways, and better support systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="interactive" className="border-y border-white/10 bg-[#0b1026] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Find Your Path</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold">Answer a few questions and get matched with the right solution.</h2>
          <p className="mt-5 max-w-3xl text-slate-300">This is the kind of adaptive experience GGI Solutions can build for your organization. The system stays the same, but the language fits your world.</p>
          <div className="mt-10">
            <QualifierDemo />
          </div>
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Simple Starting Points</p>
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
          <p className="mt-4 max-w-3xl text-slate-300">A website or event page welcomes people in. A qualifier finds the need. A WhatsApp or Telegram messaging world keeps people connected. A follow-up system makes sure nobody gets missed.</p>
        </section>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 hover:bg-cyan-300">Request a Quote</Link>
          <Link href="/services" className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 font-semibold text-white hover:border-cyan-300">View All Services</Link>
        </div>
      </section>
    </main>
  )
}
