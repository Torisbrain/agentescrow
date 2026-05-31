import './globals.css'

export const metadata = {
  title: 'AgentEscrow',
  description: 'Smart contract guardrails for autonomous AI agents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
