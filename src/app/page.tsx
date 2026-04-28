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
    <main className="min-h-screen bg-[#f7f4ee] text-[#17221f]">
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
        <nav className="mb-16 flex items-center justify-between rounded-full border border-[#d9d1c3] bg-white/70 px-5 py-3 shadow-sm backdrop-blur">
          <Link href="/" className="text-lg font-black tracking-tight">GGI Solutions</Link>
          <div className="hidden gap-6 text-sm text-[#52615c] md:flex">
            <a href="#interactive" className="hover:text-[#17221f]">Try It</a>
            <a href="#offers" className="hover:text-[#17221f]">Offers</a>
            <Link href="/services" className="hover:text-[#17221f]">Services</Link>
            <Link href="/contact" className="hover:text-[#17221f]">Contact</Link>
          </div>
        </nav>

        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1f8a70]">GGI Solutions</p>
          <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">Simple digital systems that help people move forward.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#52615c]">
            We build warm, interactive websites, event pages, messaging worlds, and follow-up systems for organizations that want people to feel seen, guided, and supported.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#interactive" className="rounded-full bg-[#1f8a70] px-7 py-3 font-bold text-white shadow-sm hover:bg-[#176f5b]">Try the Interactive Demo</a>
            <Link href="/contact" className="rounded-full border border-[#cbbfae] bg-white px-7 py-3 font-semibold text-[#17221f] hover:border-[#1f8a70]">Start a Project</Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[#d9d1c3] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d28a2e]">What makes this different?</p>
          <h2 className="mt-4 text-3xl font-bold">Your site should make people feel understood before they ever contact you.</h2>
          <ul className="mt-6 grid gap-4 text-[#52615c] md:grid-cols-2">
            {offers.map((offer) => (
              <li key={offer} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#f0b35a]" />{offer}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="interactive" className="border-y border-[#e3dbcf] bg-[#fffaf2] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1f8a70]">Interactive Demo</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold">Answer a few questions and get matched with the right solution.</h2>
          <p className="mt-5 max-w-3xl text-[#52615c]">This is the kind of adaptive experience GGI Solutions can build for your organization. The system stays the same, but the language fits your world.</p>
          <div className="mt-10">
            <QualifierDemo />
          </div>
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1f8a70]">Simple Offers</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-bold">Start with the build that fits where you are.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-3xl border border-[#d9d1c3] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="mt-3 text-3xl font-black text-[#1f8a70]">{pkg.price}</p>
              <p className="mt-4 text-sm leading-6 text-[#52615c]">{pkg.description}</p>
            </div>
          ))}
        </div>
        <section className="mt-10 rounded-3xl border border-[#f0c27a] bg-[#fff3dc] p-8">
          <h3 className="text-2xl font-bold">The natural flow</h3>
          <p className="mt-4 max-w-3xl text-[#52615c]">A website or event page captures attention. A qualifier finds the need. A WhatsApp or Telegram messaging world keeps people connected. A follow-up system makes sure nobody gets missed.</p>
        </section>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-[#1f8a70] px-7 py-3 font-bold text-white hover:bg-[#176f5b]">Request a Quote</Link>
          <Link href="/services" className="rounded-full border border-[#cbbfae] bg-white px-7 py-3 font-semibold text-[#17221f] hover:border-[#1f8a70]">View All Services</Link>
        </div>
      </section>
    </main>
  )
}
