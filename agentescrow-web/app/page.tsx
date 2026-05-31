export default function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-white mb-4">
          Safe Capital for Autonomous Agents
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          AgentEscrow provides velocity throttling, circuit breakers, and whitelisting 
          to safely give AI agents on-chain capital access.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
            Connect Wallet
          </button>
          <a href="/docs" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium">
            Learn More
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-900 border border-slate-700 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-2">Velocity Throttling</h3>
          <p className="text-slate-400">Daily spending limits prevent runaway costs</p>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-700 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-2">Circuit Breaker</h3>
          <p className="text-slate-400">Emergency pause mechanism for instant safety</p>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-700 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-2">Whitelisting</h3>
          <p className="text-slate-400">Only send funds to approved addresses</p>
        </div>
      </div>

      <div className="bg-blue-900/20 border border-blue-800 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to manage AI agent funds safely?</h2>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
          Create Your First Vault
        </button>
      </div>
    </div>
  );
}
