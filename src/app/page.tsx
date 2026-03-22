import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">GGI Hub</h1>
        <p className="text-gray-400 text-xl">AI Solutions for Real Business Problems</p>
        <div className="flex gap-4 justify-center pt-4">
          <Link href="/login" className="bg-white text-gray-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Sign In
          </Link>
          <Link href="/contact" className="border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-500 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
