interface ButtonProps {
  label: string
  onClick: () => void
  variant?: "primary" | "secondary" | "danger"
  disabled?: boolean
}

export function Button({ label, onClick, variant = "primary", disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  )
}

//with childs

interface CardProps {
  title: string
  children: React.ReactNode  // Can be any React renderable content
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  )
}

// Usage:
<Card title="Welcome">
  <p>This is the content</p>
  <Button label="Click me" onClick={() => {}} />
</Card>