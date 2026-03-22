'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SubmitPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from('entries').insert([form])
    if (!error) {
      setSuccess(true)
      setTimeout(() => router.push('/dashboard'), 2000)
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold">New Entry</h1>
        {success ? (
          <div className="bg-green-900 rounded-xl p-6 text-center">
            <p className="text-green-300 font-semibold">Entry saved! Redirecting...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-8 space-y-4">
            {['name', 'email', 'phone'].map(field => (
              <input
                key={field}
                type={field === 'email' ? 'email' : 'text'}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={(form as any)[field]}
                onChange={e => setForm({ ...form, [field]: e.target.value })}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required={field !== 'phone'}
              />
            ))}
            <textarea
              placeholder="Notes"
              value={form.notes}
              onChange={e => setForm({ ...form, notes: e.target.value })}
              rows={4}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-gray-950 py-3 rounded-lg font-semibold hover:bg-gray-100 transition disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Entry'}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
