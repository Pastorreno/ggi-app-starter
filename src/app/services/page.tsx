import Link from 'next/link'

const services = [
  {
    title: 'Smart Websites',
    description: 'Websites and landing pages that capture interest, explain the offer, and move visitors to action.',
    price: '$500+',
    bullets: ['One-page and multi-page sites', 'Lead capture forms', 'Booking or registration flows', 'Mobile-first layouts'],
  },
  {
    title: 'Custom Qualifiers',
    description: 'Interactive website tools that ask questions, recommend the right service, and pre-qualify leads.',
    price: '$1,500+',
    bullets: ['Guided question flows', 'Smart recommendations', 'Better lead quality', 'Sales-ready inquiry data'],
  },
  {
    title: 'Follow-Up Systems',
    description: 'Simple tracking systems that keep leads, clients, visitors, participants, and opportunities from falling through the cracks.',
    price: '$149/mo+',
    bullets: ['Contact intake', 'Status tracking', 'Assignments and reminders', 'Dashboard visibility'],
  },
  {
    title: 'Messaging Worlds',
    description: 'Private mobile-first communication hubs in WhatsApp, Telegram, or both.',
    price: '$500+',
    bullets: ['Groups and channels', 'Welcome flows', 'Pinned resources', 'Admin launch support'],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">GGI Solutions</Link>
          <Link href="/qualifier" className="rounded-full bg-amber-300 px-5 py-2 text-sm font-bold text-zinc-950">Solution Finder</Link>
        </nav>

        <section className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Services</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">Smart systems built to move people to the next step.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            GGI Solutions builds practical digital systems for businesses, churches, nonprofits, events, creators, and community organizations.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="rounded-full bg-amber-300 px-3 py-1 text-sm font-black text-zinc-950">{service.price}</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-300">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-amber-300" />{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-8">
          <h2 className="text-3xl font-bold">Not sure which service fits?</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">Use the Solution Finder to get matched with the best starting point, then request a project conversation.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/qualifier" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">Try Solution Finder</Link>
            <Link href="/contact" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-white/40">Start a Project</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
