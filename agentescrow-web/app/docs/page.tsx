export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Documentation</h1>
      
      <div className="space-y-8">
        <section className="bg-slate-900 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">What is AgentEscrow?</h2>
          <p className="text-slate-300">
            AgentEscrow is a smart contract system that provides guardrails for autonomous AI agents.
            It enforces spending limits, provides emergency pause mechanisms, and ensures funds only go to trusted addresses.
          </p>
        </section>

        <section className="bg-slate-900 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Core Features</h2>
          <ul className="space-y-3 text-slate-300">
            <li>✅ <strong>Velocity Throttling:</strong> Daily spending limits</li>
            <li>✅ <strong>Circuit Breaker:</strong> Emergency pause</li>
            <li>✅ <strong>Whitelisting:</strong> Approved recipients only</li>
            <li>✅ <strong>Production-Grade:</strong> 28 tests, fully proven</li>
          </ul>
        </section>

        <section className="bg-slate-900 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
          <ol className="space-y-3 text-slate-300 list-decimal list-inside">
            <li>Connect your Web3 wallet</li>
            <li>Create a vault for your AI agent</li>
            <li>Deposit ETH into the vault</li>
            <li>Whitelist trusted recipient addresses</li>
            <li>Agent can now request funds up to daily limit</li>
          </ol>
        </section>

        <section className="bg-slate-900 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Smart Contract</h2>
          <p className="text-slate-300 mb-4">
            The smart contract is production-grade and has passed 28 comprehensive tests including fuzz testing.
          </p>
          <a href="https://github.com/Torisbrain/agentescrow" className="text-blue-400 hover:text-blue-300">
            View Smart Contract on GitHub →
          </a>
        </section>
      </div>
    </div>
  );
}
