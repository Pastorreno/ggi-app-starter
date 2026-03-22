'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()
  const [entries, setEntries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data } = await supabase.from('entries').select('*').order('created_at', { ascending: false })
      setEntries(data || [])
      setLoading(false)
    }
    load()
  }, [router])

  const handleDelete = async (id: string) => {
    await supabase.from('entries').delete().eq('id', id)
    setEntries(entries.filter(e => e.id !== id))
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <p className="text-gray-400">All entries — {entries.length} total</p>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-gray-800">
                  <th className="text-left py-3 pr-4">Name</th>
                  <th className="text-left py-3 pr-4">Email</th>
                  <th className="text-left py-3 pr-4">Phone</th>
                  <th className="text-left py-3 pr-4">Notes</th>
                  <th className="text-left py-3">Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {entries.map(entry => (
                  <tr key={entry.id} className="border-b border-gray-900 hover:bg-gray-900 transition">
                    <td className="py-3 pr-4 font-medium">{entry.name}</td>
                    <td className="py-3 pr-4 text-gray-400">{entry.email}</td>
                    <td className="py-3 pr-4 text-gray-400">{entry.phone}</td>
                    <td className="py-3 pr-4 text-gray-400 max-w-xs truncate">{entry.notes}</td>
                    <td className="py-3 text-gray-600 text-xs">{new Date(entry.created_at).toLocaleDateString()}</td>
                    <td className="py-3 pl-4">
                      <button onClick={() => handleDelete(entry.id)} className="text-red-500 hover:text-red-400 text-xs">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
