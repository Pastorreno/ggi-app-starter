export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Contact GGI Hub</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight">Let’s build something useful.</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">Tell us what you need. We build church systems, event pages, dashboards, and practical AI tools that solve real problems.</p>
          <div className="mt-8 space-y-3 text-zinc-300">
            <p>• Discovery calls available</p>
            <p>• Fast-turnaround projects available</p>
            <p>• Local and remote clients welcome</p>
          </div>
        </div>
        <form className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 space-y-4">
          <input className="w-full rounded-xl bg-zinc-900 px-4 py-3" placeholder="Your name" />
          <input className="w-full rounded-xl bg-zinc-900 px-4 py-3" placeholder="Email or phone" />
          <input className="w-full rounded-xl bg-zinc-900 px-4 py-3" placeholder="Organization" />
          <textarea className="min-h-36 w-full rounded-xl bg-zinc-900 px-4 py-3" placeholder="What problem are you trying to solve?" />
          <button className="w-full rounded-xl bg-amber-300 px-5 py-3 font-bold text-zinc-950">Request Consultation</button>
          <p className="text-xs text-zinc-500">Next step: connect this form to your inbox or CRM.</p>
        </form>
      </div>
    </main>
  )
}
