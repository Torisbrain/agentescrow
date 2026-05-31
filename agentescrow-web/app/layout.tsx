export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>AgentEscrow</title>
        <meta name="description" content="Smart contract guardrails for autonomous AI agents" />
      </head>
      <body className="bg-slate-950 text-slate-100">
        <div className="min-h-screen flex flex-col">
          <nav className="p-4 border-b border-slate-800">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white">AgentEscrow</h1>
              <a href="https://github.com/Torisbrain/agentescrow" className="text-blue-400 hover:text-blue-300">GitHub</a>
            </div>
          </nav>
          <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
            {children}
          </main>
          <footer className="border-t border-slate-800 p-4 text-center text-slate-500">
            <p>© 2026 AgentEscrow - Smart Contract Guardrails for AI Agents</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
