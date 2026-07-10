interface InputProps {
  label?: string
  type?: "text" | "email" | "password" | "number"
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  className?: string
  required?: boolean
  disabled?: boolean
}

// Your implementation here