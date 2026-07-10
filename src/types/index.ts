export interface User {
  id: number
  name: string
  email: string
  password?: string
  avatar?: string
}

export interface Task {
  id: number
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
  priority: "low" | "medium" | "high"
  userId: number
  createdAt: string
  dueDate?: string
  tags: string[]
}

export interface Comment {
  id: number
  taskId: number
  userId: number
  content: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export type TaskStatus = "todo" | "in-progress" | "done"
export type TaskPriority = "low" | "medium" | "high"