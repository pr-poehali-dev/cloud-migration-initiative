import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ background: 'hsl(var(--pastel-bg))' }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 20%, hsl(var(--pastel-blue) / 0.5) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, hsl(var(--pastel-rose) / 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 30%, hsl(var(--pastel-lavender) / 0.3) 0%, transparent 40%)
          `
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}
