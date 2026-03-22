'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [entries, setEntries] = useState<any[]>([])

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)
      const { data } = await supabase.from('entries').select('*').order('created_at', { ascending: false })
      setEntries(data || [])
    }
    getUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-3">
            <Link href="/submit" className="bg-white text-gray-950 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
              + New Entry
            </Link>
            <button onClick={handleLogout} className="border border-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-500 transition text-sm">
              Sign Out
            </button>
          </div>
        </div>
        {user && <p className="text-gray-400">Signed in as {user.email}</p>}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Recent Entries ({entries.length})</h2>
          {entries.length === 0 ? (
            <p className="text-gray-500">No entries yet. Submit the first one.</p>
          ) : (
            entries.map(entry => (
              <div key={entry.id} className="bg-gray-900 rounded-xl p-5 space-y-1">
                <p className="font-semibold">{entry.name}</p>
                <p className="text-gray-400 text-sm">{entry.email} · {entry.phone}</p>
                {entry.notes && <p className="text-gray-300 text-sm">{entry.notes}</p>}
                <p className="text-gray-600 text-xs">{new Date(entry.created_at).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
