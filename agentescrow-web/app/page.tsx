export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">AgentEscrow</h1>
        <p className="text-xl text-slate-400 mb-8">Smart contract guardrails for autonomous AI agents</p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-2">Velocity Throttling</h2>
            <p className="text-slate-300">Daily spending limits prevent runaway costs</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-2">Circuit Breaker</h2>
            <p className="text-slate-300">Emergency pause mechanism for instant safety</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-2">Whitelisting</h2>
            <p className="text-slate-300">Only send funds to approved addresses</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://github.com/Torisbrain/agentescrow" className="text-blue-400 hover:text-blue-300 text-lg">
            View on GitHub →
          </a>
        </div>
      </div>
    </main>
  )
}
