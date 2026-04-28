import Link from 'next/link'

const details = [
  { label: 'Date', value: 'Saturday, June 15' },
  { label: 'Time', value: '6:00 PM' },
  { label: 'Location', value: 'Your Venue Name' },
  { label: 'Hosted by', value: 'Your Organization' },
]

const expectations = [
  'Clear event details in one place',
  'Mobile-friendly registration experience',
  'Easy share link for flyers and social media',
  'Simple follow-up list after the event',
]

export default function DemoEventPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <nav className="mb-16 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-tight">GGI Event Page</Link>
          <Link href="#register" className="rounded-full bg-amber-300 px-5 py-2 text-sm font-bold text-zinc-950">Register</Link>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Featured Event</p>
            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">Your Event Title Goes Here</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Use this section to clearly explain the promise of the event. Who is it for? Why should they come? What will they experience?
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#register" className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">Reserve My Spot</Link>
              <Link href="#details" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:border-white/40">See Details</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-amber-300/25 to-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Event Snapshot</p>
              <div className="mt-8 space-y-5">
                {details.map((item) => (
                  <div key={item.label} className="border-b border-white/10 pb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{item.label}</p>
                    <p className="mt-1 text-lg font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="border-y border-white/10 bg-white/[0.03] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">What to expect</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {expectations.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-sm leading-6 text-zinc-300">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Registration</p>
          <h2 className="mt-5 text-4xl font-bold">Save your spot today.</h2>
          <p className="mt-5 text-zinc-300">This form can connect to Google Forms, Formspree, Supabase, Airtable, or your preferred registration system.</p>
        </div>
        <form className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 space-y-4">
          <input className="w-full rounded-xl bg-zinc-900 px-4 py-3" placeholder="Full name" />
          <input className="w-full rounded-xl bg-zinc-900 px-4 py-3" placeholder="Email or phone" />
          <input className="w-full rounded-xl bg-zinc-900 px-4 py-3" placeholder="How many people are coming?" />
          <button className="w-full rounded-xl bg-amber-300 px-5 py-3 font-bold text-zinc-950">Submit Registration</button>
        </form>
      </section>
    </main>
  )
}
