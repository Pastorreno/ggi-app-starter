'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

type Answers = {
  orgType: string
  problem: string
  urgency: string
}

const recommendations = {
  website: {
    title: 'LaunchSite System',
    summary: 'A clean website or landing page that gives your organization a professional front door and moves visitors toward action.',
    package: 'Starter or Growth LaunchSite',
    next: 'Request a website quote',
  },
  followUp: {
    title: 'Follow-Up System',
    summary: 'A simple tracking and assignment system so leads, visitors, clients, volunteers, or participants do not fall through the cracks.',
    package: 'Starter Follow-Up or Growth Follow-Up',
    next: 'Map my follow-up process',
  },
  messaging: {
    title: 'Messaging World Build',
    summary: 'A private mobile-first community hub in WhatsApp, Telegram, or both for communication, resources, onboarding, and engagement.',
    package: 'Starter or Growth Messaging World',
    next: 'Build my messaging world',
  },
  development: {
    title: 'PurposePath / GrowthPath System',
    summary: 'A development pathway that helps people discover their why, understand their wiring, and grow through clear next steps.',
    package: 'PurposePath Workshop or GrowthPath Starter',
    next: 'Explore development systems',
  },
}

function getRecommendation(answers: Answers) {
  if (answers.problem === 'website') return recommendations.website
  if (answers.problem === 'follow-up') return recommendations.followUp
  if (answers.problem === 'messaging') return recommendations.messaging
  if (answers.problem === 'development') return recommendations.development
  return null
}

export function QualifierDemo() {
  const [answers, setAnswers] = useState<Answers>({ orgType: '', problem: '', urgency: '' })

  const recommendation = useMemo(() => getRecommendation(answers), [answers])

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Smart Qualifier Demo</p>
        <h2 className="mt-4 text-3xl font-bold">Tell us what you are trying to solve.</h2>
        <div className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-semibold text-zinc-300">What type of organization are you?</span>
            <select
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white"
              value={answers.orgType}
              onChange={(event) => setAnswers({ ...answers, orgType: event.target.value })}
            >
              <option value="">Select one</option>
              <option value="business">Business</option>
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
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Best starting package</p>
              <p className="mt-2 text-xl font-bold text-white">{recommendation.package}</p>
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-amber-300 px-6 py-3 font-bold text-zinc-950 hover:bg-amber-200">
              {recommendation.next}
            </Link>
          </div>
        ) : (
          <div className="mt-5">
            <h3 className="text-4xl font-black">Your best-fit solution will appear here.</h3>
            <p className="mt-4 text-lg leading-8 text-zinc-300">Choose the options on the left and this demo will recommend the best GGI Solutions starting point.</p>
          </div>
        )}
      </div>
    </div>
  )
}
