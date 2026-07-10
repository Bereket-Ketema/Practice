interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "danger" | "outline"
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  className?: string
  fullWidth?: boolean
}

// Your implementation here