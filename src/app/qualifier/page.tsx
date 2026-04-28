import Link from 'next/link'
import { QualifierDemo } from '@/components/ggi/QualifierDemo'

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
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">Get matched with the right solution.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            This is the type of smart qualifier GGI Solutions can build for your business, church, nonprofit, or organization. Answer a few questions and get the best starting recommendation.
          </p>
        </section>

        <section className="mt-14">
          <QualifierDemo />
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Business Owners Notice This</p>
          <h2 className="mt-4 text-3xl font-bold">Yes — we can build a version of this for your company.</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Use this style of qualifier to guide leads, pre-screen inquiries, recommend services, route prospects, capture better data, and increase conversions before you ever get on a call.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">Build My Custom Qualifier</Link>
        </section>
      </div>
    </main>
  )
}
