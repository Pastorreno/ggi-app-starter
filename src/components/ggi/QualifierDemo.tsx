'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

type Answers = {
  orgType: string
  problem: string
  urgency: string
}

type Recommendation = {
  title: string
  summary: string
  package: string
  next: string
  demoLanguage: string
  previewHeadline: string
  previewSubtext: string
}

const industries = [
  { id: 'business', label: 'Business', emoji: '🏢' },
  { id: 'church', label: 'Church', emoji: '⛪' },
  { id: 'nonprofit', label: 'Nonprofit', emoji: '🤝' },
  { id: 'school', label: 'School', emoji: '🎓' },
  { id: 'creator', label: 'Creator', emoji: '🎙️' },
]

const problems = [
  { id: 'website', label: 'Website / landing page' },
  { id: 'follow-up', label: 'Better follow-up' },
  { id: 'messaging', label: 'Messaging hub' },
  { id: 'development', label: 'Growth system' },
]

const urgencyOptions = [
  { id: 'now', label: 'ASAP' },
  { id: 'month', label: 'Within 30 days' },
  { id: 'planning', label: 'Still planning' },
]

const industryLanguage: Record<string, { label: string; people: string; action: string; demo: string; preview: string }> = {
  business: {
    label: 'Business / Corporate',
    people: 'leads, customers, staff, and prospects',
    action: 'increase qualified inquiries, improve operations, and move prospects toward the right offer',
    demo: 'Business language: leads, sales conversations, customer journey, operations, revenue, and conversion.',
    preview: 'Guide prospects from interest to the right offer.',
  },
  church: {
    label: 'Church / Ministry',
    people: 'visitors, members, volunteers, ministry teams, and families',
    action: 'strengthen communication, follow-up, discipleship, care, and next steps',
    demo: 'Church language: visitors, discipleship, care, serving, prayer, leadership, and member engagement.',
    preview: 'Help people find their next step in the life of the ministry.',
  },
  nonprofit: {
    label: 'Nonprofit',
    people: 'participants, volunteers, donors, staff, and community partners',
    action: 'improve engagement, volunteer coordination, participant support, and impact tracking',
    demo: 'Nonprofit language: mission, volunteers, participants, donors, impact, services, and support.',
    preview: 'Connect people to the mission and guide them to meaningful action.',
  },
  school: {
    label: 'School / Youth Program',
    people: 'students, parents, staff, mentors, and program participants',
    action: 'support student growth, family communication, mentorship, engagement, and progress visibility',
    demo: 'Education language: students, parents, growth, mentorship, attendance, character, progress, and readiness.',
    preview: 'Help students and families find the right support pathway.',
  },
  creator: {
    label: 'Coach / Creator',
    people: 'clients, subscribers, members, prospects, and community followers',
    action: 'grow a community, qualify clients, deliver resources, and guide people into the right offer',
    demo: 'Creator language: audience, clients, members, content, offers, community, and accountability.',
    preview: 'Move your audience from attention to the right offer or community.',
  },
}

