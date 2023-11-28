import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-352 m-auto p-6">
      <section className="text-white">
        <h1>
          СТО на
          <br />
          Дорожній
        </h1>
        <h2 className="mb-6">Послуги</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="w-full h-96 bg-coal-800 rounded-xl shadow-accent border border-accent-yellow" />
          <div className="w-full h-96 bg-coal-800 rounded-xl shadow-dark border border-coal-600" />
          <div className="w-full h-96 bg-coal-800 rounded-xl shadow-dark border border-coal-600" />
          <div className="w-full h-96 bg-coal-800 rounded-xl shadow-dark border border-coal-600" />
          <div className="w-full h-96 bg-coal-800 rounded-xl shadow-dark border border-coal-600" />
          <div className="w-full h-96 bg-coal-800 rounded-xl shadow-dark border border-coal-600" />
          <div className="w-full h-96 bg-coal-800 rounded-xl shadow-dark border border-coal-600" />
          <div className="w-full h-96 bg-coal-800 rounded-xl shadow-dark border border-coal-600" />
        </div>
      </section>
    </main>
  )
}
