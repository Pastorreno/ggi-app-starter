export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-3xl font-bold">Contact GGI Hub</h1>
        <p className="text-gray-400">AI solutions for real business problems.</p>
        <a href="mailto:hello@ggihub.com" className="inline-block bg-white text-gray-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Email Us
        </a>
      </div>
    </main>
  )
}
