export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>AgentEscrow</h1>
        <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2rem' }}>
          Smart contract guardrails for autonomous AI agents
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #475569' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Velocity Throttling</h2>
            <p style={{ color: '#cbd5e1' }}>Daily spending limits prevent runaway costs</p>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #475569' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Circuit Breaker</h2>
            <p style={{ color: '#cbd5e1' }}>Emergency pause mechanism for instant safety</p>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #475569' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Whitelisting</h2>
            <p style={{ color: '#cbd5e1' }}>Only send funds to approved addresses</p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <a href="https://github.com/Torisbrain/agentescrow" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '1.125rem' }}>
            View on GitHub →
          </a>
        </div>
      </div>
    </main>
  );
}
