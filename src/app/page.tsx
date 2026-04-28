import Link from 'next/link'
import { OfferCard } from '@/components/ggi/OfferCard'

const developmentSystems = [
  'Free 2 Grow — kids and youth development',
  'PurposePath OS — why, wiring, and identity discovery',
  'GrowthPath OS — structured growth and progress',
  'LeaderRise OS — future leadership development',
]

const websitePackages = [
  { name: 'Starter LaunchSite', price: '$500+', description: 'A clean one-page website for a business, ministry, program, or personal brand.' },
  { name: 'Growth Website', price: '$1,500+', description: 'A multi-page site with clear messaging, services, and inquiry flow.' },
  { name: 'System Website', price: '$3,500+', description: 'A website connected to forms, follow-up, messaging, or simple dashboards.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <nav className="mb-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">GGI Solutions</Link>
          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#development" className="hover:text-white">Development</a>
            <a href="#websites" className="hover:text-white">Websites</a>
            <Link href="/qualifier" className="hover:text-white">Solution Finder</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </nav>

        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">GGI Solutions</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">Digital systems that move people forward.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            We build websites, messaging worlds, follow-up systems, smart qualifiers, and growth development tools for churches, nonprofits, businesses, events, and community organizations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/qualifier" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">
              Find My Best Solution
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-white/40">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Smart Website Demo</p>
          <h2 className="mt-4 text-3xl font-bold">Not sure what you need? Let the site qualify you.</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">Our Solution Finder shows how a website can guide visitors, recommend the right service, and turn interest into a better lead before the first conversation.</p>
          <Link href="/qualifier" className="mt-8 inline-flex rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">Try the Solution Finder</Link>
        </div>

        <div id="services" className="mt-20 grid gap-8 md:grid-cols-3">
          <OfferCard
            eyebrow="Digital Front Door"
            title="LaunchSite Websites"
            description="Clean websites and landing pages built to capture attention, inquiries, bookings, registrations, and next steps."
            href="#websites"
            cta="See Website Packages"
            bullets={[
              'One-page and multi-page sites',
              'Lead capture and inquiry forms',
              'Event and campaign pages',
              'Built to connect into follow-up',
            ]}
          />
          <OfferCard
            eyebrow="Smart Sales Systems"
            title="Custom Qualifiers"
            description="Interactive website experiences that ask questions, recommend services, and help pre-qualify leads."
            href="/qualifier"
            cta="View Demo"
            bullets={[
              'Guided questions and recommendations',
              'Better lead quality before calls',
              'Perfect for service businesses',
              'Can connect to forms and follow-up',
            ]}
          />
          <OfferCard
            eyebrow="Relationship Systems"
            title="Follow-Up Systems"
            description="Simple systems that help organizations track leads, visitors, clients, participants, and next steps."
            href="/church-follow-up"
            cta="See Follow-Up System"
            bullets={[
              'Contact intake and tracking',
              'Assignments and reminders',
              'Status flags and notes',
              'Dashboards and reporting',
            ]}
          />
        </div>
      </section>

      <section id="development" className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Development Ecosystem</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold">Systems for identity, growth, development, and future leadership.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {developmentSystems.map((system) => (
              <div key={system} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-sm leading-6 text-zinc-300">{system}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="websites" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Websites</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-bold">Websites that act as digital front doors.</h2>
        <p className="mt-5 max-w-3xl text-zinc-300">A website should do more than look good. It should move visitors toward a clear next step: inquire, book, register, join, or connect.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {websitePackages.map((pkg) => (
            <div key={pkg.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="mt-3 text-3xl font-black text-amber-300">{pkg.price}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-300">{pkg.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">Request Website Quote</Link>
          <Link href="/qualifier" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-white/40">Try Solution Finder</Link>
        </div>
      </section>
    </main>
  )
}
