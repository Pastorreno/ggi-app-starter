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
}

const industryLanguage: Record<string, { label: string; people: string; action: string; demo: string }> = {
  business: {
    label: 'Business / Corporate',
    people: 'leads, customers, staff, and prospects',
    action: 'increase qualified inquiries, improve operations, and move prospects toward the right offer',
    demo: 'Your demo should speak in business terms: leads, sales conversations, customer journey, operations, revenue, and conversion.',
  },
  church: {
    label: 'Church / Ministry',
    people: 'visitors, members, volunteers, ministry teams, and families',
    action: 'strengthen communication, follow-up, discipleship, care, and next steps',
    demo: 'Your demo should speak in ministry terms: visitors, discipleship, care, serving, prayer, leadership, and member engagement.',
  },
  nonprofit: {
    label: 'Nonprofit',
    people: 'participants, volunteers, donors, staff, and community partners',
    action: 'improve engagement, volunteer coordination, participant support, and impact tracking',
    demo: 'Your demo should speak in nonprofit terms: mission, volunteers, participants, donors, impact, services, and support.',
  },
  school: {
    label: 'School / Youth Program',
    people: 'students, parents, staff, mentors, and program participants',
    action: 'support student growth, family communication, mentorship, engagement, and progress visibility',
    demo: 'Your demo should speak in education terms: students, parents, growth, mentorship, attendance, character, progress, and readiness.',
  },
  creator: {
    label: 'Coach / Creator',
    people: 'clients, subscribers, members, prospects, and community followers',
    action: 'grow a community, qualify clients, deliver resources, and guide people into the right offer',
    demo: 'Your demo should speak in creator terms: audience, clients, members, content, offers, community, and accountability.',
  },
}

function getRecommendation(answers: Answers): Recommendation | null {
  const industry = industryLanguage[answers.orgType]
  if (!industry || !answers.problem) return null

  const base = {
    website: {
      title: `${industry.label} LaunchSite`,
      summary: `A clean website or landing page designed for your ${industry.label.toLowerCase()} audience so ${industry.people} can understand the offer and take the right next step.`,
      package: 'Starter or Growth LaunchSite',
      next: 'Request a website quote',
    },
    'follow-up': {
      title: `${industry.label} Follow-Up System`,
      summary: `A simple system to track ${industry.people}, assign next steps, and make sure important people and opportunities do not fall through the cracks.`,
      package: 'Starter Follow-Up or Growth Follow-Up',
      next: 'Map my follow-up process',
    },
    messaging: {
      title: `${industry.label} Messaging World`,
      summary: `A private mobile-first communication hub in WhatsApp, Telegram, or both to help you ${industry.action}.`,
      package: 'Starter or Growth Messaging World',
      next: 'Build my messaging world',
    },
    development: {
      title: `${industry.label} Growth System`,
      summary: `A growth and development pathway that helps ${industry.people} understand where they are, what they need next, and how to move forward with support.`,
      package: 'PurposePath Workshop or GrowthPath Starter',
      next: 'Explore development systems',
    },
  }

  const selected = base[answers.problem as keyof typeof base]
  return { ...selected, demoLanguage: industry.demo }
}

export function QualifierDemo() {
  const [answers, setAnswers] = useState<Answers>({ orgType: '', problem: '', urgency: '' })

  const recommendation = useMemo(() => getRecommendation(answers), [answers])

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Smart Qualifier Demo</p>
        <h2 className="mt-4 text-3xl font-bold">Tell us your industry first.</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-400">The system stays the same. The wording changes to fit the world your buyer lives in.</p>
        <div className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-semibold text-zinc-300">What industry are you in?</span>
            <select
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white"
              value={answers.orgType}
              onChange={(event) => setAnswers({ ...answers, orgType: event.target.value })}
            >
              <option value="">Select one</option>
              <option value="business">Business / Corporate</option>
              <option value="church">Church / Ministry</option>
              <option value="nonprofit">Nonprofit</option>
              <option value="school">School / Youth Program</option>
              <option value="creator">Coach / Creator</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-zinc-300">What do you need most right now?</span>
            <select
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white"
              value={answers.problem}
              onChange={(event) => setAnswers({ ...answers, problem: event.target.value })}
            >
              <option value="">Select one</option>
              <option value="website">A website or landing page</option>
              <option value="follow-up">Better follow-up</option>
              <option value="messaging">A private communication hub</option>
              <option value="development">A people growth/development system</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-zinc-300">How soon do you need it?</span>
            <select
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white"
              value={answers.urgency}
              onChange={(event) => setAnswers({ ...answers, urgency: event.target.value })}
            >
              <option value="">Select one</option>
              <option value="now">As soon as possible</option>
              <option value="month">Within 30 days</option>
              <option value="planning">Still planning</option>
            </select>
          </label>
        </div>
      </div>

      <div className="rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Recommendation</p>
        {recommendation ? (
          <div className="mt-5">
            <h3 className="text-4xl font-black">{recommendation.title}</h3>
            <p className="mt-4 text-lg leading-8 text-zinc-200">{recommendation.summary}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Demo language direction</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">{recommendation.demoLanguage}</p>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Best starting package</p>
              <p className="mt-2 text-xl font-bold text-white">{recommendation.package}</p>
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">
              {recommendation.next}
            </Link>
          </div>
        ) : (
          <div className="mt-5">
            <h3 className="text-4xl font-black">Your best-fit demo will appear here.</h3>
            <p className="mt-4 text-lg leading-8 text-zinc-300">Choose an industry and need. The recommendation will adapt the wording to match that world.</p>
          </div>
        )}
      </div>
    </div>
  )
}
