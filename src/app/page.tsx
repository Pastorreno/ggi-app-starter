import Link from 'next/link'
import { QualifierDemo } from '@/components/ggi/QualifierDemo'

const offers = [
  'Smart websites that help people inquire, book, register, or buy',
  'Interactive qualifiers that recommend the right service before the first call',
  'Follow-up systems that keep leads and opportunities from falling through the cracks',
]

const packages = [
  { name: 'LaunchSite', price: '$500+', description: 'A clean website or landing page built to move visitors toward action.' },
  { name: 'Smart Qualifier', price: '$1,500+', description: 'An interactive recommendation tool that helps qualify better leads.' },
  { name: 'System Build', price: '$3,500+', description: 'A website connected to forms, follow-up, messaging, or dashboard workflows.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <nav className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">GGI Solutions</Link>
          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#interactive" className="hover:text-white">Try It</a>
            <a href="#offers" className="hover:text-white">Offers</a>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">GGI Solutions</p>
            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">Websites that qualify leads and move people to action.</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              We build simple, smart, interactive websites for businesses, churches, nonprofits, events, and organizations that need more than a digital flyer.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#interactive" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">Try the Interactive Demo</a>
              <Link href="/contact" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-white/40">Start a Project</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-300/30 bg-amber-300/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">What makes this different?</p>
            <h2 className="mt-4 text-3xl font-bold">Your site should help sell before you ever get on the phone.</h2>
            <ul className="mt-6 space-y-4 text-zinc-200">
              {offers.map((offer) => (
                <li key={offer} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />{offer}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="interactive" className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Interactive Demo</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold">Answer a few questions and get matched with the right solution.</h2>
          <p className="mt-5 max-w-3xl text-zinc-300">This is the kind of interactive experience GGI Solutions can build for your organization.</p>
          <div className="mt-10">
            <QualifierDemo />
          </div>
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Simple Offers</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-bold">Start with the build that fits where you are.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="mt-3 text-3xl font-black text-amber-300">{pkg.price}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-300">{pkg.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">Request a Quote</Link>
          <Link href="/services" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-white/40">View All Services</Link>
        </div>
      </section>
    </main>
  )
}