function getRecommendation(answers: Answers): Recommendation | null {
  const industry = industryLanguage[answers.orgType]
  if (!industry || !answers.problem) return null

  const base = {
    website: {
      title: `${industry.label} LaunchSite`,
      summary: `A clean website or landing page designed so ${industry.people} can understand the offer and take the right next step.`,
      package: 'Starter or Growth LaunchSite',
      next: 'Request a website quote',
      previewHeadline: 'Your digital front door',
      previewSubtext: industry.preview,
    },
    'follow-up': {
      title: `${industry.label} Follow-Up System`,
      summary: `A simple system to track ${industry.people}, assign next steps, and make sure important people and opportunities do not fall through the cracks.`,
      package: 'Starter Follow-Up or Growth Follow-Up',
      next: 'Map my follow-up process',
      previewHeadline: 'Nobody falls through the cracks',
      previewSubtext: `Track ${industry.people} with clear next steps.`,
    },
    messaging: {
      title: `${industry.label} Messaging World`,
      summary: `A private mobile-first communication hub in WhatsApp, Telegram, or both to help you ${industry.action}.`,
      package: 'Starter or Growth Messaging World',
      next: 'Build my messaging world',
      previewHeadline: 'Keep people connected',
      previewSubtext: 'Bring updates, resources, and community into one mobile-first space.',
    },
    development: {
      title: `${industry.label} Growth System`,
      summary: `A growth and development pathway that helps ${industry.people} understand where they are, what they need next, and how to move forward with support.`,
      package: 'PurposePath Workshop or GrowthPath Starter',
      next: 'Explore development systems',
      previewHeadline: 'Guide growth with purpose',
      previewSubtext: 'Help people understand themselves and move toward their next step.',
    },
  }

  const selected = base[answers.problem as keyof typeof base]
  return { ...selected, demoLanguage: industry.demo }
}

function optionClass(active: boolean) {
  return active
    ? 'border-cyan-300 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20'
    : 'border-white/10 bg-white/[0.05] text-slate-200 hover:border-cyan-300/70 hover:bg-white/[0.09]'
}

export function QualifierDemo() {
  const [answers, setAnswers] = useState<Answers>({ orgType: '', problem: '', urgency: '' })
  const recommendation = useMemo(() => getRecommendation(answers), [answers])
  const completion = [answers.orgType, answers.problem, answers.urgency].filter(Boolean).length

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Smart Qualifier</p>
            <h2 className="mt-4 text-3xl font-bold">Build the right demo.</h2>
          </div>
          <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-300">{completion}/3</div>
        </div>

        <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-cyan-300 transition-all" style={{ width: `${(completion / 3) * 100}%` }} />
        </div>

        <div className="mt-8 space-y-8">
          <div>
            <p className="text-sm font-bold text-slate-200">1. Choose the world they live in</p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setAnswers({ ...answers, orgType: industry.id })}
                  className={`rounded-2xl border p-4 text-left transition ${optionClass(answers.orgType === industry.id)}`}
                >
                  <span className="text-2xl">{industry.emoji}</span>
                  <span className="mt-2 block text-sm font-bold">{industry.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-200">2. Choose the need</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <button
                  key={problem.id}
                  type="button"
                  onClick={() => setAnswers({ ...answers, problem: problem.id })}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${optionClass(answers.problem === problem.id)}`}
                >
                  {problem.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-200">3. Choose the timeline</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {urgencyOptions.map((urgency) => (
                <button
                  key={urgency.id}
                  type="button"
                  onClick={() => setAnswers({ ...answers, urgency: urgency.id })}
                  className={`rounded-2xl border px-4 py-3 text-center text-sm font-bold transition ${optionClass(answers.urgency === urgency.id)}`}
                >
                  {urgency.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-cyan-300/30 bg-cyan-400/10 p-6 shadow-2xl shadow-black/20">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Live Recommendation</p>
        {recommendation ? (
          <div className="mt-5">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Demo preview</p>
              <h3 className="mt-3 text-3xl font-black">{recommendation.previewHeadline}</h3>
              <p className="mt-3 text-slate-300">{recommendation.previewSubtext}</p>
            </div>
            <h3 className="mt-7 text-4xl font-black">{recommendation.title}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-200">{recommendation.summary}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Language direction</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{recommendation.demoLanguage}</p>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Best starting package</p>
              <p className="mt-2 text-xl font-bold text-white">{recommendation.package}</p>
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300">
              {recommendation.next}
            </Link>
          </div>
        ) : (
          <div className="mt-5 rounded-3xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-4xl font-black">Your best-fit demo will appear here.</h3>
            <p className="mt-4 text-lg leading-8 text-slate-300">Choose an industry, need, and timeline. The recommendation will adapt the wording to match that world.</p>
          </div>
        )}
      </div>
    </div>
  )
}
